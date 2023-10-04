import { FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  notifications: [],
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: action.data,
        loading: false,
      });

    default:
      return state;
  }
};

export default notificationReducer;
