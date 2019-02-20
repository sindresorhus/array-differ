import test from 'ava';
import m from '.';

test('main', t => {
	t.deepEqual(m([2, 3, 4], [3, 50, 60]), [2, 4]);
	t.deepEqual(m([2, 3, 4], [3, 50], [2, 60]), [4]);
});
