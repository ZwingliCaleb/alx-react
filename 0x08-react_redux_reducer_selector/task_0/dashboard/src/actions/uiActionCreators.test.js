import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('login action creator creates the correct action', () => {
    const email = 'example@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    const action = login(email, password);
    expect(action).toEqual(expectedAction);
  });

  it('logout action creator creates the correct action', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    const action = logout();
    expect(action).toEqual(expectedAction);
  });

  it('displayNotificationDrawer action creator creates the correct action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const action = displayNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });

  it('hideNotificationDrawer action creator creates the correct action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    const action = hideNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });

  it('dispatches LOGIN and LOGIN_SUCCESS on successful API response', () => {
    const store = mockStore({});
    fetchMock.getOnce('/login-success.json', {
      status: 200,
      body: {},
    });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS },
    ];

    return store.dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN and LOGIN_FAILURE on failed API response', () => {
    const store = mockStore({});
    fetchMock.getOnce('/login-success.json', {
      status: 401,
    });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE },
    ];

    return store.dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
