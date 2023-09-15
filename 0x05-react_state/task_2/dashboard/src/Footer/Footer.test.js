import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';
import '../../config/setupTests'

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders the text copyright', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
})