import React from 'react';
import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import '../../config/setupTests'

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('li');
        expect(listItems).toHaveLength(3);
    });
    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });
})