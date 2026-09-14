import Link from "next/link";
import commonStyles from "../page.module.css";
import workStyles from "./page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function WorksPage() {
  return (
    <main className={commonStyles.page}>
      {/* Hero */}
      <section className={commonStyles.hero}>
        <h1 className={commonStyles.heroTitle}>
          <TypewriterText text="Works" startOnView />
        </h1>

        <p className={commonStyles.heroSubtitle}>
          Projects I have worked on
        </p>
      </section>

      {/* Works List */}
      <section className={workStyles.workGrid}>
        {/* Work Card 1 */}
        <article className={workStyles.workCard}>
          <h2 className={workStyles.workTitle}>Portfolio Website</h2>

          <p className={workStyles.workText}>
            自身のポートフォリオサイトです。
            Next.js、TypeScript、CSS Modulesを使用し、
            シンプルで見やすい構成を意識して制作しました。
            <br />
            レスポンシブ対応やアニメーション、
            コンポーネント分割などにも取り組んでいます。
          </p>

          <ul className={workStyles.workTech}>
            <li className={workStyles.workTechItem}>Next.js</li>
            <li className={workStyles.workTechItem}>TypeScript</li>
            <li className={workStyles.workTechItem}>React</li>
            <li className={workStyles.workTechItem}>CSS Modules</li>
          </ul>

          <div className={workStyles.workLinks}>
            <a
              href="https://github.com/tanirup/my-portfolio"
              className={workStyles.workLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        {/* Work Card 2 */}
        <article className={workStyles.workCard}>
          <h2 className={workStyles.workTitle}>Django Main Project</h2>

          <p className={workStyles.workText}>
            MySQLとDjangoを連携した簡単なデータ管理アプリを制作しました。
            <br />
            MySQLのセットアップから、データベース連携、
            画面表示まで一通り経験しています。
          </p>

          <ul className={workStyles.workTech}>
            <li className={workStyles.workTechItem}>Python</li>
            <li className={workStyles.workTechItem}>Django</li>
            <li className={workStyles.workTechItem}>MySQL</li>
            <li className={workStyles.workTechItem}>HTML</li>
            <li className={workStyles.workTechItem}>CSS</li>
            <li className={workStyles.workTechItem}>JavaScript</li>
          </ul>

          <div className={workStyles.workLinks}>
            <a
              href="https://github.com/tanirup?tab=repositories"
              className={workStyles.workLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </section>

      {/* Back */}
      <section className={commonStyles.back}>
        <Link href="/" className={commonStyles.backButton}>
          Back to Home
        </Link>
      </section>
    </main>
  );
}