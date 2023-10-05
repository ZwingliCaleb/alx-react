import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGIN_REQUEST,
} from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map(),
});

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    const newState = uiReducer(initialState, action);
    const expectedState = initialState.set('isUserLoggedIn', true);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    const newState = uiReducer(initialState, action);
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const newState = uiReducer(initialState, action);
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle LOGIN_REQUEST', () => {
    const action = { type: LOGIN_REQUEST };
    const newState = uiReducer(initialState, action);
    const expectedState = initialState.set('isUserLoggedIn', false); // Set according to your application logic
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should return the current state with an unknown action', () => {
    const action = { type: 'UNKNOWN_ACTION' };
    const newState = uiReducer(initialState, action);
    expect(newState.toJS()).toEqual(initialState.toJS());
  });
});
