![](https://github.com/shonishi/fe-nextjs-sample/actions/workflows/ci.yml/badge.svg?branch=master)
[![codecov](https://codecov.io/github/shonishi/fe-nextjs-sample/branch/master/graph/badge.svg?token=64BW6Q5JFP)](https://codecov.io/github/shonishi/fe-nextjs-sample)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9c4a43e7-4738-4856-9bc2-574fc0e8b9fc/deploy-status?branch=master)](https://app.netlify.com/sites/shonishi-fe-nextjs-sample/deploys)

# fe-nextjs-sample

Next.js を使用した fe サーバのサンプルです。

- 1 つのテンプレートを CSR、SSR、SSG の 3 種類でレンダリング
- 大規模開発に耐えられるように store を導入
- component は atomic design に則り、再利用性を意識して分割
- React Hooks は component から viewModel として切り出し（デザイナが component を編集する際、hooks を意識する必要がなくなり作業しやすくなる）
- component 単位の表示確認のため storybook を導入
- 静的解析のため eslint を導入
- 単体テストを jest で実装しています
- e2e テストを cypress で実装しています

## 環境構築

### ライブラリのインストール

```
yarn install
```

### ビルド

```
yarn build
```

### アプリの起動

```
yarn start
```

開発者モードの場合

```
yarn dev
```

### 画面の表示

1. CSR : http://localhost:3000/product/overviews/csr
1. SSR : http://localhost:3000/product/overviews/ssr
1. SSG : http://localhost:3000/product/overviews/ssg

### 静的解析

```
yarn lint
```

### 単体テスト

```
yarn test
```

### e2e テスト

アプリを起動した状態で以下を実行

```
yarn e2e
```

### component 単位の表示確認

```
yarn storybook
```

## CI

Github Actions で、master ブランチへの PR/マージ時にビルド、静的解析、単体テスト、e2e テストが実施されます。

## CD

master ブランチへのマージで netlify へデプロイされます。

1. CSR : https://shonishi-fe-nextjs-sample.netlify.app/product/overviews/csr
1. SSR : https://shonishi-fe-nextjs-sample.netlify.app/product/overviews/ssr
1. SSG : https://shonishi-fe-nextjs-sample.netlify.app/product/overviews/ssg

さらに、そのソースの storybook が GitHubPages へ公開されます。

https://shonishi.github.io/fe-nextjs-sample/
