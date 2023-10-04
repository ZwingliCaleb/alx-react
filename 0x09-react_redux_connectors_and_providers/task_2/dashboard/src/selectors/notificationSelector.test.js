import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map, List } from 'immutable';

describe('notificationSelector', () => {
  it('filterTypeSelected should select the filter', () => {
    const state = {
      notifications: Map({
        filter: 'DEFAULT',
        notifications: List(),
      }),
    };
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications should select all notifications', () => {
    const notifications = List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: false, type: 'urgent', value: 'New resume available' }),
    ]);

    const state = {
      notifications: Map({
        filter: 'DEFAULT',
        notifications: notifications,
      }),
    };

    expect(getNotifications(state)).toEqual(notifications);
  });

  it('getUnreadNotifications should select unread notifications', () => {
    const notifications = List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }),
      Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
    ]);

    const state = {
      notifications: Map({
        filter: 'DEFAULT',
        notifications: notifications,
      }),
    };

    const expectedUnreadNotifications = List([
      Map({ id: 1, isRead: false, type: 'default', value: 'New course available' }),
      Map({ id: 3, isRead: false, type: 'urgent', value: 'New data available' }),
    ]);

    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
