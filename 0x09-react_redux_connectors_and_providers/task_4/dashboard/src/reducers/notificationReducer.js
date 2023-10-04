import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  notifications: [],
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', action.payload);
    default:
      return state;
  }
};

export default notificationReducer;
