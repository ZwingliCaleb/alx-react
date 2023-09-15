/*
 * creatw an immutable map with provided objects
 * every 2nd constant named map2
 * modify values next to index 2 and 4
 */

import { Map } from 'immutable';

const object = {
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
};

export const map = Map(object);
export const map2 = map.withMutations((map) => {
  map.set(2, 'Benjamin').set(4, 'Oliver');
});
