import Link from "next/link";
import styles from "../page.module.css";
import TypewriterText from "../components/animation/TypewriterText";

export default function HobbyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <TypewriterText text="Hobby" startOnView />
        </h1>

        <p className={styles.heroSubtitle}>
          Game / Reading / Creative Activities
        </p>

        <p className={styles.heroLead}>
          趣味や制作活動を通して、興味を持ったことを形にする力を伸ばしています。
        </p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Game</h2>
        <p className={styles.blockText}>
          ゲームが好きで、UIや演出、ユーザー体験の面からも興味を持っています。
          楽しむだけでなく、どのように画面が作られているかを意識するようにしています。
        </p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Reading</h2>
        <p className={styles.blockText}>
          技術書やビジネス書を中心に読書をしています。
          学んだ内容は、Web制作や個人開発に少しずつ取り入れています。
        </p>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Creative Activities</h2>
        <p className={styles.blockText}>
          IllustratorやPhotoshopを使ったデザイン制作、
          Flutterを使ったスマートフォンアプリ開発、
          Blenderを使った3D制作などに取り組んでいます。
        </p>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.blockTitle}>About</h2>
        <p className={styles.blockText}>
          プロフィールや学習している技術についてはこちらにまとめています。
        </p>

        <Link href="/about" className={styles.ctaButton}>
          About Me
        </Link>
      </section>
    </main>
  );
}