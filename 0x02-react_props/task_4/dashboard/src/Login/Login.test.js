import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import '../../config/setupTests'

describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders 2 input tags', () => {
        const wrapper = shallow(<Login />);
        const inputTag = wrapper.find('input');
        expect(inputTag).toHaveLength(2);
    });

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        const labelTag = wrapper.find('label');
        expect(labelTag).toHaveLength(2);
    });
})