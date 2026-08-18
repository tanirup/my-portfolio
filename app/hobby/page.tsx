import Image from "next/image";
import Link from "next/link";
import commonStyles from "../page.module.css";
import hobbyStyles from "./page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function HobbyPage() {
  return (
    <main className={commonStyles.page}>
      {/* Hero */}
      <section className={commonStyles.hero}>
        <h1 className={commonStyles.heroTitle}>
          <TypewriterText text="Hobby" startOnView />
        </h1>

        <p className={commonStyles.heroSubtitle}>
          Game / Reading / Creative / Investment
        </p>

        <p className={commonStyles.heroLead}>
          趣味や好きなこと、自分が影響を受けたものを紹介しています。
        </p>
      </section>

      {/* Game */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Game</h2>

        <p className={commonStyles.blockText}>
          ゲームが好きで、普段からさまざまな作品を遊んでいます。
          特に新作ゲームに触れることが好きで、発売前から情報を追いながら楽しみにしています。
          最近はただ遊ぶだけでなく、UIや画面の見せ方、操作したときの分かりやすさなど、
          技術的な視点でもゲームを見るようになりました。
          使用されているゲームエンジンやツール、プログラミング言語についても調べるようにしています。
        </p>
      </section>

      {/* Reading */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Reading</h2>

        <p className={commonStyles.blockText}>
          技術書やビジネス書を中心に読んでいます。
          興味を持った分野は本でも調べながら、開発や資格の勉強に取り入れています。
        </p>

        <div className={hobbyStyles.bookGallery}>
          <article className={hobbyStyles.bookCard}>
            <Image
              src="/hobby/books/book-01.webp"
              alt="これまで勉強に使用した参考書"
              width={600}
              height={400}
              className={hobbyStyles.bookImage}
            />

            <p className={hobbyStyles.bookCaption}>
              ITや資格の勉強で使用してきた参考書
            </p>
          </article>

          <article className={hobbyStyles.bookCard}>
            <Image
              src="/hobby/books/book-02.webp"
              alt="プログラミングや開発に関する参考書"
              width={600}
              height={400}
              className={hobbyStyles.bookImage}
            />

            <p className={hobbyStyles.bookCaption}>
              プログラミングや開発技術について学んだ本
            </p>
          </article>

          <article className={hobbyStyles.bookCard}>
            <Image
              src="/hobby/books/book-03.webp"
              alt="読んできた本"
              width={600}
              height={400}
              className={hobbyStyles.bookImage}
            />

            <p className={hobbyStyles.bookCaption}>
              興味を持った分野について読んできた本
            </p>
          </article>
        </div>
      </section>

      {/* Creative */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Creative Activities</h2>

        <p className={commonStyles.blockText}>
          Webサイトやスマートフォンアプリを作ることが好きです。
          IllustratorやPhotoshopを使ったデザイン制作、Flutterでのアプリ開発にも取り組んできました。
          最近はFigmaの勉強もしており、新しい技術やツールを学んで使うことを楽しんでいます。
        </p>
      </section>

      {/* Inspiration */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>People I Admire</h2>

        <p className={commonStyles.blockText}>
          本やインタビューを通して、考え方や生き方に影響を受けた人物について学んでいます。
          技術だけでなく、物事への向き合い方や判断の軸も、自分なりに取り入れるようにしています。
        </p>

        <div className={hobbyStyles.inspirationGrid}>
          <article className={hobbyStyles.inspirationCard}>
            <p className={hobbyStyles.inspirationLabel}>
              Investor / Reader / Thinker
            </p>

            <h3 className={hobbyStyles.inspirationName}>
              Warren Buffett
            </h3>

            <p className={hobbyStyles.inspirationText}>
              図書館で本を探していたときに彼の本に出会い、投資に対する考え方や、
              長期的に物事を見る姿勢に強く影響を受けました。
              それをきっかけに、さまざまなジャンルの本を読むようになり、
              新聞や決算短信にも目を通すようになりました。
            </p>

            <p className={hobbyStyles.inspirationText}>
              短期的な結果だけで判断するのではなく、
              自分で調べ、理解し、納得して行動する姿勢を大切にしています。
            </p>
          </article>
        </div>
      </section>

      {/* About */}
      <section className={commonStyles.cta}>
        <h2 className={commonStyles.blockTitle}>About</h2>

        <p className={commonStyles.blockText}>
          プロフィールや学習している技術についてはこちらにまとめています。
        </p>

        <Link href="/about" className={commonStyles.ctaButton}>
          About Me
        </Link>
      </section>
    </main>
  );
}