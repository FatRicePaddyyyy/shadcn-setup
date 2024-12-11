# react-shadcn-setup
- ```npx create-react-app my-app --template typescript```で作成したreactのプロジェクトにshadcn/uiをセットアップしていきます
- コードはセットアップ済みのものです
- ルートディレクトリで``docker-compose up --build```を実行するとlocalhost:3000でアプリが起動しているのがわかると思います。

## Tailwindcssのセットアップ
- [このページ](https://tailwindcss.com/docs/guides/create-react-app)の通りに実装する。
- reactのバージョンが19だとエラーが出ることがあるので、18.2.0とかを使用する


## shadcnのセットアップ
- [このページ](https://ui.shadcn.com/docs/installation/manual)の通りに実装する。
- tailwind.config.jsのcontentフィールドには、"./src/**/*.{ts,tsx}"を追加する。このcotentフィールドで指定されたファイルがshadcnの対象ファイルとなる


## パスエイリアスの利用
- reactのいろいろな設定ができるツールをinstall
```
npm install @craco/craco
```
- craco.config.jsを作成し、以下のように設定する
```
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
```

- package.jsonのscriptsフィールドを以下のように設定する
```
"start": "craco start",
"build": "craco build",
"test": "craco test",
```
## componetsの利用
- https://ui.shadcn.com/docs/components/button などのページのコンポーネントを実装したいとする。
- Manualみたいな場所があるので、指示に従い、コードを書く。その際、以下のimport文を書く。パスはいい感じに直す。
```
import './styles/globals.css'
```
