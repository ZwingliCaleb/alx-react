import { Map } from 'immutable';
import courseReducer from '../reducers/courseReducer';
import notificationReducer from '../reducers/notificationReducer.js';
import uiReducer from '../reducers/uiReducer.js';

describe('courseReducer tests', () => {
  it('should return the initial state', () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState).toEqual(Map({}));
  });
});

describe('notificationReducer tests', () => {
  it('should return the initial state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState).toEqual(Map({}));
  });
});

describe('uiReducer tests', () => {
  it('should return the initial state', () => {
    const initialState = uiReducer(undefined, {});
    expect(initialState).toEqual(Map({}));
  });
});
