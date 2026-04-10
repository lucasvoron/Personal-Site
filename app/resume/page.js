import pageStyles from "../page.module.css";
import layout from "../subpageLayout.module.css";
import styles from "./resume.module.css";
import SiteFooter from "../components/SiteFooter";

export default function ResumePage() {
  return (
    <div className={`${pageStyles.subPage} ${layout.container}`}>
      <main className={layout.main}>
        <h1 className={layout.heading}>RESUME</h1>
        <div className={styles.pdfWrapper}>
          <iframe
            src="/resume.pdf"
            className={styles.pdfEmbed}
            title="Lucas Voron Resume"
          />
        </div>
        <a
          href="/resume.pdf"
          download
          className={styles.downloadButton}
        >
          Download PDF
        </a>
      </main>
      <SiteFooter />
    </div>
  );
}
