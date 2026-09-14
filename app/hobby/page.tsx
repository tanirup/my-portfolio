import Image from "next/image";
import Link from "next/link";
import commonStyles from "../page.module.css";
import hobbyStyles from "./page.module.css";
import TypewriterText from "../components/animation/TypewriterText";
import ReadingGallery from "./ReadingGallery";

const games = [
  {
    src: "/images/games/acecombat8.png",
    alt: "ACE COMBAT 8のパッケージ画像",
    tag: "Flight Shooting",
    title: "10月2日発売・・・ACE COMBAT 8",
    text: "戦闘機による空中戦やスピード感のある演出に興味があります。映像表現やUI、操作感なども参考にしたい作品です。、私はacecombatシリーズの大ファンなので、今作は特に楽しみにしています。",
  },
  {
    src: "/images/games/FE.png",
    alt: "Fire Emblemのパッケージ画像",
    tag: "Simulation RPG",
    title: "9月17日発売・・・Fire Emblem",
    text: "キャラクター、戦略性、世界観の見せ方に魅力を感じています。UIや成長システム、物語の構成にも注目しています。FEシリーズは、過去作も何本かやりこんでやっているので、今作も新しいスキルなど追加らしいので楽しみです",
  },
  {
    src: "/images/games/phantom.png",
    alt: "PHANTOM BLADE 0のキービジュアル",
    tag: "Action RPG",
    title: "10月後半・・・PHANTOM BLADE 0",
    text: "ダークな世界観やアクション演出に惹かれています。ビジュアルの作り込みやゲーム全体の雰囲気に興味があります。死にゲー系のアクションゲームで、ダークな感じと戦闘スタイルがすごく好きです。ぜひ遊んで見たい作品です。",
  },
];

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

        <div className={hobbyStyles.gameFeature}>
          <div className={hobbyStyles.gameFeatureHeader}>
            <p className={hobbyStyles.gameFeatureLabel}>Recently Interested</p>
            <h3 className={hobbyStyles.gameFeatureTitle}>Games I want to play</h3>
            <p className={hobbyStyles.gameFeatureText}>
              最近気になっているゲームです。遊びたい理由だけでなく、
              UI、世界観、演出、操作感なども意識して見ています。
            </p>
          </div>

          <div className={hobbyStyles.gameGrid}>
            {games.map((game) => (
              <article key={game.title} className={hobbyStyles.gameCard}>
                <div className={hobbyStyles.gameImageWrap}>
                  <Image
                    src={game.src}
                    alt={game.alt}
                    width={500}
                    height={650}
                    className={hobbyStyles.gameImage}
                  />
                </div>

                <div className={hobbyStyles.gameContent}>
                  <p className={hobbyStyles.gameTag}>{game.tag}</p>
                  <h4 className={hobbyStyles.gameTitle}>{game.title}</h4>
                  <p className={hobbyStyles.gameText}>{game.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* Reading */}
<section className={commonStyles.block}>
  <h2 className={commonStyles.blockTitle}>Reading</h2>

  <p className={commonStyles.blockText}>
    技術書やビジネス書を中心に読んでいます。
    興味を持った分野は本でも調べながら、開発や資格の勉強に取り入れています。
  </p>

  <ReadingGallery />
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

            <h3 className={hobbyStyles.inspirationName}>Warren Buffett</h3>

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