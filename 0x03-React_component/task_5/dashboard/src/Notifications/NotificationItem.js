import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, value, html, markAsRead, id }) {
  return (
    <>
      {type && value ? (
        <li onClick={() => markAsRead(id)} data-notification-type={type}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          onClick={() => markAsRead(id)}
          data-urgent
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : null}
    </>
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
