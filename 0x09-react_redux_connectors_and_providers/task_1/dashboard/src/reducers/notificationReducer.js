import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications'; // Import the normalizer function

import { Map } from 'immutable'; // Import Immutable.Map

const initialState = Map({ // Use Immutable.Map
  filter: 'DEFAULT',
  notifications: Map({}), // Initialize notifications as a Map
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);

      return state.mergeDeep(normalizedData);

    case MARK_AS_READ:
      const { notificationId } = action;
      return state.setIn(['notifications', notificationId, 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
