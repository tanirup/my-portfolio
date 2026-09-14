## 実行方法
## Windowsでnpmを使う手順

### 1. Node.jsをインストール

Windows用のx64版Node.jsをインストールする。
https://nodejs.org/ja/download　<br> 
node.js公式リンク
### 2. PATHを設定
インストールが終わったらインストールするときに設定したpathを環境変数のところに追加する。
windowsキーを押して検索のところに環境変数と入力する <br>
設定画面に行ったら、ユーザー環境変数のところの編集をクリックして <br>
以下のようなpathを追加してOKをおす。<br>
環境変数 `Path` に以下を追加する。

```text
C:\Program Files\nodejs\
```

### 3. PowerShellの実行制限を変更

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 4. Node.js / npmを確認

```powershell
node -v
npm -v
```

### 5. プロジェクトを起動
'''bash
dir
''' 
でappやpublicのファイルが見えたらOK <br>
my-portfolio-mainとpackage-lock.json 
だけだったら・・・・ <br>
'''bash
cd my-portfolio-main
'''
で移動してappやpublicファイルがあるかチェックする <br>
`package.json` があるフォルダで実行する。

```powershell
npm install
npm run dev
```

ブラウザで以下を開く。

```text
http://localhost:3000
```

## MAC実行方法
```bash
npm install
npm run dev
```

# Yuki Portfolio

Next.js / TypeScript を使用して制作したポートフォリオサイトです。  
自己紹介、制作物、学習記録、趣味・制作活動などをまとめています。

## 概要

このサイトは、就職活動や作品提出時に自分の学習内容・制作物・使用技術を分かりやすく伝えることを目的として制作しました。

フロントエンドを中心に、React / Next.js を使ったページ構成、CSS Modules によるスタイリング、microCMS API を利用した学習記録の表示などを実装しています。<br>
※API実装はまだ途中なので後々追加する予定です。<br>
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
