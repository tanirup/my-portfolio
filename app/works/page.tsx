import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";
import TypewriterText from "../components/animation/TypewriterText";
import { getStudyLogs } from "../libs/microcms";

export default async function WorksPage() {
  const { contents: studyLogs } = await getStudyLogs();

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <TypewriterText text="Works" startOnView />
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
            シンプルで見やすい構成を意識しました。
            <br />
            GitHubのリンクからソースコードをご覧いただけます。
          </p>

          <ul className={styles.workTech}>
            <li className={styles.workTechItem}>Next.js</li>
            <li className={styles.workTechItem}>TypeScript</li>
            <li className={styles.workTechItem}>CSS</li>
            <li className={styles.workTechItem}>React</li>
            <li className={styles.workTechItem}>Node.js</li>
          </ul>

          <div className={styles.workLinks}>
            <a
              href="https://github.com/tanirup?tab=repositories"
              className={styles.workLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        {/* Work Card 2 */}
        <article className={styles.workCard}>
          <h2 className={styles.workTitle}>Django_main-project</h2>

          <p className={styles.workText}>
            MySQLとDjangoを連携した簡単なデータ管理アプリを作りました。
            <br />
            MySQLのセットアップから実装まで経験しています。
            <br />
            作った作品はGitHubのRepositoriesからご覧いただけます。
          </p>

          <ul className={styles.workTech}>
            <li className={styles.workTechItem}>JavaScript</li>
            <li className={styles.workTechItem}>CSS</li>
            <li className={styles.workTechItem}>Python</li>
            <li className={styles.workTechItem}>Django</li>
            <li className={styles.workTechItem}>HTML</li>
          </ul>

          <div className={styles.workLinks}>
            <a
              href="https://github.com/tanirup?tab=repositories"
              className={styles.workLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </section>

      {/* Study Log from microCMS */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Study Log</h2>
        <p className={styles.blockText}>
          microCMSのAPIから取得した学習記録です。参考書や制作過程を記録し、
          API連携を使った更新しやすい構成にしています。
        </p>

        <div className={styles.workGrid}>
          {studyLogs.map((log) => (
            <article key={log.id} className={styles.workCard}>
              {log.image?.url && (
                <Image
                  src={log.image.url}
                  alt={log.title}
                  width={log.image.width}
                  height={log.image.height}
                  className={styles.studyLogImage}
                />
              )}

              <h3 className={styles.workTitle}>{log.title}</h3>

              {log.description && (
                <p className={styles.workText}>{log.description}</p>
              )}

              {log.tags && log.tags.length > 0 && (
                <ul className={styles.workTech}>
                  {log.tags.map((tag) => (
                    <li key={tag} className={styles.workTechItem}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
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