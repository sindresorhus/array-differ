'use strict';
module.exports = function (arr) {
	var rest = [].concat.apply([], [].slice.call(arguments, 1));
	var hash = {};

	rest.forEach(function (item) {
		hash[item] = true;
	});

	return arr.filter(function (el) {
		return !hash[el];
	});
};
