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
const initialState = {
  ui: {
    isUserLoggedIn: false,
  },
};

describe('App tests', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(initialState);
    component = shallow(<App store={store} />).dive();
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders the notification component', () => {
    expect(component.contains(<Notifications displayDrawer={true} listNotifications={[]} />)).toBe(true);
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
    store = mockStore({
      ui: {
        isUserLoggedIn: true,
      },
    });
    component = shallow(<App store={store} />).dive();
    expect(component.find(Login).exists()).toBe(false);
    expect(component.find(CourseList).exists()).toBe(true);
  });

  it('verifies that the default state for displayDrawer is false', () => {
    expect(component.props().displayDrawer).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
    component.props().handleDisplayDrawer();
    expect(component.props().displayDrawer).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
    component.props().handleHideDrawer();
    expect(component.props().displayDrawer).toBe(false);
  });
});
