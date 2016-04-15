'use strict';

function flatten(arr) {
	return arr.reduce((previous, current) => {
		return previous.concat(Array.isArray(current) ? flatten(current) : current);
	}, []);
}

module.exports = function (arr) {
	const rest = new Set(
		flatten(
			[].slice.call(arguments, 1)
		)
	);
	return arr.filter(el => !rest.has(el));
};
