import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import '../../config/setupTests';

describe('BodySectionWithMarginBottom Component', () => {
  it('renders a BodySection component and passes props correctly', () => {
    const title = 'Test Title';
    const children = <p>Test Children Node</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    const bodySection = wrapper.find(BodySection);

    expect(bodySection.exists()).toBe(true);
    // Assert that the props are passed correctly to the BodySection component
    expect(bodySection.prop('title')).toBe(title);
    expect(bodySection.contains(children)).toBe(true);
  });
});
