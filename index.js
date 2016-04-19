'use strict';
module.exports = (arr, ...values) => {
	const rest = new Set([].concat(...values));
	return arr.filter(x => !rest.has(x));
};
