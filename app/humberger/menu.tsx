"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";

type MenuItem = {
  href: string;
  label: string;
};

const items: MenuItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // ESCで閉じる
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // メニューオープン時：スクロール固定（必要なら）
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggle}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="hamburger-panel"
      >
        <span className={styles.icon} aria-hidden="true">
          <span className={`${styles.bar} ${open ? styles.barTopOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barMidOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barBotOpen : ""}`} />
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={close}
        aria-hidden={!open}
      />

      {/* Panel */}
      <div
        id="hamburger-panel"
        ref={panelRef}
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className={styles.panelHeader}>
          <p className={styles.panelTitle}>Menu</p>
          <button type="button" className={styles.close} onClick={close} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className={styles.nav}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className={styles.hint}>Press ESC to close</p>
      </div>
    </div>
  );
}
