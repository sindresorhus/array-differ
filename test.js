import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m([2, 3, 4], [3, 50, 60]), [2, 4]);
});
