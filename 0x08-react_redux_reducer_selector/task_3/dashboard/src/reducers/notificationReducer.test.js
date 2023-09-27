import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: [],
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
      ],
    };

    const newState = notificationReducer(undefined, action);
    expect(newState.toJS()).toEqual({
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
      ],
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
      ],
    });

    const action = {
      type: MARK_AS_READ,
      index: 0,
    };

    const newState = notificationReducer(initialState, action);
    expect(newState.getIn(['notifications', 0, 'isRead'])).toBe(true);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const newState = notificationReducer(undefined, action);
    expect(newState.get('filter')).toBe('URGENT');
  });

  it('should return the current state for unknown action', () => {
    const currentState = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
      ],
    };

    const action = {
      type: 'UNKNOWN_ACTION',
    };

    const newState = notificationReducer(currentState, action);
    expect(newState).toBe(currentState);
  });
});
