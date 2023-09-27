import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action to mark notification as read
export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    };
};

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

export const boundMarkAsRead = (index) => (dispatch) => {
    dispatch(markAsRead(index));
};

export const boundSetNotificationFilter = (filter) => (dispatch) => {
    dispatch(setNotificationFilter(filter));
};
