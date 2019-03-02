import test from 'ava';
import arrayDiffer from '.';

test('main', t => {
	t.deepEqual(arrayDiffer([2, 3, 4], [3, 50, 60]), [2, 4]);
	t.deepEqual(arrayDiffer([2, 3, 4], [3, 50], [2, 60]), [4]);
});
