"use client";

import { useMemo, useState } from "react";
import styles from "../contact/page.module.css";
import { CONTACTS } from "@/app/libs/contacts";
import Button from "@/app/components/ui/Button";
import TypewriterText from "@/app/components/animation/TypewriterText";

function pickPrimaryContacts() {
  const isEmail = (href: string) => href.startsWith("mailto:");
  const isForm = (href: string) => href.includes("forms") || href.includes("form");
  const isSNS = (href: string) =>
    href.includes("twitter.com") ||
    href.includes("x.com") ||
    href.includes("github.com") ||
    href.includes("linkedin.com");

  const primary: typeof CONTACTS = [];

  const email = CONTACTS.find((c) => isEmail(c.href));
  if (email) primary.push(email);

  const form = CONTACTS.find((c) => isForm(c.href));
  if (form) primary.push(form);

  const sns = CONTACTS.find((c) => isSNS(c.href));
  if (sns) primary.push(sns);

  const seen = new Set<string>();
  return primary.filter((c) => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });
}

export default function ContactPage() {
  const primary = useMemo(() => pickPrimaryContacts(), []);

  // ✅ ここをあなたの Formspree エンドポイントに変更
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "ng">("idle");
  const isSending = status === "sending";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("submit failed");

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("ng");
    }
  }

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <TypewriterText text="Contact Me" startOnView />
        </h1>

        <p className={styles.heroSubtitle}>Feel free to reach out to me</p>
        <p className={styles.heroLead}>
          お仕事のご相談 / ポートフォリオの感想 / 採用に関する連絡など、気軽にどうぞ。
          <br />
          可能な限り早めに返信します（目安：1〜3日）。
        </p>
      </section>

      {/* Send a Message */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Send a Message</h2>
        <p className={styles.blockText}>
          内容に応じてカテゴリを選んで送信してください。返信が必要な場合はメールアドレスを正しく入力してください。
        </p>

        <div className={styles.formCard}>
          <form onSubmit={onSubmit} className={styles.formGrid}>
            <div className={styles.formRow}>
              <label className={styles.formLabel} htmlFor="topic">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                className={styles.formSelect}
                defaultValue="Job"
                required
                disabled={isSending}
              >
                <option value="Job">お仕事依頼</option>
                <option value="Feedback">感想・フィードバック</option>
                <option value="Hiring">採用・面談</option>
                <option value="Other">その他</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label className={styles.formLabel} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className={styles.formInput}
                placeholder="お名前"
                required
                disabled={isSending}
                autoComplete="name"
              />
            </div>

            <div className={styles.formRow}>
              <label className={styles.formLabel} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.formInput}
                placeholder="返信先メールアドレス"
                required
                disabled={isSending}
                autoComplete="email"
                inputMode="email"
              />
            </div>

            {/* ✅ Messageはフル幅に（CSSに formRowMessage がある前提） */}
            <div className={`${styles.formRow} ${styles.formRowMessage}`}>
              <label className={styles.formLabel} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder={
                  "内容（例）\n・依頼：内容 / 期限 / 予算感\n・採用：会社名 / ポジション / 希望日時\n・感想：良かった点 / 改善点"
                }
                required
                disabled={isSending}
              />
            </div>

            {/* bot対策 */}
            <input type="text" name="_gotcha" className={styles.gotcha} tabIndex={-1} />

            <div className={styles.formFooter}>
              <Button type="submit" disabled={isSending} className={styles.formButton}>
                {isSending ? "Sending..." : "Send"}
              </Button>

              <div className={styles.formStatusArea} aria-live="polite">
                {status === "ok" && (
                  <span className={styles.formStatusOk}>送信しました！ありがとうございます。</span>
                )}
                {status === "ng" && (
                  <span className={styles.formStatusNg}>
                    送信に失敗しました。時間をおいて再度お試しください。
                  </span>
                )}
              </div>
            </div>

            <p className={styles.formHint}>
              ※ 返信が必要な場合は Email を正しく入力してください。フォーム/メールが一番確実です。
            </p>
          </form>
        </div>
      </section>

      {/* Quick Contact */}
      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Quick Contact</h2>
        <p className={styles.blockText}>
          返信が必要な場合は下記の Email までご連絡ください。<br />
          技術的な実績は GitHub からご覧いただけます。
        </p>

        {primary.length > 0 ? (
          <ul className={styles.contactList}>
            {primary.map((c) => {
              const isEmail = c.href.startsWith("mailto:");
              const isExternal = c.href.startsWith("http");

              return (
                <li key={c.id} className={styles.contactItem}>
                  {isEmail ? (
                    <div className={styles.contactLink}>
                      <span className={styles.contactLabel}>{c.label}</span>
                      {c.value && <span className={styles.contactValue}>{c.value}</span>}
                    </div>
                  ) : (
                    <a
                      href={c.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className={styles.contactLink}
                      aria-label={`${c.label} (opens in new tab)`}
                    >
                      <span className={styles.contactLabel}>
                        {c.label}
                        {isExternal ? " " : ""}
                      </span>
                      {c.value && <span className={styles.contactValue}>{c.value}</span>}
                    </a>
                  )}

                  {c.note && <p className={styles.contactNote}>{c.note}</p>}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className={styles.blockText}>連絡先データがまだ登録されていません。</p>
        )}
      </section>
    </main>
  );
}
