import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

const listNotifications = [
  { id: 1, type: 'default', value: 'Notification 1', html: null },
  { id: 2, type: 'urgent', value: 'Notification 2', html: null },
  { id: 3, type: 'urgent', value: null, html: { __html: 'Test HTML' } }
];

describe('App tests', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('renders the notification component', () => {
    expect(component.contains(<Notifications displayDrawer={true} listNotifications={listNotifications} />)).toBe(true);
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
    component.setProps({ isLoggedIn: true });
    expect(component.find(Login).exists()).toBe(false);
    expect(component.find(CourseList).exists()).toBe(true);
  });

  it('verifies that the default state for displayDrawer is false', () => {
    expect(component.state('displayDrawer')).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
    component.instance().handleDisplayDrawer();
    expect(component.state('displayDrawer')).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
    component.setState({ displayDrawer: true }); // Set initial state to true
    component.instance().handleHideDrawer();
    expect(component.state('displayDrawer')).toBe(false);
  });
});
