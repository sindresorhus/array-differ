import {expectType} from 'tsd-check';
import arrayDiffer from '.';

expectType<string[]>(arrayDiffer(['a', 'b', 'c'], ['b'], ['c']));
expectType<number[]>(arrayDiffer([1, 2, 3], [2], [3]));
