import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn,
    };
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  listNotifications = [
    { id: 2, type: 'default', value: 'New course available', html: null },
    { id: 3, type: 'urgent', value: 'New resume available', html: null },
    {
      id: 4,
      type: 'urgent',
      value: null,
      html: { __html: getLatestNotification() }
    }
  ];

  render() {
    return (
      <div>
        <Notifications displayDrawer={true} listNotifications={this.listNotifications} />
        <div className="App">
          <Header />
          {this.state.isLoggedIn ? (
            <CourseList listCourses={this.listCourses} />
          ) : (
            <Login />
          )}
          <Footer />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;