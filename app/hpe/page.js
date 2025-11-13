import pageStyles from "../page.module.css";
import styles from "./hpe.module.css";
import SkillMarquee from "../components/SkillMarquee";
import SiteFooter from "../components/SiteFooter";

export default function HpePage() {
  return (
    <div className={pageStyles.page + " " + styles.hpeContainer}>
      <main className={styles.mainColumn}>
        <div className={styles.companyName}>HPE</div>
        <SkillMarquee skills={["Python","Next.js","React","HTML5","CSS","JavaScript","Postman","Charts.js","Data Visualization","Grafana","InfluxDB","Flux","SQL","API","Github Copilot","AI Integration","Figma","Docker","Wordpress","CI/CD"]} />

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>Intermediate Technical Marketing Engineer</h2>
          <p className={styles.date}>
              March 2025 - Present
          </p>
          <p className={styles.paragraph}>
          Working for HPE Aruba Networking’s Automation Team as a Technical Marketing Engineer with a focus on UI/UX Development & Design. I develop efficient automation Python scripts that optimize networking performance for customers while also designing and building web platforms that effectively showcase HPE Aruba Networking products, automation solutions, and resources.
          Beyond development, I work closely with customers and sales engineers, gathering insights to refine automation solutions and ensure they align with real-world networking challenges. I manage the end-to-end development of new tools and products, from concept to deployment, to enhance customer automation capabilities. This role combines my technical expertise, customer engagement, and creative problem-solving to deliver intuitive interfaces and innovative solutions that elevate network management and drive efficiency.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Customer Engagement</h3>
            <p className={styles.metricText}>
              Worked closely with varied customers ranging from small businesses to large enterprises to deliver tailored automation solutions and scripts.
            </p>
          </div>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Global Teams</h3>
            <p className={styles.metricText}>
              Collaborated with engineers & sales teams across North America, Europe, and South Asia to implement automation solutions and share best practices.
            </p>
          </div>
        </div>

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>Technical Marketing Engineer</h2>
          <p className={styles.date}>
              Sept 2023 - March 2025 (1 year 7 months)
          </p>
          <p className={styles.paragraph}>
            Drove a meaningful reduction in downtime and operational overhead through architecture and process improvements.
            Delivered customer‑facing dashboards and automation workflows that simplified complex networking API datasets.
            Improved stakeholder engagement and product adoption through presentations and iterative feedback cycles. 
            Implemented networking AI integrations and created interactive, API-driven dashboards that surface network automation telemetry for varied audiences.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Wide Impact</h3>
            <p className={styles.metricText}>
              Rebuilt the Developer Hub that receives ~650,000 page visits per year.
            </p>
          </div>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Cost Reduction</h3>
            <p className={styles.metricText}>
              Migrated Developer Hub data architecture to WordPress as a headless CMS, substantially reducing upkeep costs and improving site stability.
            </p>
          </div>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Presentation Volume</h3>
            <p className={styles.metricText}>
              Delivered regular presentations to 600+ HPE global employees on Automation and APIs & held partner ambassador presentations to over 100 partners.
            </p>
          </div>
        </div>

        <div className={styles.jobSection}>
          <h2 className={styles.jobTitle}>UI/UX Engineer Intern</h2>
          <p className={styles.date}>
              Summer 2022 (3 months)
          </p>
          <p className={styles.paragraph}>
            Summary:
            <br />
            Designed and developed an end-to-end network automation framework website for HPE Aruba Networking’s Central product, acting as the sole contributor for the full stack deliverable and working directly with the data pipeline engineer.
            <br />
            <br />
            Led UI/UX design in Figma: created wireframes, interactive prototypes, and design refinements based on feedback from the UX team and stakeholders.
            Implemented the front end using Next.js (React), translating designs into responsive, accessible interfaces and reusable components.
            Built full-stack functionality with an AWS-backed API and services, integrating data pipelines to surface live telemetry and status information.
            Developed visualizations to display network health, automation run status, and metrics.
            Implemented network automation workflows and user flows for triggering, monitoring, and managing automated tasks.
            Owned testing, deployment, and iteration cycles; delivered the product from concept to production readiness as a single engineer contributor.
          </p>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Project Presentation Audience</h3>
            <p className={styles.metricText}>Presented design concept to code completion of full stack website to 500+ HPE Employees</p>
          </div>
          <div className={styles.metricBox}>
            <h3 className={styles.metricTitle}>Cross-Functional Exposure</h3>
            <p className={styles.metricText}>Collaborated cross-functionally with UX, data engineering, and product teams to align requirements, prioritize features, and incorporate feedback.</p>
          </div>
          
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
