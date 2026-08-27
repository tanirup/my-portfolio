# Yuki Portfolio

Next.js / TypeScript を使用して制作したポートフォリオサイトです。  
自己紹介、制作物、学習記録、趣味・制作活動などをまとめています。

## 概要

このサイトは、就職活動や作品提出時に自分の学習内容・制作物・使用技術を分かりやすく伝えることを目的として制作しました。

フロントエンドを中心に、React / Next.js を使ったページ構成、CSS Modules によるスタイリング、microCMS API を利用した学習記録の表示などを実装しています。

## 主なページ

- Home  
  サイト全体の入り口となるトップページです。

- About  
  プロフィール、学習中の技術、将来の目標を掲載しています。

- Works  
  制作したWebサイトやアプリケーションを紹介しています。

- Study Log  
  microCMS API から取得した学習記録を表示しています。

- Hobby  
  ゲーム、読書、制作活動、影響を受けた人物などを紹介しています。

- Contact  
  連絡先ページです。

## 使用技術

- Next.js
- React
- TypeScript
- CSS Modules
- microCMS
- Node.js
- Git / GitHub
- Vercel

## 実装した機能

- レスポンシブ対応
- ページ遷移
- ローディングアニメーション
- Typewriter風テキストアニメーション
- CSS Modules によるページごとのスタイル管理
- microCMS API からの Study Log 取得
- `next/image` を使用した画像最適化
- 環境変数によるAPIキー管理

## 工夫した点

### 見やすいページ構成

企業の方が見たときに、自己紹介・制作物・学習記録が分かりやすく伝わるようにページを分けました。

### CSS Modulesによる管理

最初は共通CSSにまとめていましたが、保守性を高めるために、共通スタイルとページ専用スタイルを分けて管理しています。

例：

```txt
app/page.module.css
app/about/page.module.css
app/works/page.module.css
app/study-log/page.module.css
app/hobby/page.module.css
