import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('<Login />', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });

    it('renders 2 input tags', () => {
        const wrapper = shallow(<Login />);
        const inputTags = wrapper.find('input');
        expect(inputTags).toHaveLength(2);
    });

    it('renders 2 label tags', () => {
        const wrapper = shallow(<Login />);
        const labelTags = wrapper.find('label');
        expect(labelTags).toHaveLength(2);
    });

    it('disables the submit button by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBeTruthy();
    });

    it('enables the submit button after changing input values', () => {
        const wrapper = shallow(<Login />);
        // Simulate changing the email input value
        wrapper.find('input#email').simulate('change', {
            target: { name: 'email', value: 'test@example.com' },
        });
        // Simulate changing the password input value
        wrapper.find('input#password').simulate('change', {
            target: { name: 'password', value: 'password123' },
        });
        const submitButton = wrapper.find('input[type="submit"]');
        expect(submitButton.prop('disabled')).toBeFalsy();
    });

});
