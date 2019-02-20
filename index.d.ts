/**
 * Create an array with values that are present in the first input array but not additional ones.
 *
 * @example
 *
 * const arrayDiffer = require('array-differ');
 *
 * arrayDiffer([2, 3, 4], [3, 50]);
 *  //=> [2, 4]
 *
 * @param input - The base array for comparision
 * @param values - Arrays of value to exculed
 * @returns  A new array with 'values' excluded
 */
export default function arrayDiffer<T>(input: ArrayLike<T>, ...values: Array<ArrayLike<T>>): T[];
