import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

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

  it('does not render logoutSection with default props', () => {
    const wrapper = shallow(<Header />);
    const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection.exists()).toBe(false);
  });

  it('renders logoutSection with user-defined props', () => {
    const user = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const wrapper = shallow(<Header user={user} logOut={logOutSpy} />);

    const logoutSection = wrapper.find('#logoutSection');
    expect(logoutSection.exists()).toBe(true);
  });

  it('calls logOut function when logout link is clicked', () => {
    const user = {
      email: 'test@example.com',
      password: 'testpassword',
    };

    const wrapper = shallow(<Header user={user} logOut={logOutSpy} />);

    const logoutLink = wrapper.find('.logoutLink');
    logoutLink.simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
