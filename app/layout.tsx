import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./layout.module.css";
import "./globals.css";

import Header from "@/app/components/layout/Header";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const year = new Date().getFullYear();

  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}>
        <Header />

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <p className={styles.footerText}>
            © {year} Yuki. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}