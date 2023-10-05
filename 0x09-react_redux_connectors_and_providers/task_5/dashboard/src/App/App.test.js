import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

const mockStore = configureStore();

describe('App tests', () => {
  let store;
  let component;

  beforeEach(() => {
    const initialState = {
      uiReducer: {
        isLoggedIn: false,
        isNotificationDrawerVisible: false,
      },
    };

    store = mockStore(initialState);
    component = shallow(<App store={store} />).dive();
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders the notification component', () => {
    expect(component.contains(<Notifications />)).toBe(true);
  });

  it('renders the Header component', () => {
    expect(component.contains(<Header />)).toBe(true);
  });

  it('renders the login component', () => {
    expect(component.contains(<Login />)).toBe(true);
  });

  it('renders the Footer component', () => {
    expect(component.contains(<Footer />)).toBe(true);
  });

  it('verifies that CourseList is not rendered when isLoggedIn is false', () => {
    expect(component.find(CourseList).exists()).toBe(false);
    expect(component.find(Login).exists()).toBe(true);
  });

  it('does not render Login when isLoggedIn is true', () => {
    const initialState = {
      uiReducer: {
        isLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    };

    store = mockStore(initialState);
    component = shallow(<App store={store} />).dive();
    
    expect(component.find(Login).exists()).toBe(false);
    expect(component.find(CourseList).exists()).toBe(true);
  });

  it('verifies that the default state for isNotificationDrawerVisible is false', () => {
    expect(component.props().isNotificationDrawerVisible).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, isNotificationDrawerVisible is true', () => {
    component.props().displayNotificationDrawer();
    expect(component.props().isNotificationDrawerVisible).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, isNotificationDrawerVisible is false', () => {
    component.props().hideNotificationDrawer();
    expect(component.props().isNotificationDrawerVisible).toBe(false);
  });
});
