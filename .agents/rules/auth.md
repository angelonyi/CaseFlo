---
Trigger: Model decision
---

*   **Rule:** Sign client session cookies using strictly the `SESSION_SECRET`.
*   **Reason:** This isolates the client authentication layer.
*   **Rule:** Sign Staff and Owner session cookies using strictly the `STAFF_SESSION_SECRET`.
*   **Reason:** One compromised secret should not mint both kinds of sessions.
*   **Rule:** Extract the `firmId`, `customerId`, and `role` strictly from the server-side cookie payload.
*   **Reason:** Malicious users can manipulate URLs to spoof privileges.
*   **Rule:** Build an email and password authentication flow strictly for Staff and Owner accounts.
*   **Reason:** Internal users bypass the client PIN system.
*   **Rule:** Build client PIN generation strictly into the Staff dashboard, allowing Staff to manually generate and email a 6-digit PIN to the client.
*   **Reason:** The system does not use SMS or automated OTPs to eliminate third-party API costs during the MVP.
*   **Rule:** Lock a client account for 15 minutes after 5 failed PIN attempts.
*   **Reason:** This stops brute force attacks against client accounts.
*   **Rule:** Invalidate all active sessions and require a new Staff-generated PIN when a client's email or phone number changes.
*   **Reason:** A change in contact details implies a potential change in account ownership or device.