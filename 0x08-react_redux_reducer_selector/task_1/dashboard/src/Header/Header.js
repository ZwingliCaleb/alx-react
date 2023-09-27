import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import AppContext from '../App/AppContext';

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
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.appHeader)}>
        <img src={logo} alt='Holberton logo' className={css(styles.image)}></img>
        <h1 className={css(styles.appHi)}>School dashboard</h1>
        {user.email && user.password && (
          <section className={css(styles.welcomeSection)} id="logoutSection">
            <p className={css(styles.welcomeText)}>Welcome {user.email} </p>
            <span
              className={css(styles.logoutLink)}
              onClick={() => logOut()}
            >
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
  logOut: PropTypes.func.isRequired,
};

export default Header;