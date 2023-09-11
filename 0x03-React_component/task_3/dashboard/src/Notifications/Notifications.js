import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape'

class Notifications extends Component {
  constructor(props) {
      super(props);
      this.markAsRead = this.markAsRead.bind(this);
  }
  
  markAsRead(id) {
      console.log(`Notification ${id} has been marked as read`)
  }

  render () {
      return (
          <>
              { this.props.displayDrawer ? (
              <div className='flexitem'>
              <div className='menuItem'>
                      <p>Your notifications</p>
              </div>
              <div className='Notifications'>
                  <button style={{float: 'right'}} aria-label='Close' 
                  onClick={ () => {
                      console.log('Close button has been clicked')}
                      }>
                          <img src={closeIcon} alt='close button' />
                  </button>
                  
                  {this.props.listNotifications.length === 0 ? (
                      <p>No new notification for now</p>
                  ) : (
                      <>
                          <p>Here is the list of notifications</p>
                          <ul>
                              {this.props.listNotifications.map(notification => (
                              <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} 
                              markAsRead={this.markAsRead} id={notification.id} />
                              ))}
                          </ul>
                          </>
                  )}
              </div>
              </div>
              ) : (
                  <div className='menuItem'>
                      <p>Your notifications</p>
              </div>
              )}
              
          </>
      );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;