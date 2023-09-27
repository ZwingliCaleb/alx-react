import { markAsRead, setNotificationFilter } from './notificationActionCreators';  
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';  
import { NotificationTypeFilters } from './notificationActionTypes';
  
  // Test markAsRead action creator
  test('markAsRead action creator creates the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    const action = markAsRead(index);
    expect(action).toEqual(expectedAction);
  });
  
  // Test setNotificationFilter action creator
  test('setNotificationFilter action creator creates the correct action', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    const action = setNotificationFilter(filter);
    expect(action).toEqual(expectedAction);
  });
  