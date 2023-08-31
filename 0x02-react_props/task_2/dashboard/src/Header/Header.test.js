import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import '../../config/setupTests'

describe('<Header />', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });

    it('renders an image', () => {
        const wrapper = shallow(<Header />);
        const image = wrapper.find('img');
        expect(image.exists()).toBe(true);
    });

    it('renders an Header 1 tag', () => {
        const wrapper = shallow(<Header />);
        const heading1 = wrapper.find('h1');
        expect(heading1.exists()).toBe(true);
    });
})