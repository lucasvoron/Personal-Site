import Link from "next/link";
import styles from "../components/experiencePage.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function InrixPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>← Back</Link>
        <h1 className={styles.heading}>INRIX</h1>
        <p className={styles.subheading}>Transportation intelligence &amp; traffic data platform</p>
      </div>

      <div className={styles.body}>
        <div className={styles.marqueeRow}>
          <SkillMarquee skills={["Figma","Vue.js","HTML5","CSS","JavaScript","Docker","GraphQL"]} />
        </div>

        <div className={styles.roleCard}>
          <div className={styles.roleHeader}>
            <span className={styles.eyebrow}>Internship</span>
            <h2 className={styles.roleTitle}>Software Development Engineer Intern</h2>
            <p className={styles.roleDate}>Summer 2021</p>
          </div>
          <p className={styles.roleBody}>
            Focused on front-end UI development of traffic data products to transform the company&apos;s scope from solely DaaS to a hybrid model that includes SaaS. Contributed to all aspects of the end-to-end design experience partnering with UX, back-end developers, and product management to produce live-updating product web pages. Developed code to handle queries of API data responses through a GraphQL layer to display information.
          </p>
          <div className={styles.metricsGrid}>
            <div className={styles.metricCard}>
              <h3 className={styles.metricTitle}>Large Datasets</h3>
              <p className={styles.metricText}>INRIX processes nearly 2 billion data points per day combined with real-time traffic information and other factors like incidents and weather across more than 40 countries.</p>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
