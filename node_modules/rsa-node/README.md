# rsa-node [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

Focus on one thing.

Simple node.js RSA encrypt.

## Installation

```sh
$ npm install --save rsa-node
```

## Usage

**Create instance:**

```
var rsa = new RsaNode(KEY, EXP);
```

* `KEY` - EncryptKey 
* `EXP` - EncryptExp

**Method:**

* `encrypt()` - Encrypt text.


## Example

```js
var RsaNode = require('../src/index');

const KEY =
  'D41F1B452440585C5D1F853C7CBCB2908CFF324B43A42D7D77D2BB28BD64E2D098079B477D23990E935386FF73CCF865E0D84CE64793306C4083EADECFE36BCC89873EC2BA37D6CA943CB03BA5B4369EE7E31C3539DEA67FF8BF4A5CEE64EB3FD0639E78044B12C7B1D07E86EB7BCF033F78947E0ADE5653B9A88B33AFEB53BD';
const EXP = 65537;

var rsa = new RsaNode(KEY, EXP);

var res = rsa.encrypt('20161218');
console.log(res);

// res
// b055bdfe07cd9384e0108316bf1cae1ce974b482f162b52d6c0a5220f4a399d63f70815487c73e9c1ae9894da6544eb9dd4bef907e169b02e86236b01e8f1b334661d08703e6d3a64ac876ee927bd42331e170bf47e5c73da802c07df7118e27cf6b4a6f99d17915799d6b4ebd6a136b4aed55cb4222a2812fabc8d67c8b03ff

```

## Testing

``` 
$ npm test
```

## License

MIT © [jeneser](https://jeneser.github.io/)

[npm-image]: https://badge.fury.io/js/rsa-node.svg
[npm-url]: https://npmjs.org/package/rsa-node
[daviddm-image]: https://david-dm.org/jeneser/rsa-node.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jeneser/rsa-node
