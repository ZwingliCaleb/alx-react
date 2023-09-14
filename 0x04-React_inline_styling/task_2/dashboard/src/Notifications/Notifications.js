import React, { Component } from "react";
import PropTypes from 'prop-types';
import NotificationItem from "./NotificationItem";
import NotificationItemShape from './NotificationItemShape';
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notification: {
      border: '1px dashed red',
      padding: '1rem',
      margin: '1rem 2rem 2rem 0'
  },

  menuItem: {
      textAlign: 'right',
      margin: '1rem'
  },

  img: {
      width: '10px'
  }
});


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Compare the length of the next listNotifications with the current one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        {this.props.displayDrawer ? (
          <div className={css(styles.flexitem)}>
            <div className={css(styles.menuItem)} data-testid='menu-item'>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.notification)} data-testid = 'menu-notifications'>
              <button
                style={{ float: "right", border: '1px solid red' }}
                aria-label="Close"
                onClick={() => {
                  console.log("Close button has been clicked");
                }}
              >
                <img src={closeIcon} className={css(styles.img)} alt="close button" />
              </button>

              {this.props.listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                <>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {this.props.listNotifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={this.markAsRead}
                        id={notification.id}
                      />
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
