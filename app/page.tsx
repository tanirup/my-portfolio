"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Load from "./load";
import styles from "./page.module.css";
import TypewriterText from "./components/animation/TypewriterText";


export default function Page() {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(timer);
          setLoaded(true);
          return 100;
        }
        return p + 1;
      });
    }, 60);

    return () => window.clearInterval(timer);
  }, []);

  // ロード中は Load コンポーネントだけ表示
  if (!loaded) return <Load progress={progress} />;

  // ロード完了後にメイン画面を表示
  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <TypewriterText
            text="Welcome to My Portfolio"
            startOnView
          />
        </h1>

        <p className={styles.heroSubtitle}>Frontend Developer / React & Next.js</p>
        <p className={styles.heroLead}>Creating clean, user-friendly web experiences.</p>
      </section>

      {/* About */}
      <section className={styles.block}>
        <Link href="/about" className={styles.blockLink}>
          <h2 className={styles.blockTitle}>About Me</h2>
        </Link>
        <p className={styles.blockText}>
          I am a passionate frontend developer specializing in React and Next.js.
          I enjoy building modern web applications with a focus on usability,
          clean design, and maintainable code.
        </p>
      </section>

      {/* Skills */}
      <section className={styles.block}>
        <Link href="/skills" className={styles.blockLink}>
          <h2 className={styles.blockTitle}>Skills</h2>
        </Link>

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

      {/* Works */}
      <section className={styles.block}>
        <Link href="/works" className={styles.blockLink}>
          <h2 className={styles.blockTitle}>Works</h2>
        </Link>
        <p className={styles.blockText}>Here are some of the projects I have worked on.</p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <Link href="/contact" className={styles.blockLink}>
          <h2 className={styles.blockTitle}>Get In Touch</h2>
        </Link>
        <p className={styles.blockText}>
          Feel free to contact me if you are interested in working together.
        </p>

        <Link href="/contact" className={styles.ctaButton}>
          Contact Me
        </Link>
      </section>
    </main>
  );
}
