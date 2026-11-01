import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.badge} aria-hidden="true">
            CF
          </div>

          <h1 className={styles.title}>CaseFlo</h1>
          
          <p className={styles.tagline}>
            Law firm client portal. Check case updates, read approved documents, and pay fees seamlessly.
          </p>

          <div className={styles.actionGroup}>
            <button type="button" className={styles.primaryButton}>
              Client Sign In
            </button>
            <button type="button" className={styles.secondaryButton}>
              Law Firm Staff & Owner Login
            </button>
          </div>

          <div className={styles.privacyNotice} role="note">
            <p className={styles.privacyText}>
              <strong>Private & Confidential:</strong> Case records and invoices are isolated by verified session.
            </p>
          </div>
        </div>

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} CaseFlo. Strictly multi-tenant client portal.
        </footer>
      </div>
    </main>
  );
}

