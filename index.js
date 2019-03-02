'use strict';
const arrayDiffer = (arr, ...values) => {
	const rest = new Set([].concat(...values));
	return arr.filter(x => !rest.has(x));
};

module.exports = arrayDiffer;
module.exports.default = arrayDiffer;
