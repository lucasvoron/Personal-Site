import Link from "next/link";
import styles from "../components/experiencePage.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function TiposiPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>TIPOSI</h1>
        <p className={styles.subheading}>Medical device design consultancy</p>
      </div>

      <div className={styles.body}>
        <div className={styles.marqueeRow}>
          <SkillMarquee skills={["Industrial Design","Materials","Prototyping","User Research","Manufacturing"]} />
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <span className={styles.eyebrow}>Consultancy</span>
            <h2 className={styles.roleTitle}>Medical Device Design Consultant</h2>
            <p className={styles.roleDate}>Summer 2020</p>
          </div>
          <p className={styles.roleBody}>
            Worked directly with the lead project engineer and CEO to define the colors, materials, and finishes of a wearable medical device prototype.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>High Visibility Role</h3>
              <p className={styles.metricText}>Worked with C-suite executives to define product vision and strategy.</p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
