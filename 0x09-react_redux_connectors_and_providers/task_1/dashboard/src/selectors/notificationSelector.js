import { createSelector } from 'reselect';

const selectNotifications = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  [selectNotifications],
  (notifications) => notifications.get('filter')
);

export const getNotifications = createSelector(
  [selectNotifications],
  (notifications) => notifications.get('notifications')
);

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) =>
    notifications.filter((notification) => !notification.get('isRead'))
);
