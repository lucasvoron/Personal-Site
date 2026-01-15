import pageStyles from "../page.module.css";
import styles from "./inrix.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function InrixPage() {
  return (
    <div className={pageStyles.subPage + " " + styles.inrixContainer}>
      <main className={styles.mainColumn}>
        <div className={styles.companyName}>INRIX</div>
        <SkillMarquee skills={["Figma","Vue.js","HTML5","CSS","JavaScript","TypeScript","Docker","GraphQL"]} />

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>Software Development Engineer Intern</h2>
          <p className={styles.date}>Summer 2021</p>
          <p className={styles.paragraph}>
            Focused on front-end UI development of traffic data products to transform the company’s scope from solely DaaS to a hybrid model that includes SaaS. Contributed to all aspects of the end-end design experience partnering with UX, back-end developers, and product management to produce live-updating product web pages. Developed code to handle queries of API data responses through GraphQL layer to display information.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Large Datasets</h3>
            <p className={styles.metricText}>INRIX processes nearly 2 billion data points per day combined with real-time traffic information and other factors like incidents and weather across more than 40 countries</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
