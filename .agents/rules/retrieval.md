---
Trigger: Model decision
---

*   **Rule:** Filter policy vectors by the exact firm ID inside the database query before you calculate similarity.
*   **Reason:** Filtering after the search risks leaking policy matches from a competing firm.
*   **Rule:** Abort the AI process if the highest matching chunk scores below 0.75 cosine similarity.
*   **Reason:** This threshold prevents the LLM from hallucinating answers.
*   **Rule:** Show the staff fallback screen immediately if you abort the AI process.
*   **Reason:** Clients must have a clear path to human help.
*   **Rule:** Never embed, index, or send private client records to any AI model.
*   **Reason:** The AI is strictly isolated to shared firm policies.
*   **Rule:** Instruct the synthesis model to strictly restate the retrieved policy text and never invent information.
*   **Reason:** Offering legal advice carries massive liability.