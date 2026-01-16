import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

import Header from "@/app/components/layout/Header";
import Menu from "./humberger/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuki Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
        {/* ✅ 固定ヘッダー（components/layout/Header.tsx） */}
        <Header />

        {/* ✅ ハンバーガーメニューをヘッダーの外に出す場合 */}
        <Menu />

        {/* Main */}
        <main className={styles.main}>{children}</main>

        {/* Footer */}
        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} Yuki. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
