import Image from "next/image";
import Link from "next/link";
import commonStyles from "../page.module.css";
import workStyles from "./page.module.css";
import TypewriterText from "../components/animation/TypewriterText";
import { getStudyLogs } from "../libs/microcms";

export default async function WorksPage() {
  const { contents: studyLogs } = await getStudyLogs();
  const latestStudyLogs = studyLogs.slice(0, 3);

  return (
    <main className={commonStyles.page}>
      {/* Hero */}
      <section className={commonStyles.hero}>
        <h1 className={commonStyles.heroTitle}>
          <TypewriterText text="Works" startOnView />
        </h1>

        <p className={commonStyles.heroSubtitle}>Projects I have worked on</p>
      </section>

      {/* Works List */}
      <section className={workStyles.workGrid}>
        {/* Work Card 1 */}
        <article className={workStyles.workCard}>
          <h2 className={workStyles.workTitle}>Portfolio Website</h2>

          <p className={workStyles.workText}>
            自身のポートフォリオサイトです。Next.js、TypeScript、CSS Modulesを使用し、
            シンプルで見やすい構成を意識して制作しました。
            <br />
            microCMS APIを使った学習記録の表示にも取り組んでいます。
          </p>

          <ul className={workStyles.workTech}>
            <li className={workStyles.workTechItem}>Next.js</li>
            <li className={workStyles.workTechItem}>TypeScript</li>
            <li className={workStyles.workTechItem}>React</li>
            <li className={workStyles.workTechItem}>CSS Modules</li>
            <li className={workStyles.workTechItem}>microCMS</li>
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

        {/* Work Card 2 */}
        <article className={workStyles.workCard}>
          <h2 className={workStyles.workTitle}>Django Main Project</h2>

          <p className={workStyles.workText}>
            MySQLとDjangoを連携した簡単なデータ管理アプリを制作しました。
            <br />
            MySQLのセットアップから、データベース連携、画面表示まで一通り経験しています。
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

      {/* Study Log from microCMS */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Study Log</h2>

        <p className={commonStyles.blockText}>
          microCMSのAPIから取得した学習記録です。
          参考書や制作過程を記録し、API連携を使った更新しやすい構成にしています。
        </p>

        {latestStudyLogs.length > 0 ? (
          <div className={workStyles.workGrid}>
            {latestStudyLogs.map((log) => (
              <article key={log.id} className={workStyles.workCard}>
                {log.image?.url && (
                  <Image
                    src={log.image.url}
                    alt={log.title}
                    width={log.image.width}
                    height={log.image.height}
                    className={workStyles.studyLogImage}
                  />
                )}

                <h3 className={workStyles.workTitle}>{log.title}</h3>

                {log.description && (
                  <p className={workStyles.workText}>{log.description}</p>
                )}

                {log.tags && log.tags.length > 0 && (
                  <ul className={workStyles.workTech}>
                    {log.tags.map((tag) => (
                      <li key={tag} className={workStyles.workTechItem}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className={commonStyles.blockText}>
            現在、学習記録は登録されていません。
          </p>
        )}

        <div className={workStyles.viewMoreArea}>
          <Link href="/study-log" className={workStyles.viewMoreButton}>
            View More →
          </Link>
        </div>
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