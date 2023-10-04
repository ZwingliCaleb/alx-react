import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { logout } from '../path/to/your/logoutActionCreator';
import { getNotifications } from '../selectors/notificationSelector.js';

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appHi: {
    color: 'rgb(217, 37, 37)',
    alignSelf: 'center',
  },

  image: {
    width: '40%',
  },

  welcomeSection: {
    display: 'flex',
    alignItems: 'center',
  },

  welcomeText: {
    marginRight: '10px',
  },

  logoutLink: {
    color: 'blue',
    cursor: 'pointer',
  },
});

class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return (
      <header className={css(styles.appHeader)}>
        <img src={logo} alt='Holberton logo' className={css(styles.image)}></img>
        <h1 className={css(styles.appHi)}>School dashboard</h1>
        {user.email && user.password && (
          <section className={css(styles.welcomeSection)} id="logoutSection">
            <p className={css(styles.welcomeText)}>Welcome {user.email} </p>
            <span className={css(styles.logoutLink)} onClick={logout}>
              (logout)
            </span>
          </section>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

// Create a selector to extract user data from the Redux state
const selectUser = (state) => state.user;

// Use createSelector from reselect if you have more complex selectors
const getUser = createSelector([selectUser], (user) => user);

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    notifications: getNotifications(state),
  };
};

export default connect(mapStateToProps, { logout })(Header);
