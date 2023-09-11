import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../../config/setupTests';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available', html: null },
  { id: 2, type: 'urgent', value: 'New resume available', html: null },
  { id: 3, type: 'urgent', value: null, html: { __html: 'Test HTML' } }
];

describe('App tests', () => {
  it('renders without crashing', () => {
      shallow(<App />)
  });

  it('renders the notification component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Notifications displayDrawer={true} listNotifications={listNotifications} />)).toBe(true);
  });

  it('renders the Header component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it('renders the login component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });
  
  it('renders the Footer component', () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it('verifies that CourseList is not rendered when isLoggedIn is false', () => {
    const component = shallow(<App isLoggedIn={false}/>);
    expect(component.contains(<CourseList />)).toBe(false);
    expect(component.contains(<Login />)).toBe(true);
  });

  it('does not render Login when isloggedin is true', () => {
    const component = shallow(<App isLoggedIn={true}/>);
    expect(component.contains(<Login />)).toBe(false);
    expect(component.contains(<CourseList />)).toBe(true);
  })
});
