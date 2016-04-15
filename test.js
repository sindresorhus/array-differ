import test from 'ava';
import arrayDifference from './';

test('should filter out the difference', t => {
	t.deepEqual(arrayDifference([2, 3, 4], [3, 50, 60]), [2, 4]);
});
