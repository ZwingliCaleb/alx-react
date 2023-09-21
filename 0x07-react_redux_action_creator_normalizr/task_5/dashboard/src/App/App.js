import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { defaultUser } from './AppContext';

const styles = StyleSheet.create({
  headerStyling: {
    flexDirection: 'row-reverse',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '2px solid rgb(217, 37, 37)',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available', html: null },
        { id: 2, type: 'urgent', value: 'New resume available', html: null },
        {
          id: 3,
          type: 'urgent',
          value: null,
          html: { __html: getLatestNotification() },
        },
      ],
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.logOut();
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
      },
    });
  }

  logOut() {
    this.setState({
      user: defaultUser,
    });
  }

  markNotificationAsRead(id) {
    const updatedNotifications = [...this.state.listNotifications];

    const index = updatedNotifications.findIndex(
      (notification) => notification.id === id
    );

    if (index !== -1) {
      updatedNotifications.splice(index, 1);

      this.setState({ listNotifications: updatedNotifications });
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div className={css(styles.headerStyling)}>
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={() => this.handleDisplayDrawer()}
          handleHideDrawer={() => this.handleHideDrawer()}
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead} // Pass the new function
        />
        <div className="App">
          <Header />
          {user.email && user.password ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <Footer />
          <BodySection title="News from School">
            <p>random text about school news.</p>
          </BodySection>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

export default App;
