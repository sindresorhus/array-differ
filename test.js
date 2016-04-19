import test from 'ava';
import m from './';

test('filter out the difference', t => {
	t.deepEqual(m([2, 3, 4], [3, 50, 60]), [2, 4]);
});
