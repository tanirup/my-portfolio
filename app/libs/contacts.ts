// libs/contacts.ts

export type ContactItemType =
  | "email"
  | "github"
  | "x"
  | "linkedin"
  | "website"
  | "other";

export type ContactItem = {
  id: string;
  label: string;
  value?: string; // 画面に出す文字（メールアドレスなど）
  href: string; // リンク先（mailto:, https: など）
  type: ContactItemType;
  note?: string; // 補足（任意）
};

export const CONTACTS: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "yourname@example.com",
    href: "mailto:yourname@example.com",
    type: "email",
    note: "返信は1〜2日以内を目安にしています。",
  },
  {
    id: "github",
    label: "GitHub",
    value: "@taniuchiyuuki",
    href: "https://github.com/taniuchiyuuki",
    type: "github",
  },
  // 必要なら追加
  // {
  //   id: "x",
  //   label: "X",
  //   value: "@your_handle",
  //   href: "https://x.com/your_handle",
  //   type: "x",
  // },
  // {
  //   id: "linkedin",
  //   label: "LinkedIn",
  //   value: "Your Name",
  //   href: "https://www.linkedin.com/in/your-id/",
  //   type: "linkedin",
  // },
];

export function getContactById(id: string): ContactItem | undefined {
  return CONTACTS.find((c) => c.id === id);
}
