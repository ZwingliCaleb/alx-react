import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
  },
  urgentItem: {
    color: 'red',
  },
  notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '10px',
    width: '95vw',
  },
});

function NotificationItem({ type, value, html, markAsRead, id }) {
  const itemStyles = html ? styles.urgentItem : styles.defaultItem;

  return (
    <div className={css(styles.notifications)}>
      {type && value ? (
        <li
          onClick={() => markAsRead(id)}
          data-notification-type={type}
          className={css(itemStyles)}
        >
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          onClick={() => markAsRead(id)}
          data-urgent
          dangerouslySetInnerHTML={{ __html: html }}
          className={css(styles.urgentItem)}
        ></li>
      ) : null}
    </div>
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
