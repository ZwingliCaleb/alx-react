import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
} from './actions/uiActionCreators';

const styles = StyleSheet.create({
  headerStyling: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottom: '2px solid rgb(217, 37, 37)',

    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
});

class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const { logOut } = this.props;
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  render() {
    const { isLoggedIn, displayNotificationDrawer, hideNotificationDrawer, login } = this.props; // Destructure login from props

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.logOut,
        }}
      >
        <>
          <div className={css(styles.headerStyling)}>
            <Notifications
              markNotificationAsRead={this.markNotificationAsRead.bind(this)}
              displayDrawer={this.props.isNotificationDrawerVisible}
              listNotifications={this.state.listNotifications}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection
            title="News from the School"
            className={css(styles.borderStyling)}
          >
            <p>lots of news and so on</p>
          </BodySection>
          <Footer />
        </>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isNotificationDrawerVisible: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired, // Add login prop validation
};

App.defaultProps = {
  isLoggedIn: false,
  isNotificationDrawerVisible: false,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.isLoggedIn,
  isNotificationDrawerVisible: state.uiReducer.isNotificationDrawerVisible,
});

export default connect(mapStateToProps, {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest, // Map loginRequest to login prop
})(App);
