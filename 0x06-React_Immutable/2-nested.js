/* function should return the value of the object at the defined path */
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const ImmutableObject = fromJS(object);
  return ImmutableObject.getIn(array, undefined);
}
