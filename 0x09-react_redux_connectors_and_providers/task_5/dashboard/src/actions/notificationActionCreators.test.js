import { markAsRead, setNotificationFilter, setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';  
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';  

test('markAsRead action creator creates the correct action', () => {
  const index = 1;
  const expectedAction = {
    type: MARK_AS_READ,
    index,
  };
  const action = markAsRead(index);
  expect(action).toEqual(expectedAction);
});

test('setNotificationFilter action creator creates the correct action', () => {
  const filter = 'DEFAULT';
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter,
  };
  const action = setNotificationFilter(filter);
  expect(action).toEqual(expectedAction);
});

test('setLoadingState action creator creates the correct action', () => {
  const loading = true;
  const expectedAction = {
    type: SET_LOADING_STATE,
    loading,
  };
  const action = setLoadingState(loading);
  expect(action).toEqual(expectedAction);
});

test('setNotifications action creator creates the correct action', () => {
  const notifications = [{ id: 1, type: 'default', value: 'New notification' }];
  const expectedAction = {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    payload: notifications,
  };
  const action = setNotifications(notifications);
  expect(action).toEqual(expectedAction);
});

test('fetchNotifications action creator creates the correct action', async () => {
  const dispatch = jest.fn();
  await fetchNotifications()(dispatch);
  expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: FETCH_NOTIFICATIONS_SUCCESS }));
});
