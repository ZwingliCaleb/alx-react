import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { user } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from './yourActions'; // Update with your action creators import path

const styles = StyleSheet.create({
  headerStyling: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    borderBottom: '2px solid rgb(217, 37, 37)',

    "@media (max-width: 900px)": {
      display: "block",
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      user: user,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available', html: null },
        { id: 2, type: 'urgent', value: 'New resume available', html: null },
        { id: 3, type: 'urgent', value: null, html: getLatestNotification() },
      ],
    };

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(notification => notification.id !== id);
    this.setState({ listNotifications: newList });
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.hideNotificationDrawer();
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer } = this.props;

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
              markNotificationAsRead={this.markNotificationAsRead}
              displayDrawer={displayDrawer}
              listNotifications={this.state.listNotifications}
              handleDisplayDrawer={displayNotificationDrawer}
            />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School' className={css(styles.borderStyling)}>
            <p>lots of news and so on</p>
          </BodySection>
          <Footer />
        </>
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    displayDrawer: state.uiReducer.isNotificationDrawerVisible,
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
