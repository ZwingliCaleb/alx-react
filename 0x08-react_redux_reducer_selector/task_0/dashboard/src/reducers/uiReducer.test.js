import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  // Define the initial state
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(initialState, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('should update isNotificationDrawerVisible correctly when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(initialState, action);

    expect(state.isNotificationDrawerVisible).toBe(true);
    expect(state.isUserLoggedIn).toBe(false);
    expect(state.user).toEqual({});
  });

});
