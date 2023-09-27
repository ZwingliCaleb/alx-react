import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import CourseList from '../CourseList/CourseList';
//import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { user } from './AppContext';

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
})

class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);

    // Create a local state to store a displayDrawer element:
    this.state = { 
      displayDrawer: false,
      user: user,
      logOut: this.logOut,

      listNotifications: [
        {id: 1, type: 'default', value: 'New course available', html: null},
        {id: 2, type: 'urgent', value: 'New resume available', html: null},
        {id: 3, type: 'urgent', value: null, html: getLatestNotification(), },
      ],
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40},
  ];

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter((notification) => notification.id !== id);
    this.setState({ listNotifications: newList });
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  // handleDisplayDrawer that will change the value of displayDrawer to true
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true})
  };

  // handleHideDrawer that will change the value of displayDrawer to false
  handleHideDrawer() {
    this.setState({ displayDrawer: false})
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email, password, isLoggedIn: true,
      },
    });
  };

  logOut() {
    this.setState({ user: {
      email: '',
      password: '',
      isLoggedIn: false,
    }, });
  };
 
  render() {
    const { user } = this.state;
    return (
      // Refactor the render method to use the objects from the state to display the CourseList or the Login components
      <AppContext.Provider
      value={{
        user,
        logOut: this.logOut
      }} >
      <>
        <div className={css(styles.headerStyling)}>
          <Notifications 
          markNotificationAsRead={this.markNotificationAsRead}
          displayDrawer={this.state.displayDrawer}
           listNotifications={this.listNotifications}
           handleDisplayDrawer={this.handleDisplayDrawer}
           handleHideDrawer={this.handleHideDrawer} />
          <Header />
        </div>
        {this.state.user.isLoggedIn ? 
        (<BodySectionWithMarginBottom title='Course list'>
          <CourseList listCourses={this.listCourses}/>
        </BodySectionWithMarginBottom>)
         : (<BodySectionWithMarginBottom title='Log in to continue'>
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom>)
        }
        <BodySection title='News from the School' className={css(styles.borderStyling)}>
          <p>lots of news and so on</p>
        </BodySection>
        <Footer />
      </>
      </AppContext.Provider>
    );
  }
  
};


export default App;