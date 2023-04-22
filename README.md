![](https://github.com/shonishi/fe-nextjs-sample/actions/workflows/ci.yml/badge.svg?branch=master)

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
