import Link from "next/link";
import styles from "../page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function WorksPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
          <TypewriterText
            text="Works"
            startOnView
          />
        </h1>
        <p className={styles.heroSubtitle}>Projects I have worked on</p>
      </section>

      {/* Works List */}
      <section className={styles.workGrid}>
        {/* Work Card 1 */}
        <article className={styles.workCard}>
          <h2 className={styles.workTitle}>Portfolio Website</h2>

          <p className={styles.workText}>
            自身のポートフォリオサイト。Next.js と Tailwind CSS を使用して、
            シンプルで見やすい構成を意識しました。
          </p>

          <ul className={styles.workTech}>
            <li className={styles.workTechItem}>Next.js</li>
            <li className={styles.workTechItem}>TypeScript</li>
            <li className={styles.workTechItem}>Tailwind CSS</li>
          </ul>

          <div className={styles.workLinks}>
            <a href="#" className={styles.workLink}>
              Demo
            </a>
            <a href="#" className={styles.workLink}>
              GitHub
            </a>
          </div>
        </article>

        {/* Work Card 2 */}
        <article className={styles.workCard}>
          <h2 className={styles.workTitle}>Simple Web App</h2>

          <p className={styles.workText}>
            React を使った簡単な Web アプリケーション。状態管理や
            コンポーネント設計の理解を目的として制作しました。
          </p>

          <ul className={styles.workTech}>
            <li className={styles.workTechItem}>React</li>
            <li className={styles.workTechItem}>JavaScript</li>
            <li className={styles.workTechItem}>CSS</li>
          </ul>

          <div className={styles.workLinks}>
            <a href="#" className={styles.workLink}>
              Demo
            </a>
            <a href="#" className={styles.workLink}>
              GitHub
            </a>
          </div>
        </article>
      </section>

      {/* Back */}
      <section className={styles.back}>
        <Link href="/" className={styles.backButton}>
          Back to Home
        </Link>
      </section>
    </main>
  );
}
