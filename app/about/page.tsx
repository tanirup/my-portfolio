import Link from "next/link";
import styles from "../page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
      <h1 className={styles.heroTitle}>
          <TypewriterText
            text="Yuki Taniuchi"
            startOnView
          />
        </h1>
        <p className={styles.heroSubtitle}>
          Web・Software Engineer / Student
        </p>
      </section>

      {/* Profile */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Profile</h2>
        <p className={styles.blockText}>
          エンジニアを目指して学習中です。
          フロントエンドを中心に、React / Next.js を使った
          Webアプリケーション開発に取り組んでいます。
          バックエンドについても基礎的な知識があり、
          MySQL や Firebase を用いたデータベース構築経験があります。
          Django を使った授業では、MySQL と連携した
          簡単なデータ管理アプリを制作しました。
          最終的には、世界でも通用するエンジニアを目指しています。
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

      {/* Experience */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Experience</h2>
        <p className={styles.blockText}>
          個人開発として、ポートフォリオサイトや
          簡単な Web アプリの制作を行ってきました。
          UI設計から実装まで一貫して取り組み、
          GitHub を用いたソースコード管理や
          開発環境の構築も一通り経験しています。
        </p>
      </section>

      {/* Vision */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Vision</h2>
        <p className={styles.blockText}>
          技術を通して、ユーザーにとって
          わかりやすく使いやすいサービスを
          作ることを目標にしています。
          常に新しい技術を学び、
          自分が作ったサービスで人々を
          笑顔にできるエンジニアを目指しています。
        </p>
      </section>

      {/* Contact */}
      <section className={styles.cta}>
        <h2 className={styles.blockTitle}>Contact</h2>
        <p className={styles.blockText}>
          ご興味を持っていただけましたら、
          お気軽にご連絡ください。
        </p>

        <Link href="/contact" className={styles.ctaButton}>
          Contact Me
        </Link>
      </section>
    </main>
  );
}
