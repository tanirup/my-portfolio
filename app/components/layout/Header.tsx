"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Menu from "@/app/humberger/menu"; // ✅ ここ（あなたの実パスに合わせて）

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          My Portfolio
        </Link>

        {/* ✅ PC用リンク */}
        <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
          <Link href="/hobby" className={styles.link}>
            Hobby
          </Link>
          <Link href="/works" className={styles.link}>
            Works
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>

        {/* ✅ スマホ用：右上ハンバーガー */}
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </header>
  );
}
