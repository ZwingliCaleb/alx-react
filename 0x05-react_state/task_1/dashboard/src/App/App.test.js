import React from 'react';
import { shallow, mount } from 'enzyme';
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

  it('does not render Login when isLoggedIn is true', () => {
    const component = shallow(<App isLoggedIn={true}/>);
    expect(component.contains(<Login />)).toBe(false);
    expect(component.contains(<CourseList />)).toBe(true);
  });

  it('verifies that when control + h are pressed the logOut function is called and shows the alert Logging you out', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', {
      key: 'h', ctrlKey: true,
    });

    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(alertMock).toHaveBeenCalledTimes(1);

    alertMock.mockRestore();
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it('removing the event listener on mount', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const component = mount(<App logOut={logOutMock} />);
    component.unmount();

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });
    document.dispatchEvent(event);

    expect(alertMock).not.toHaveBeenCalled('');
    expect(logOutMock).not.toHaveBeenCalled('');

    alertMock.mockRestore();
    jest.clearAllMocks();
  });

  it('verifies that the default state for displayDrawer is false', () => {
    const component = shallow(<App />);
    expect(component.state('displayDrawer')).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    expect(component.state('displayDrawer')).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
    const component = shallow(<App />);
    component.setState({ displayDrawer: true }); // Set initial state to true
    component.instance().handleHideDrawer();
    expect(component.state('displayDrawer')).toBe(false);
  });
});
