import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    cursor: 'pointer',
  },
  urgentItem: {
    color: 'red',
    cursor: 'pointer',
  },
  notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '10px',
    width: '95vw',
  },

  '@media (max-width: 900px)': {
    defaultItem: {
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyleType: 'none',
    },
    urgentItem: {
      fontSize: '20px',
      padding: '10px 8px',
      borderBottom: '1px solid black',
      listStyleType: 'none',
    },
  },
});

function NotificationItem({ type, value, html, markAsRead, id }) {
  const itemStyles = html ? styles.urgentItem : styles.defaultItem;

  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li
      onClick={handleClick}
      data-notification-type={type}
      className={css(styles.notifications, itemStyles)}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

export default React.memo(NotificationItem);
