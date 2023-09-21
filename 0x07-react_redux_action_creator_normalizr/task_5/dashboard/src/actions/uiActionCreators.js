import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  // Action creator for user login
  export const login = (email, password) => {
    return {
      type: LOGIN,
      user: { email, password },
    };
  };
  
  // Action creator for user logout
  export const logout = () => {
    return {
      type: LOGOUT,
    };
  };
  
  // Action creator for displaying the notification panel
  export const displayNotificationDrawer = () => {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
  };
  
  // Action creator for hiding the notification panel
  export const hideNotificationDrawer = () => {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    };
  };
  