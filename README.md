![](https://github.com/shonishi/fe-nextjs-sample/actions/workflows/ci.yml/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9c4a43e7-4738-4856-9bc2-574fc0e8b9fc/deploy-status?branch=master)](https://app.netlify.com/sites/shonishi-fe-nextjs-sample/deploys)

# fe-nextjs-sample

Next.js を使用した fe サーバのサンプルです

## 環境構築

ライブラリのインストール

```
yarn install
```

ビルド

```
yarn build
```

アプリの起動

```
yarn start
```

開発者モードでのアプリの起動

```
yarn dev
```

画面の表示

```
http://localhost:3000/product/overviews
```

## component の表示確認

```
yarn storybook
```

## 静的解析

```
yarn lint
```

## テスト

```
yarn test
```

## CI

Github Actions で、master ブランチへの PR/マージ時にビルド、静的解析、テストが実施されます。

## CD

master ブランチへのマージで netlify へデプロイされます。

https://shonishi-fe-nextjs-sample.netlify.app/product/overviews へアクセス

さらに、そのソースの storybook が GitHubPages へ公開されます。

https://shonishi.github.io/fe-nextjs-sample/ へアクセス
