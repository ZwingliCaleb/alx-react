import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('displays the default footer content', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain(`Copyright ${new Date().getFullYear()}`);
  });

  it('displays the "Contact us" link when the user is logged in within the context', () => {
    const user = { loggedIn: true }; // Simulate a logged-in user
    const wrapper = shallow(<Footer user={user} />);

    expect(wrapper.find('a[href="/contact"]').exists()).toBe(true);
  });

  it('does not display the "Contact us" link when the user is logged out within the context', () => {
    const user = { loggedIn: false }; // Simulate a logged-out user
    const wrapper = shallow(<Footer user={user} />);

    expect(wrapper.find('a[href="/contact"]').exists()).toBe(false);
  });
});
