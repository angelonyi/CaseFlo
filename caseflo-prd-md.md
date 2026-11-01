## Caseflo

## Product Summary
CaseFlo is a web app that a law firm gives to its own clients. It is opened in a phone browser, is not a native app, and has no install prompt or offline mode. It allows law firm clients to check case updates, securely download documents, and pay fees. CaseFlo answers policy questions only from the one plain text policy file the owner uploads.

## Problem

Clients lack visibility into their legal matters. A client might call the law firm at 4 PM on a Friday to ask if their court date moved. The front desk staff is busy, promises to check the physical file, and forgets. On Monday, the client travels an hour in heavy traffic to a court they did not need to visit. The client loses a morning of work and loses trust in the lawyer.

Furthermore, law firms struggle with cash flow. Staff generate manual paper invoices, and clients delay payments because the process requires physical visits or cumbersome manual bank transfers.

## Goals

1. Give clients immediate access to their basic case information, documents, and invoices.
2. Reduce inbound phone calls to the law firm front desk for routine updates.
3. Answer standard firm policy questions automatically using only firm-approved materials.
4. Decrease the average time it takes clients to pay an invoice.

## Constraints

1. Ensure zero leakage of private data across different customer or firm accounts. Private records must never be searchable.
2. Private records are never embedded, indexed, searched by meaning, or sent to an AI model.

## Users and Personas

1. **The Client (Primary User):** Chidi is a small business owner in Lagos paying a law firm to secure a property title. He uses a cheap Android phone with a bad network connection. He buys data in small bundles. 
2. **The Staff:** Law firm employees who prepare records behind the scenes. They create client records and issue a 6-digit PIN to the client. They type updates, upload PDFs, and input invoice amounts. They serve as the named fallback contact for the client. Staff authenticate via an email and password flow.
3. **The Owner:** The law firm partner. The owner uploads or replaces one plain text policy file. The owner also reviews and approves every private record entered by staff before a client can see it. Owners authenticate via an email and password flow.

## Scope

**In Scope for Version One:**
- Customer-facing mobile web application.
- Read-only case updates for clients.
- Secure PDF download links generated via short-lived presigned S3 URLs.
- Invoice viewing and Flutterwave gateway integration in Naira.
- Firm policy question and answer feature.
- Overdue account notification banner (invoices >30 days unpaid).
- Staff entry screens (updates, documents, invoices).
- Staff screen to create client records, assign a 6-digit PIN, and email it to the client.
- Client login via email and 6-digit PIN, with strict 15-minute lockout after 5 failed attempts.
- Owner approval screens for updates, documents, and invoices.
- Owner policy file upload and update.
- Basic behavioral logging (login time and document taps only).

**Out of Scope for Version One:**
- In-browser PDF viewers.
- Appointment booking and calendars.
- Automated text messages, emails, or alerts of any kind.
- OTPs, SMS integration, or Termii integration.
- Background AI agents or scheduled jobs acting on the client's behalf.
- Legal advice or predictive case modeling.
- Client self-signup.
- Firm subscriptions, tier pricing, and tier limits (a human manages firms outside the app).

## Functional Requirements

 1. **Authentication:** Clients cannot create accounts. A client can only log in after staff create their account and issue a 6-digit PIN. Staff generate this PIN in their dashboard and email it to the client. Every client login uses email and the 6-digit PIN. Five wrong PIN attempts block the account for 15 minutes. Staff and Owners authenticate via standard email and password.
 2. **Account Updates:** When a client's email or phone number changes, staff update the record in their dashboard, which instantly invalidates all active sessions and requires staff to generate and send a new PIN.
 3. **Case Updates:** The system answers client requests for case status by fetching the latest timeline note. It fetches this record by exact customer ID only. Clients can only read case updates. Staff create them.
 4. **Document Downloads:** The system provides secure download links. It fetches these by exact customer ID.
 5. **Invoice Payment:** A client views approved invoices and pays one invoice in full with Flutterwave in Naira. Refunds, receipts, part payments, and payment plans are not built. 
 6. **Firm Policy Q&A:** A client types one question and gets one answer. There is no chat history. Questions and answers are not stored. CaseFlo answers policy questions only from the one plain text policy file the owner uploads.
 7. **Fallback Mechanism:** When Q&A cannot answer, the system must say so clearly and show the assigned staff member's name and phone from the client's case. If a client has several cases, it must ask first.
 8. **Overdue Notification:** If an invoice is unpaid for more than 30 days from its `createdAt` timestamp, the system displays a persistent warning banner across all screens. The client retains full access to case updates, documents, and Q&A.
 9. **Staff Entry:** Staff create the client account, assign the PIN, create the case, and set the assigned staff name and phone. Staff enter case updates, upload PDFs, and enter invoice amounts. Editing and deleting entries are not in the PRD.
10. **Owner Approval:** The Owner screen lists pending entries with one approve button each. Client accounts and PINs need no approval.
11. **Usage Logging:** Log only LOGIN with its exact time and DOCUMENT_TAP with the document ID. Log nothing else.

## AI and AI related tools and solutions

1. **Semantic Search:** The backend chunks the policy text, calls the Gemini API (gemini-embedding-001 at 768 dimensions), and stores vectors in PostgreSQL. When a user asks a policy question, the system searches these vectors by meaning.
2. **Strict Boundaries:** AI models must never touch private case records. Filter policy vectors by firm ID inside the database query, before similarity is calculated, never after.
3. **Similarity Score Threshold:** If the best chunk's cosine similarity is below 0.75, do not call the LLM. Show the fallback screen.
4. **Answer Generation:** The system uses gemini-1.5-flash to synthesize the final answer. Q&A answers may restate firm policy text only.

## Technical Architecture with a Prisma data model

The application uses Next.js with the App Router, TypeScript in strict mode, PostgreSQL, and Prisma. The architecture is strictly multi-tenant. Firms and the first Owner are set up by a human outside the app via a database script.

Documents sit in a private AWS S3 bucket. The database stores `pdfKey`. A download link is a presigned URL made at each tap. The key is never shown to the client. The S3 endpoint, region, bucket name, and keys come only from environment variables.

All phone numbers are stored in international format (+234, no spaces). All times are stored and compared in UTC.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Firm {
  id         String        @id @default(uuid())
  name       String
  users      User[]
  cases      Case[]
  updates    Update[]
  documents  Document[]
  invoices   Invoice[]
  policies   PolicyChunk[]
}

model User {
  id                 String           @id @default(uuid())
  firmId             String
  firm               Firm             @relation(fields: [firmId], references: [id])
  name               String
  email              String           @unique // Added for email login
  phone              String?          // Made optional as email is primary for login
  role               String           // "CLIENT", "STAFF", "OWNER"
  passwordHash       String?          // For Staff/Owner email login
  pinHash            String?          // For Client 6-digit PIN login
  failedAttempts     Int              @default(0)
  lockedUntil        DateTime?
  cases              Case[]
  logs               Log[]
}

model Case {
  id          String     @id @default(uuid())
  firmId      String
  firm        Firm       @relation(fields: [firmId], references: [id])
  clientId    String
  client      User       @relation(fields: [clientId], references: [id])
  assignedTo  String     // Name of staff fallback
  staffPhone  String     // Phone of staff fallback
  updates     Update[]
  documents   Document[]
  invoices    Invoice[]
}

model Update {
  id          String   @id @default(uuid())
  firmId      String
  firm        Firm     @relation(fields: [firmId], references: [id])
  caseId      String
  case        Case     @relation(fields: [caseId], references: [id])
  content     String
  isApproved  Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model Document {
  id          String   @id @default(uuid())
  firmId      String
  firm        Firm     @relation(fields: [firmId], references: [id])
  caseId      String
  case        Case     @relation(fields: [caseId], references: [id])
  pdfKey      String   // S3 object key for generating presigned URLs
  isApproved  Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model Invoice {
  id          String   @id @default(uuid())
  firmId      String
  firm        Firm     @relation(fields: [firmId], references: [id])
  caseId      String
  case        Case     @relation(fields: [caseId], references: [id])
  amount      Int      // Stored in kobo
  currency    String   @default("NGN")
  isPaid      Boolean  @default(false)
  isApproved  Boolean  @default(false)
  createdAt   DateTime @default(now())
}

model PolicyChunk {
  id          String   @id @default(uuid())
  firmId      String
  firm        Firm     @relation(fields: [firmId], references: [id])
  content     String
  // Add pgvector column in actual implementation
  createdAt   DateTime @default(now())
}

model Log {
  id          String   @id @default(uuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  action      String   // "LOGIN" or "DOCUMENT_TAP"
  targetId    String?  // ID of the document tapped
  createdAt   DateTime @default(now())
}