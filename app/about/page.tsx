import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.aboutHero}>
          <div className={styles.aboutHeroText}>
            <h1 className={styles.heroTitle}>
              <TypewriterText text="Yuki Taniuchi" startOnView />
            </h1>

            <p className={styles.heroSubtitle}>
              Web・Software Engineer / Student
            </p>

            <p className={styles.heroLead}>
              React / Next.js を中心に、Webアプリケーション開発を学習しています。
              フロントエンドを軸に、バックエンドやデータベースも含めた開発に取り組んでいます。
            </p>
          </div>

          <div className={styles.profileImageWrap}>
            <Image
              src="/profile/profile.jpg"
              alt="Yuki Taniuchi profile photo"
              width={220}
              height={220}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Profile</h2>
        <p className={styles.blockText}>
          エンジニアを目指して学習中です。
          React / Next.js を使ったWebアプリケーション開発を中心に、
          MySQL や Firebase を用いたデータ管理、Djangoを使った簡単な管理アプリの制作にも取り組んできました。
          将来的には、フロントエンドを軸に、より広い領域で価値を届けられるエンジニアを目指しています。
        </p>
      </section>

      {/* Skills */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Skills</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillPill}>HTML / CSS</li>
          <li className={styles.skillPill}>JavaScript / TypeScript</li>
          <li className={styles.skillPill}>React / Next.js</li>
          <li className={styles.skillPill}>Node.js (Basic)</li>
          <li className={styles.skillPill}>Java</li>
          <li className={styles.skillPill}>Python</li>
          <li className={styles.skillPill}>MySQL</li>
          <li className={styles.skillPill}>Firebase</li>
          <li className={styles.skillPill}>Dart / Flutter</li>
          <li className={styles.skillPill}>GitHub</li>
          <li className={styles.skillPill}>PHP</li>
          <li className={styles.skillPill}>MOS Excel / PowerPoint</li>
          <li className={styles.skillPill}>Linux</li>
        </ul>
      </section>

      {/* Creative Activities */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Creative Activities</h2>
        <p className={styles.blockText}>
          ゲーム、読書、ものづくりが好きです。
          IllustratorやPhotoshopを使ったデザイン制作、フリー素材やAPIを活用したWebサイト制作、
          Dart / Flutterを使ったスマートフォンアプリ開発など、興味を持った分野に幅広く挑戦してきました。
          最近はBlenderを使い、3Dモデリングやアニメーション制作にも取り組んでいます。
        </p>
        
      </section>
      <Link href="/hobby" className={styles.blockLink}>
        趣味・制作活動を見る
      </Link>


      {/* Experience */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Experience</h2>
        <p className={styles.blockText}>
          個人開発として、ポートフォリオサイトや簡単なWebアプリの制作を行ってきました。
          UI設計から実装まで一貫して取り組み、GitHubを用いたソースコード管理や開発環境の構築も経験しています。
          今後はAPI連携やCMSを活用した更新性のあるWebサイト制作にも力を入れていきたいと考えています。
        </p>
      </section>

      {/* Vision */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Vision</h2>
        <p className={styles.blockText}>
          技術を通して、ユーザーにとってわかりやすく使いやすいサービスを作ることを目標にしています。
          常に新しい技術を学び、自分が作ったサービスで人々を笑顔にできるエンジニアを目指しています。
        </p>
      </section>

      {/* Contact */}
      <section className={styles.cta}>
        <h2 className={styles.blockTitle}>Contact</h2>
        <p className={styles.blockText}>
          ご興味を持っていただけましたら、お気軽にご連絡ください。
        </p>

        <Link href="/contact" className={styles.ctaButton}>
          Contact Me
        </Link>
      </section>
    </main>
  );
}