import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// action to mark notification as read
export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    }
};

// action to set the filter for notification types
export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    }
};