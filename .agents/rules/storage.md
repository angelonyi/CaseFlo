---
Trigger: Model decision
---

*   **Rule:** Generate short-lived presigned URLs for all document downloads.
*   **Reason:** The S3 bucket is strictly private, and clients must only access approved documents temporarily.
*   **Rule:** Set the expiration time for presigned URLs to a maximum of 15 minutes.
*   **Reason:** A short lifespan minimizes the risk of a client sharing a link with unauthorized parties.
*   **Rule:** Store strictly the S3 object key (`pdfKey`) in the PostgreSQL database, never the full S3 URL.
*   **Reason:** Hardcoded URLs break if the bucket name, region, or storage provider changes in the future.
*   **Rule:** Initialize the AWS S3 client using only the environment variables defined in `src/lib/env.ts` (`AWS_REGION`, `AWS_BUCKET_NAME`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`).
*   **Reason:** Hardcoding credentials or regions into the repository is a critical security vulnerability.
*   **Rule:** Never expose the raw `pdfKey` or the S3 bucket name to the client frontend.
*   **Reason:** Exposing internal storage architecture assists malicious actors in probing the infrastructure.