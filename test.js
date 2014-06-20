'use strict';
var assert = require('assert');
var arrayDifference = require('./');

it('should filter out the difference', function () {
	assert.deepEqual(arrayDifference([2, 3, 4], [3, 50, 60]), [2, 4]);
});
