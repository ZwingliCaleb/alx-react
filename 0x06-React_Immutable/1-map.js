import { Map } from 'immutable';

/**
 * Converts an object into an Immutable Map.
 * @param {object} object - The input object to convert.
 * @returns {Map} - An Immutable Map representation of the input object.
 */
export default function getImmutableObject(object) {
  return Map(object);
}
