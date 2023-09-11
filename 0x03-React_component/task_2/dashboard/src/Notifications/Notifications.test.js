/* eslint-disable jest/valid-expect */
import React from "react";
import { shallow } from "enzyme";
import { getLatestNotification } from "../utils/utils";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import '../../config/setupTests'

describe('<Notifications />', () => {
  it('renders without crashing', () => {
      shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      const listItems = wrapper.find('ul');
      expect(listItems.children()).toHaveLength(3);
      listItems.forEach((node) => {
          expect(node.equals(<NotificationItem />));
      });
      expect(listItems.childAt(0).html()).toEqual('<li data-notification-type="default">New course available</li>');
      expect(listItems.childAt(1).html()).toEqual('<li data-notification-type="urgent">New resume available</li>');
      expect(listItems.childAt(2).html()).toEqual(`<li data-urgent=\"true\">${getLatestNotification()}</li>`);
  });
  it('renders the text Here is the list of notifications', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('renders menuItem class when displayDrawer is false', () => {
      const component = shallow(<Notifications displayDrawer={false}/>);
      const menu = component.find('div.menuItem');
      const mainNoti = component.find('div.Notifications');

      expect(menu.exists()).toBe(true);
  });

  it('renders menuItem and notifications class when displayDrawer is true', () => {
      const component = shallow(<Notifications displayDrawer={true}/>);
      const menu = component.find('div.menuItem');
      const mainNoti = component.find('div.Notifications');

      expect(menu.exists()).toBe(true);
      expect(mainNoti.exists()).toBe(true);
  });

})