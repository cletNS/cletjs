# clet-js

> A package for resolving Clet names

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

## Installation

npm:

```sh
npm install clet-js
```

yarn:

```sh
yarn add clet-js
```

## Usage example

Below are examples of how to use the package in a node.js application

```js
const clet = require('clet')

async function resolveName(nameToResolve) {
  console.log(await clet.resolve(nameToResolve))
}

async function reverseResolve(addressToResolve) {
  console.log(await clet.reverse(addressToResolve))
}

resolveName('bob.btc')

reverseResolve('0xcb488089fA2168247BB6022f04E310d997608597')
```

## Release History

<!-- - 0.1.0
  - Content
  - CHANGE: Content -->

- 1.0.0
  - Resolve and reverse Clet names

## [Additional Docs](https://docs.clet.domains)

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/clet-js
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
