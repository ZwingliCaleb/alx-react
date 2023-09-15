import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const ImmPage1 = Map(page1);
  const ImmPage2 = Map(page2);
  return ImmPage1.mergeDeep(ImmPage2);
}
