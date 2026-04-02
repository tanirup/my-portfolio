import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name: string;
  email: string;
  message: string;
  topic?: string;   // あなたのフォームにTopicがあるなら
  company?: string; // 任意
  _gotcha?: string; // ✅ フロントの hidden に合わせる
};

function isEmailLike(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();
    const company = (body.company ?? "").trim();
    const topic = (body.topic ?? "").trim();
    const gotcha = (body._gotcha ?? "").trim();

    // ✅ bot対策：隠し項目に値が入ってたら無視（botに悟らせない）
    if (gotcha) return NextResponse.json({ ok: true }, { status: 200 });

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "必須項目が未入力です。" },
        { status: 400 }
      );
    }

    if (!isEmailLike(email)) {
      return NextResponse.json(
        { ok: false, error: "メールアドレス形式が正しくありません。" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { ok: false, error: "サーバー設定が不足しています（env）。" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `【Portfolio】${topic ? `${topic} / ` : ""}${name}${company ? ` / ${company}` : ""}`;

    const text = [
      "ポートフォリオお問い合わせが届きました。",
      "",
      `Topic: ${topic || "-"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      "",
      "Message:",
      message,
      "",
      "----",
      "This mail was sent from your portfolio contact form.",
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email, // ✅ 返信ボタンで相手へ返せる
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "送信に失敗しました。" },
      { status: 500 }
    );
  }
}
