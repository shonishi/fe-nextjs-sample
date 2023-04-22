![](https://github.com/shonishi/fe-nextjs-sample/actions/workflows/ci.yml/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9c4a43e7-4738-4856-9bc2-574fc0e8b9fc/deploy-status?branch=master)](https://app.netlify.com/sites/shonishi-fe-nextjs-sample/deploys)

# fe-nextjs-sample

Next.js を使用した fe サーバのサンプルです

## 実行手順

ライブラリのインストール

```
yarn install
```

アプリの起動

```
yarn dev
```

http://localhost:3000/product/overviews へアクセス

## テスト

```
yarn lint
yarn test
```

## CI

Github Actions を使用しています。master ブランチへの PR/マージ時にビルド、静的解析、テストが実施されます。

## CD

master ブランチへのマージで netlify へデプロイされます。

https://shonishi-fe-nextjs-sample.netlify.app/product/overviews へアクセス
