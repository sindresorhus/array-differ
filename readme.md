# array-differ [![Build Status](https://travis-ci.org/sindresorhus/array-differ.svg?branch=master)](https://travis-ci.org/sindresorhus/array-differ)

> Create an array with values that are present in the first input array but not additional ones


## Install

```
$ npm install --save array-differ
```


## Usage

```js
const arrayDiffer = require('array-differ');

arrayDiffer([2, 3, 4], [3, 50]);
//=> [2, 4]
```

## API

### arrayDiffer(input, values, [values, ...])

Returns a new array.

#### input

Type: `array`

#### values

Type: `array`

Arrays of values to exclude.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
