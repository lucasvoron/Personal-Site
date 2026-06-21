import Link from "next/link";
import styles from "./resume.module.css";
import SiteFooter from "../components/SiteFooter";

export default function ResumePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>Resume</h1>
        <p className={styles.subheading}>A compact view of my recent roles, projects, and skills.</p>
      </div>

      <div className={styles.body}>
        <section className={styles.resumeCard}>
          <span className={styles.eyebrow}>Current resume</span>
          <div className={styles.pdfWrapper}>
            <iframe
              src="/resume.pdf"
              className={styles.pdfEmbed}
              title="Lucas Voron Resume"
            />
          </div>
          <a href="/resume.pdf" download className={styles.downloadButton}>
            Download PDF
          </a>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
