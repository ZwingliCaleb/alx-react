import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

function mergeElements(page1, page2) {
  return Map({ ...page1, ...page2 });
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { c: 4, d: 5, e: 6 };

const concatenatedList = concatElements(array1, array2);
const mergedMap = mergeElements(object1, object2);

console.log('Concatenated List:', concatenatedList.toJS());
console.log('Merged Map:', mergedMap.toJS());
