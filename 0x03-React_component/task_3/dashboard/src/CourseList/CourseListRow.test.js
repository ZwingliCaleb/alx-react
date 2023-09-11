
import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import '../../config/setupTests'

describe('CourseListRow component', () => {
    it('renders without crashing', () => {
        shallow(<CourseListRow />);
    });

    it('renders one cell with colspan = 2 when textSecondCell doesnt exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell={null} />);
        const tableRow = wrapper.find("tr");

        expect(tableRow.children()).toHaveLength(1);
        expect(tableRow.childAt(0).html()).toEqual('<th colSpan="2">test</th>');
    });

    it('renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);
        const tableRow = wrapper.find("tr");

        expect(tableRow.children()).toHaveLength(2);
        expect(tableRow.childAt(0).html()).toEqual('<td>test</td>');
        expect(tableRow.childAt(1).html()).toEqual('<td>test</td>');
    });
})