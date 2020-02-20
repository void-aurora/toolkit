# @void-aurora/eslint-config

[eslint-config-version]: https://img.shields.io/npm/v/@void-aurora/eslint-config?style=flat-square
[eslint-config-npm]: https://www.npmjs.com/package/@void-aurora/eslint-config

[![eslint-config-version]][eslint-config-npm]

> Category: Style Guide

This package provides **TypeScript** ESLint configuration for Void Aurora, referred to eslint-config-airbnb-base.

## Usage

### Install

```sh
# use npm
npm i --save-dev @void-aurora/eslint-config
# use yarn
yarn add -D @void-aurora/eslint-config
# use pnpm
pnpm add -D @void-aurora/eslint-config
```

### Config file

Add `"extends": "@void-aurora"` to your `.eslintrc` or `.eslintrc.js`.

```js
// .eslintrc.js
module.exports = {
  extends: ['@void-aurora'],
};
```

## Parsing error related to project config

Sometimes, your would get this error:

```

Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: xxx/xxx/xxx.js.
The file must be included in at least one of the projects provided.

```

You some includes your source code files in `tsconfig.json` for each package and includes these `tsconfig.json` files in `.eslintrc.js`. Like:

```json
// tsconfig.json
{
  ...
  "include": ["lib", "src", "index.js"]
}
```

```js
// .eslintrc.js
module.exports = {
  extends: ['@void-aurora'],
  parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
};
```
