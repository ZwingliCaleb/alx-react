import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from './uiActionCreators';
  import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  // Test for login
  test('login action creator creates the correct action', () => {
    const email = 'example@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    const action = login(email, password);
    expect(action).toEqual(expectedAction);
  });
  
  // Test for logout
  test('logout action creator creates the correct action', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    const action = logout();
    expect(action).toEqual(expectedAction);
  });
  
  // Test displayNotificationDrawer
  test('displayNotificationDrawer action creator creates the correct action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    const action = displayNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
  
  // Test hideNotificationDrawer 
  test('hideNotificationDrawer action creator creates the correct action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    const action = hideNotificationDrawer();
    expect(action).toEqual(expectedAction);
  });
  