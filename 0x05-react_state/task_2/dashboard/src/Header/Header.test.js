import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { AppContext } from './App'; // Import the AppContext from your App component

// Create a spy for the logOut function
const logOutSpy = jest.fn();

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an image', () => {
    const wrapper = shallow(<Header />);
    const image = wrapper.find('img');
    expect(image.exists()).toBe(true);
  });

  it('renders an H1 tag', () => {
    const wrapper = shallow(<Header />);
    const heading1 = wrapper.find('h1');
    expect(heading1.exists()).toBe(true);
  });

  it('does not render logoutSection with default context value', () => {
    const wrapper = shallow(<Header />);
    const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection.exists()).toBe(false);
  });

  it('renders logoutSection with user-defined context value', () => {
    const user = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection.exists()).toBe(true);
  });

  it('calls logOut function when logout link is clicked', () => {
    const user = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );

    const logoutLink = wrapper.find('.logoutLink');
    logoutLink.simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});