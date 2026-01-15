import pageStyles from "../page.module.css";
import styles from "./tiposi.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function TiposiPage() {
  return (
    <div className={pageStyles.subPage + " " + styles.tiposiContainer}>
      <main className={styles.mainColumn}>
        <div className={styles.companyName}>TIPOSI</div>
        <SkillMarquee skills={["Industrial Design","Materials","Prototyping","User Research","Manufacturing"]} />

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>Medical Device Design Consultant</h2>
          <p className={styles.date}>Summer 2020</p>
          <p className={styles.paragraph}>
            Worked directly with the lead project engineer and CEO to create the colors, materials, and finishes of a wearable medical device prototype.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>High Visibility Role</h3>
            <p className={styles.metricText}>Worked with C suite executives to define product vision and strategy.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
