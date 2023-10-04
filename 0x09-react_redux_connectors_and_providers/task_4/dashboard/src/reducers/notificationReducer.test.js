import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

import { Map } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({}),
    });

    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notifications = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };

    const normalizedData = notificationsNormalizer(notifications);

    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: normalizedData.entities.notifications,
    });

    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: false,
        },
      }),
    });

    const action = {
      type: MARK_AS_READ,
      notificationId: 1,
    };

    const expectedState = Map({
      filter: 'DEFAULT',
      notifications: Map({
        1: {
          id: 1,
          type: 'default',
          value: 'New course available',
          isRead: true, // Check if isRead is updated correctly
        },
      }),
    });

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: Map({}),
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedState = Map({
      filter: 'URGENT', // Check if filter is updated correctly
      notifications: Map({}),
    });

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
