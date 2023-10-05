import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe('<Notifications />', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders menuItem class when displayDrawer is false', () => {
        const component = shallow(<Notifications displayDrawer={false} />);
        const menu = component.find('div.menuItem');

        expect(menu.exists()).toBe(true);
    });

    it('renders flexitem class when displayDrawer is true', () => {
        const component = shallow(<Notifications displayDrawer={true} />);
        const flexItem = component.find('div.flexitem');

        expect(flexItem.exists()).toBe(true);
    });

    it('renders "No new notification for now" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

        expect(wrapper.text()).toContain('No new notification for now');
        expect(wrapper.text()).not.toContain('Here is the list of notifications');
    });

    it('renders notification list when listNotifications is provided', () => {
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

    it('calls handleDisplayDrawer when menu item is clicked', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
        const menu = wrapper.find('div.menuItem');

        // Simulate click on the menu item
        menu.simulate('click');

        // Verify if handleDisplayDrawer was called
        expect(handleDisplayDrawer).toHaveBeenCalled();
    });

    it('calls handleHideDrawer when button is clicked', () => {
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} listNotifications={[]} />);
        const closeButton = wrapper.find("button[aria-label='Close']");

        // Simulate click on the close button
        closeButton.simulate('click');

        // Verify if handleHideDrawer was called
        expect(handleHideDrawer).toHaveBeenCalled();
    });

    it('calls markNotificationAsRead when notification item is clicked', () => {
        const markNotificationAsRead = jest.fn();
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available', html: null },
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={markNotificationAsRead} />);
        const notificationItem = wrapper.find(NotificationItem);

        // Simulate click on the notification item
        notificationItem.prop('markAsRead')();

        // Verify if markNotificationAsRead was called
        expect(markNotificationAsRead).toHaveBeenCalledWith(1);
    });

    it('calls setNotificationFilter with URGENT when urgent button is clicked', () => {
        const setNotificationFilter = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} setNotificationFilter={setNotificationFilter} />);
        const urgentButton = wrapper.find("button").at(0);

        // Simulate click on the urgent button
        urgentButton.simulate('click');

        // Verify if setNotificationFilter was called with URGENT
        expect(setNotificationFilter).toHaveBeenCalledWith('URGENT');
    });

    it('calls setNotificationFilter with DEFAULT when default button is clicked', () => {
        const setNotificationFilter = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} setNotificationFilter={setNotificationFilter} />);
        const defaultButton = wrapper.find("button").at(1);

        // Simulate click on the default button
        defaultButton.simulate('click');

        // Verify if setNotificationFilter was called with DEFAULT
        expect(setNotificationFilter).toHaveBeenCalledWith('DEFAULT');
    });
});
