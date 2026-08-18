import Image from "next/image";
import Link from "next/link";
import commonStyles from "../page.module.css";
import aboutStyles from "./page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function AboutPage() {
  return (
    <main className={commonStyles.page}>
      {/* Hero */}
      <section className={commonStyles.hero}>
        <div className={aboutStyles.aboutHero}>
          <div className={aboutStyles.aboutHeroText}>
            <h1 className={commonStyles.heroTitle}>
              <TypewriterText text="Yuki Taniuchi" startOnView />
            </h1>

            <p className={commonStyles.heroSubtitle}>
              Web・Software Engineer / Student
            </p>

            <p className={commonStyles.heroLead}>
              React / Next.js を中心に、Webアプリケーション開発を学習しています。
              フロントエンドを軸に、バックエンドやデータベースも含めた開発に取り組んでいます。
            </p>
          </div>

          <div className={aboutStyles.profileImageWrap}>
            <Image
              src="/profile/profile.jpg"
              alt="Yuki Taniuchi profile photo"
              width={220}
              height={220}
              className={aboutStyles.profileImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Profile</h2>
        <p className={commonStyles.blockText}>
          エンジニアを目指して学習中です。
          React / Next.js を使ったWebアプリケーション開発を中心に、
          MySQL や Firebase を用いたデータ管理、Djangoを使った簡単な管理アプリの制作にも取り組んできました。
          将来的には、フロントエンドを軸に、より広い領域で価値を届けられるエンジニアを目指しています。
          クリエイティブな会社に憧れていて、デザインされたものを構築・アレンジするのが好きです。
        </p>
      </section>

      {/* Skills */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Skills</h2>

        <ul className={commonStyles.skillList}>
          <li className={commonStyles.skillPill}>HTML / CSS</li>
          <li className={commonStyles.skillPill}>JavaScript / TypeScript</li>
          <li className={commonStyles.skillPill}>React / Next.js</li>
          <li className={commonStyles.skillPill}>Node.js (Basic)</li>
          <li className={commonStyles.skillPill}>Java</li>
          <li className={commonStyles.skillPill}>Python</li>
          <li className={commonStyles.skillPill}>MySQL</li>
          <li className={commonStyles.skillPill}>Firebase</li>
          <li className={commonStyles.skillPill}>Dart / Flutter</li>
          <li className={commonStyles.skillPill}>GitHub</li>
          <li className={commonStyles.skillPill}>PHP</li>
          <li className={commonStyles.skillPill}>MOS Excel / PowerPoint</li>
          <li className={commonStyles.skillPill}>Linux</li>
        </ul>
      </section>

      {/* Creative Activities */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Creative Activities</h2>

        <p className={commonStyles.blockText}>
          ゲーム、読書、ものづくりが好きです。
          IllustratorやPhotoshopを使ったデザイン制作、フリー素材やAPIを活用したWebサイト制作、
          Dart / Flutterを使ったスマートフォンアプリ開発など、興味を持った分野に幅広く挑戦してきました。
          最近はBlenderを使い、3Dモデリングやアニメーション制作にも取り組んでいます。
        </p>

        <div className={aboutStyles.aboutLinkArea}>
          <Link href="/hobby" className={commonStyles.blockLink}>
            趣味・制作活動を見る
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Experience</h2>

        <p className={commonStyles.blockText}>
          個人開発として、ポートフォリオサイトや簡単なWebアプリの制作を行ってきました。
          UI設計から実装まで一貫して取り組み、GitHubを用いたソースコード管理や開発環境の構築も経験しています。
          今後はAPI連携やCMSを活用した更新性のあるWebサイト制作にも力を入れていきたいと考えています。
        </p>
      </section>

      {/* Vision */}
      <section className={commonStyles.block}>
        <h2 className={commonStyles.blockTitle}>Vision</h2>

        <p className={commonStyles.blockText}>
          技術を通して、ユーザーにとってわかりやすく使いやすいサービスを作ることを目標にしています。
          常に新しい技術を学び、自分が作ったサービスで人々を笑顔にできるエンジニアを目指しています。
        </p>
      </section>

      {/* Contact */}
      <section className={commonStyles.cta}>
        <h2 className={commonStyles.blockTitle}>Contact</h2>

        <p className={commonStyles.blockText}>
          ご興味を持っていただけましたら、お気軽にご連絡ください。
        </p>

        <Link href="/contact" className={commonStyles.ctaButton}>
          Contact Me
        </Link>
      </section>
    </main>
  );
}