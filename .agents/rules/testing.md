---
Trigger: glob
Glob: "**/*.test.ts"
---

*   **Rule:** Write tests specifically covering private data reads to ensure exact customer ID matching.
*   **Reason:** A silent regression here leaks sensitive legal records to the wrong client.
*   **Rule:** Write tests covering the Flutterwave payment confirmation webhook logic.
*   **Reason:** An untested payment webhook can clear an unpaid invoice incorrectly.
*   **Rule:** Place all test files directly beside the code they test using the `*.test.ts` convention.
*   **Reason:** Co-locating tests makes them easy to find.
*   **Rule:** Mock all external API calls during testing.
*   **Reason:** Tests must run quickly without hitting live services.