import pageStyles from "../page.module.css";
import styles from "./about.module.css";
import SiteFooter from "../components/SiteFooter";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={pageStyles.subPage + " " + styles.aboutContainer}>
      <main className={styles.aboutMain}>
        <h1 className={styles.heroSmall}>ABOUT</h1>

        <div className={styles.content}>
            <p className={styles.description}>
            Bonjour,
            <br />
            <br />
            My name is Lucas, I am a San Francisco Bay Area–based product and UI engineer who blends empathetic design with
            engineering practice to build dynamic, fun, and easy to use interfaces. I enjoy collaborating with diverse teams to make magic happen. I am proficient in Python scripting, but my true love lies in web design & development.
            <br />
            <br />
            Bilingual in English and French, I enjoy hands‑on creative work — drawing, painting, and fashion — alongside outdoor
            activities like climbing and swimming.
            </p>
            <div className={styles.headshotWrapper}>
              <Image 
                src="/headshot.jpg" 
                alt="Lucas Voron" 
                width={400}
                height={400}
                className={styles.headshot}
              />
            </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
