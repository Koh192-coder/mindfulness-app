# Mindfulness App

自分に合ったマインドフルネスを見つけるサービス。

## 技術スタック

- **フロントエンド**: Next.js 14 (App Router) + TypeScript
- **スタイリング**: CSS Modules
- **ホスティング**: Vercel（予定）
- **DB**: Supabase（予定）

## 開発環境のセットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 で起動します。

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx       # ルートレイアウト
│   ├── page.tsx         # メインページ
│   ├── globals.css      # グローバルCSS（カラー変数）
│   └── page.module.css
├── components/
│   ├── Header.tsx       # ヘッダー（ロゴ・タイトル）
│   ├── SearchBar.tsx    # キーワード検索 + タグフィルター
│   ├── PostCard.tsx     # 投稿カード
│   ├── PostModal.tsx    # 詳細モーダル（出典表示）
│   └── PostForm.tsx     # 投稿フォーム
├── data/
│   └── posts.ts         # ダミーデータ（Supabase連携前）
└── types/
    └── index.ts         # 型定義
```

## ロゴ画像

`public/logo.png` にロゴ画像を配置してください。

## TODO: Supabase連携

1. `npm install @supabase/supabase-js`
2. `.env.local` に以下を追加：
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
3. `src/data/posts.ts` のダミーデータをSupabaseのfetchに置き換え
4. `src/components/PostForm.tsx` の `handleSubmit` にinsert処理を追加

## Vercelデプロイ

1. GitHubにpush
2. Vercelでリポジトリを連携
3. 環境変数を設定（Supabase連携後）
4. デプロイ完了
