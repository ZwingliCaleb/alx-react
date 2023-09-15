import { List, Map } from 'immutable';

// returns a List containing the values of the two pages
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// should return a List containing the values of the two pages using merge
// If two values are the same, page2 values should be used.
export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));
