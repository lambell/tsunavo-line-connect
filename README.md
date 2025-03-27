# Tsunavo LINE Connect

ShopifyストアとLINEを連携するアプリケーションです。

## 機能

- ShopifyストアへのLINEログイン統合
- 注文通知のLINE配信
- カスタムテーマブロックによるLINEログインUI

## 開発環境のセットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 環境変数の設定:
```bash
# .env.localファイルを作成し、以下の変数を設定
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SCOPES=write_products,write_customers,write_orders
HOST=your_app_host
```

3. 開発サーバーの起動:
```bash
npm run dev
```

## デプロイ

Vercelへのデプロイがサポートされています。環境変数を適切に設定してください。

## ライセンス

MIT 