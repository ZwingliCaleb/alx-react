import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
// import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
//import NotificationItemShape from './NotificationItemShape'

function Notifications({displayDrawer, listNotifications}) {
  return (
      <>
          { displayDrawer ? (
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

              {listNotifications.length === 0 ? (
                  <p>No notifications for now</p>
              ) : (
                <>
                  <p>Here is the list of notifications</p>

                  <ul>
                      {listNotifications.map((notification) => (
                          <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html}/>
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;