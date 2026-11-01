---
Trigger: Model decision
---

*   **Rule:** Fetch private case records using only the exact customer ID from the verified session.
*   **Reason:** This guarantees zero data leakage across different clients.
*   **Rule:** Show clients only approved updates, documents, and invoices.
*   **Reason:** Unapproved records are drafts that might contain errors.
*   **Rule:** Staff cannot approve records.
*   **Reason:** This enforces the quality control hierarchy.
*   **Rule:** The Owner can only approve records for their own firm.
*   **Reason:** This prevents cross firm data manipulation.
