/*
 * getListObject accepts an array as parameter and converts it into an
 * immutable List using the Immutable.js library
*/
const { List } = require('immutable');

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}
