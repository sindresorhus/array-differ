import test from 'ava';
import m from '.';

test('returns a new array with values from second argument excluded', t => {
	t.deepEqual(m([2, 3, 4], [3, 50, 60]), [2, 4]);
	t.deepEqual(m([2, 3, 4], [3, 50], [2, 60]), [4]);
});
