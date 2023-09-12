/* eslint-disable jest/valid-expect */
import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import '../../config/setupTests'

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders menuItem class when displayDrawer is false', () => {
        const component = shallow(<Notifications displayDrawer={false}/>);
        const menu = component.find('div.menuItem');

        expect(menu.exists()).toBe(true);
    });

    it('renders menuItem and notifications class when displayDrawer is true', () => {
        const component = shallow(<Notifications displayDrawer={true}/>);
        const menu = component.find('div.menuItem');
        const mainNoti = component.find('div.Notifications');

        expect(menu.exists()).toBe(true);
        expect(mainNoti.exists()).toBe(true);
    });

    it('renders correctly if you pass an empty array or if you don’t pass the listNotifications property', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        expect(wrapper.find(NotificationItem)).toHaveLength(0);
        expect(wrapper.text()).toContain('No new notification for now');
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });

    it('renders notification list correctly with notifications', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available', html: null },
          { id: 2, type: 'urgent', value: 'New resume available', html: null },
        ];
    
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const notificationItems = wrapper.find(NotificationItem);
    
        expect(notificationItems).toHaveLength(listNotifications.length);
        expect(wrapper.text()).toContain('Here is the list of notifications');
        expect(wrapper.text()).not.toContain('No new notification for now');
    });

    it('does not rerender when updating with the same list', () => {
        const listNotifications = [
          { id: 1, type: 'default', value: 'New course available', html: null },
          { id: 2, type: 'urgent', value: 'New resume available', html: null },
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const instance = wrapper.instance(); // Get the component instance

        const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

        wrapper.setProps({ displayDrawer: true, listNotifications: listNotifications });

        expect(shouldUpdateSpy).toHaveBeenCalledTimes(1); // It should not rerender
    });

    it('rerenders when updating with a longer list', () => {
        const listNotifications1 = [
          { id: 1, type: 'default', value: 'New course available', html: null },
        ];

        const listNotifications2 = [
          { id: 1, type: 'default', value: 'New course available', html: null },
          { id: 2, type: 'urgent', value: 'New resume available', html: null },
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications1} />);
        const instance = wrapper.instance(); // Get the component instance

        const shouldUpdateSpy = jest.spyOn(instance, 'shouldComponentUpdate');

        // Update with a longer list
        wrapper.setProps({ displayDrawer: true, listNotifications: listNotifications2 });

        expect(shouldUpdateSpy).toHaveBeenCalledTimes(2); // It should rerender
    });
});
