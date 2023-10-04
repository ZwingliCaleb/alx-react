import React from 'react';
import { shallow, mount} from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../../path/to/your/reducer'; // Import your root reducer
import App from './App';
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
    component.setState({ user: { email: '', password: '' } });
    expect(component.contains(<CourseList />)).toBe(false);
    expect(component.contains(<Login />)).toBe(true);
  });

  it('does not render Login when isLoggedIn is true', () => {
    component.setState({ user: { email: 'test@example.com', password: 'testpassword' } });
    expect(component.contains(<Login />)).toBe(false);
    expect(component.contains(<CourseList />)).toBe(true);
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

  it('verifies that when control + h are pressed, logOut is called and shows the alert Logging you out', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(alertMock).toHaveBeenCalledTimes(1);
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it('removing the event listener on unmount', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const wrapper = mount(<App logOut={logOutMock} />);
    wrapper.unmount();

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });
    document.dispatchEvent(event);

    expect(alertMock).not.toHaveBeenCalled();
    expect(logOutMock).not.toHaveBeenCalled();

    alertMock.mockRestore();
    jest.clearAllMocks();
  });

  it('verifies that the logIn function updates the state correctly', () => {
    const email = 'test@example.com';
    const password = 'testpassword';

    component.instance().logIn(email, password);

    expect(component.state('user')).toEqual({
      email,
      password,
    });
  });

  it('verifies that the logOut function updates the state correctly', () => {
    component.instance().logIn('test@example.com', 'testpassword');
    component.instance().logOut();

    expect(component.state('user')).toEqual({
      email: '',
      password: '',
    });
  });

  it('verifies that markNotificationAsRead updates the state correctly', () => {
    // Initialize the component with some initial notifications
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1', html: null },
      { id: 2, type: 'urgent', value: 'Notification 2', html: null },
    ];

    const notificationIdToMarkAsRead = 1;

    component.setState({ listNotifications: initialNotifications });

    // Call markNotificationAsRead with an ID
    component.instance().markNotificationAsRead(notificationIdToMarkAsRead);

    // Check if the state has been updated correctly
    expect(component.state('listNotifications')).toEqual([
      { id: 2, type: 'urgent', value: 'Notification 2', html: null },
    ]);
  });

  describe('mapStateToProps', () => {
    it('should map state to props correctly when user is logged in', () => {
      const store = createStore(rootReducer, {
        uiReducer: {
          isUserLoggedIn: true, // Assuming 'isUserLoggedIn' is the correct key in your Redux store
        },
      });

      const connectedComponent = shallow(<App store={store} />).dive();
      const props = connectedComponent.props();

      expect(props.isLoggedIn).toEqual(true);
    });

    it('should map state to props correctly when user is not logged in', () => {
      const store = createStore(rootReducer, {
        uiReducer: {
          isUserLoggedIn: false, // Assuming 'isUserLoggedIn' is the correct key in your Redux store
        },
      });

      const connectedComponent = shallow(<App store={store} />).dive();
      const props = connectedComponent.props();

      expect(props.isLoggedIn).toEqual(false);
    });
  });
});
