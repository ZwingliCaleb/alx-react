import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    const {type, value, html, markAsRead, id} = this.props
    return (
      <>
      {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li> : null}
      {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{__HTML: html}}></li> : null}
      </>
    )
  }
}

NotificationItem.propTypes = {
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),

  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0
};

export default NotificationItem;