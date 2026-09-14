import Image from "next/image";
import Link from "next/link";
import commonStyles from "../page.module.css";
import studyStyles from "./page.module.css";
import TypewriterText from "../components/animation/TypewriterText";
import { getStudyLogs } from "../libs/microcms";

export default async function StudyLogPage() {
  const { contents: studyLogs } = await getStudyLogs();

  return (
    <main className={commonStyles.page}>
      {/* Hero */}
      <section className={commonStyles.hero}>
        <h1 className={commonStyles.heroTitle}>
          <TypewriterText text="Study Log" startOnView />
        </h1>

        <p className={commonStyles.heroSubtitle}>
          Learning records powered by microCMS API
        </p>

        <p className={commonStyles.heroLead}>
          学習した内容や制作の記録を、microCMSのAPIから取得して表示しています。
          フロントエンド、バックエンド、アプリ開発などの学習過程をまとめています。
        </p>
      </section>

      {/* Study Log List */}
      <section className={commonStyles.block}>
        <div className={studyStyles.sectionHeader}>
          <div>
            <h2 className={commonStyles.blockTitle}>Learning Records</h2>

            <p className={commonStyles.blockText}>
              参考書、Web制作、アプリ開発、デザイン、3D制作など、
              これまで取り組んできた学習内容を記録しています。
            </p>
          </div>

          <p className={studyStyles.count}>{studyLogs.length} logs</p>
        </div>

        {studyLogs.length > 0 ? (
          <div className={studyStyles.studyGrid}>
            {studyLogs.map((log) => (
              <article key={log.id} className={studyStyles.studyCard}>
                {log.image?.url ? (
                  <Image
                    src={log.image.url}
                    alt={log.title}
                    width={log.image.width}
                    height={log.image.height}
                    className={studyStyles.studyImage}
                  />
                ) : (
                  <div className={studyStyles.imagePlaceholder}>
                    No Image
                  </div>
                )}

                <div className={studyStyles.studyContent}>
                  {log.category && (
                    <p className={studyStyles.studyCategory}>
                      {log.category}
                    </p>
                  )}

                  <h3 className={studyStyles.studyTitle}>{log.title}</h3>

                  {log.description && (
                    <p className={studyStyles.studyText}>{log.description}</p>
                  )}

                  {log.tags && log.tags.length > 0 && (
                    <ul className={studyStyles.studyTags}>
                      {log.tags.map((tag) => (
                        <li key={tag} className={studyStyles.studyTag}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className={studyStyles.emptyText}>
            現在、学習記録は登録されていません。
          </p>
        )}
      </section>

      {/* Back */}
      <section className={commonStyles.back}>
        <Link href="/works" className={commonStyles.backButton}>
          Back to Works
        </Link>
      </section>
    </main>
  );
}