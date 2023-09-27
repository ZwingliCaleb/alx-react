import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
  } from '../actions/notificationActionTypes';
  
  // Define the initial state as a Map
  const initialState = new Map({
    filter: 'DEFAULT',
    notifications: [],
  });
  
  // Create the notification reducer function
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS:
        return state.set(
          'notifications',
          action.data.map((notification) => ({
            ...notification,
            isRead: false,
          }))
        );
  
      case MARK_AS_READ:
        const updatedNotifications = state.get('notifications').map((notification, index) => {
          if (index === action.index) {
            return {
              ...notification,
              isRead: true,
            };
          }
          return notification;
        });
  
        return state.set('notifications', updatedNotifications);
  
      case SET_TYPE_FILTER:
        return state.set('filter', action.filter);
  
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  