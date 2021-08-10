import {expectType} from 'tsd';
import arrayDiffer from './index.js';

expectType<string[]>(arrayDiffer(['a', 'b', 'c'], ['b'], ['c']));
expectType<number[]>(arrayDiffer([1, 2, 3], [2], [3]));
