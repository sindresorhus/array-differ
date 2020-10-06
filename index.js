"use strict";

const arrayDiffer = (array, ...values) => {
	const rest = new Set([...values].flat());
	return array.filter((element) => !rest.has(element));
};

module.exports = arrayDiffer;
