import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUnreadNotificationsByType } from "../selectors/notificationSelectors";
import { markAsRead, setNotificationFilter } from "../actions/notificationActionCreators";
import Notifications from "./Notifications";

const NotificationsContainer = ({
  listNotifications,
  markNotificationAsRead,
  setNotificationFilter
}) => {
  useEffect(() => {
  }, []); 

  return (
    <Notifications
      displayDrawer={true} 
      listNotifications={listNotifications}
      markNotificationAsRead={markNotificationAsRead}
      setNotificationFilter={setNotificationFilter}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markNotificationAsRead: (id) => dispatch(markAsRead(id)),
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
