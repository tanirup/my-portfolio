## 実行方法
## 実行方法

## Windowsでnpmを使う手順

### 1. Node.jsをインストール

Windows用のx64版Node.jsをインストールする。

Node.js公式サイト
https://nodejs.org/ja/download

### 2. PATHを設定

Node.jsのインストール後、Windowsキーを押して「環境変数」と検索する。

「環境変数」を開き、ユーザー環境変数の `Path` を編集して以下を追加する。

```text
C:\Program Files\nodejs\
```

追加したら「OK」を押して、PowerShellを開き直す。

### 3. PowerShellの実行制限を変更

npm実行時にスクリプト実行エラーが出た場合は、PowerShellで以下を実行する。

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 4. Node.js / npmを確認

```powershell
node -v
npm -v
```

両方のバージョンが表示されればOK。

### 5. プロジェクトを起動

まず現在のフォルダを確認する。

```powershell
dir
```

`package.json`、`app`、`public` などが表示されればOK。

もし、

```text
my-portfolio-main
package-lock.json
```

などしか表示されない場合は、さらにプロジェクトフォルダの中に入る。

```powershell
cd my-portfolio-main
```

もう一度確認する。

```powershell
dir
```

`package.json` があるフォルダで以下を実行する。

```powershell
npm install
npm run dev
```

起動後、ブラウザで以下を開く。

```text
http://localhost:3000
```

## Mac実行方法

`package.json` があるプロジェクトフォルダで以下を実行する。

```bash
npm install
npm run dev
```

起動後、

```text
http://localhost:3000
```

をブラウザで開く。


# Yuki Portfolio

Next.js / TypeScript を使用して制作したポートフォリオサイトです。  
自己紹介、制作物、学習記録、趣味・制作活動などをまとめています。

## 概要

このサイトは、就職活動や作品提出時に自分の学習内容・制作物・使用技術を分かりやすく伝えることを目的として制作しました。

フロントエンドを中心に、React / Next.js を使ったページ構成、CSS Modules によるスタイリングを実装しています。<br>
※APIは実装はしていたのですが、API IDコードを見せることができないためAPI機能はなしに修正しました。また、APIを設定してない端末から見ることになるため、エラーが起きるためAPI機能はなしにしました。<br>
※Contactページは迷惑メール防止のため送信はできないです。見せるだけのページです。

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
ファイル構成・設計・見やすいUI/UXデザインなどを工夫して作りました。
### 見やすいページ構成

企業の方が見たときに、自己紹介・制作物・学習記録が分かりやすく伝わるようにページを分けました。
レスポンシブもしっかり対応できるようにハンバーガーバーなどを加えてスマホでも見やすいように工夫しました。


### CSS Modulesによる管理

最初は共通CSSにまとめていましたが、保守性を高めるために、共通スタイルとページ専用スタイルを分けて管理しています。

例：

```txt
app/page.module.css
app/about/page.module.css
app/works/page.module.css
app/study-log/page.module.css
app/hobby/page.module.css
