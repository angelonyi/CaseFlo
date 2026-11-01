---
Trigger: Model decision
---

*   **Rule:** Store and calculate all money amounts in the database as whole numbers in kobo.
*   **Reason:** Floating point math causes rounding errors in financial data.
*   **Rule:** Convert kobo to whole Naira before sending the payload to the Flutterwave API.
*   **Reason:** Flutterwave processes NGN transactions using Naira.
*   **Rule:** Verify the `verif-hash` header on every incoming Flutterwave webhook against your secret hash.
*   **Reason:** This prevents malicious actors from sending fake payment success events.
*   **Rule:** Implement an idempotency key for all database updates triggered by webhooks.
*   **Reason:** Idempotency prevents double counting if Flutterwave sends the same event twice.
*   **Rule:** Display a persistent, non-dismissible overdue warning banner on all app views if an invoice remains unpaid for more than 30 days from its creation date, but do not block access to any features.
*   **Reason:** The business policy requires warning the client about overdue payments without revoking their access to case records or the policy Q&A