'use strict';

const arrayDiffer = (array, ...values) => {
	// TODO: Make this `const rest = new Set([...values].flat());` when targeting Node.js 12.
	const rest = new Set([].concat(...values));
	return array.filter(element => !rest.has(element));
};

module.exports = arrayDiffer;
