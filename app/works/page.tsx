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
            自身のポートフォリオサイト。Next.js、CSS、TypeScript、Node.jsを主に使用して、
            シンプルで見やすい構成を意識しました。<br />
            Githubのリンクからソースコードをご覧いただけます
          </p>

          <ul className={styles.workTech}>
            <li className={styles.workTechItem}>Next.js</li>
            <li className={styles.workTechItem}>TypeScript</li>
            <li className={styles.workTechItem}>CSS</li>
            <li className={styles.workTechItem}>React</li>
            <li className={styles.workTechItem}>Node.js</li>
          </ul>

          <div className={styles.workLinks}>
            <a href="https://github.com/tanirup?tab=repositories" className={styles.workLink}>
              GitHub
            </a>
          </div>
        </article>

        {/* Work Card 2 */}
        <article className={styles.workCard}>
          <h2 className={styles.workTitle}>Django_main-project</h2>

          <p className={styles.workText}>
            MySQLとDjangoを連携した簡単なデータ管理アプリを作りました。<br />
            MySQLのセットアップから実装まで経験しています。<br />
            作った作品はGitHubのリンクからRepositoriesのdjango_projectをご覧ください
          </p>

          <ul className={styles.workTech}>
            <li className={styles.workTechItem}>JavaScript</li>
            <li className={styles.workTechItem}>CSS</li>
            <li className={styles.workTechItem}>python</li>
            <li className={styles.workTechItem}>Django</li>
            <li className={styles.workTechItem}>HTML</li>



          </ul>

          <div className={styles.workLinks}>
            <a href="https://github.com/tanirup?tab=repositories" className={styles.workLink}>
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
