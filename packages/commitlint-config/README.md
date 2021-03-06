# @void-aurora/commitlint-config

[commitlint-config-version]: https://img.shields.io/npm/v/@void-aurora/commitlint-config?style=flat-square
[commitlint-config-npm]: https://www.npmjs.com/package/@void-aurora/commitlint-config

[![commitlint-config-version]][commitlint-config-npm]

> Category: Style Guide

This package provides CommitLint configuration for Void Aurora.

## Usage

### Install

```sh
# use npm
npm i --save-dev @void-aurora/commitlint-config
# use yarn
yarn add -D @void-aurora/commitlint-config
# use pnpm
pnpm add -D @void-aurora/commitlint-config
```

### Config file

`.commitlintrc.js` or `commitlint.config.js`

```js
module.exports = {
  extends: ['@void-aurora/commitlint-config'],
};
```
