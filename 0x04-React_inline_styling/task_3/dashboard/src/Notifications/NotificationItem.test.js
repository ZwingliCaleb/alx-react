import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem";
import '../../../../task_0/dashboard/config/setupTests';
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("rendering components", () => {
  it("renders NotificationItem component without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type="default" value="test" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
  });

  it('renders correct html in html="<u>test</u>" props', () => {
    const wrapper = shallow(<NotificationItem />);

    wrapper.setProps({ html: "<u>test</u>" });
    expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});

describe("make sure the onClick event work as expected", () => {
  it("call console.log", () => {
    const wrapper = shallow(<NotificationItem />);
    const spy = jest.fn();

    wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
    wrapper.find("li").props().onClick();
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledwith(1);
    spy.mockRestore();
  })

});
