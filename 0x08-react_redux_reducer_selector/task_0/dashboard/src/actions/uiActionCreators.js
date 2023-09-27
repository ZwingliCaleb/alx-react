import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

// Async action creator for user login request
export const loginRequest = (email, password) => (dispatch) => {
  dispatch(login(email, password));

  // Simulate API request 
  fetch('/login-success.json')
    .then((response) => {
      if (response.status === 200) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    })
    .catch(() => {
      dispatch(loginFailure());
    });
};

// Binding action creators
export const boundLogin = (email, password) => (dispatch) => {
  dispatch(loginRequest(email, password));
};

export const boundLogout = () => (dispatch) => {
  dispatch(logout());
};

export const boundDisplayNotificationDrawer = () => (dispatch) => {
  dispatch(displayNotificationDrawer());
};

export const boundHideNotificationDrawer = () => (dispatch) => {
  dispatch(hideNotificationDrawer());
};
