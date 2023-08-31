import React from 'react';
import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import NotificationItem from './NotificationItem';
import '../../config/setupTests';

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders NotificationItem elements', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('ul');
        expect(listItems.children()).toHaveLength(3);
        listItems.forEach((node) => {
            expect(node.equals(<NotificationItem />));
        });
    });
    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });
})