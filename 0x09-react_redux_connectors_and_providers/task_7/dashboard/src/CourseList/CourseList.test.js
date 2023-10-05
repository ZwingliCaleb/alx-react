import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

describe('CourseList component tests', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find('thead').children()).toHaveLength(2);
    wrapper.find('thead').forEach((node) => {
      expect(
        node.equals(<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />)
      ).toBeTruthy();
    });

    expect(wrapper.find('tbody').children()).toHaveLength(3);
    expect(wrapper.find('tbody').childAt(0).html()).toEqual('<tr><td>ES6</td><td>60</td></tr>');
    expect(wrapper.find('tbody').childAt(1).html()).toEqual('<tr><td>Webpack</td><td>20</td></tr>');
    expect(wrapper.find('tbody').childAt(2).html()).toEqual('<tr><td>React</td><td>40</td></tr>');
  });

  it('should dispatch FETCH_COURSE_SUCCESS action when mounted', () => {
    const fetchCoursesMock = jest.fn();
    shallow(<CourseList listCourses={listCourses} fetchCourses={fetchCoursesMock} />);
    expect(fetchCoursesMock).toHaveBeenCalledWith();
  });

  it('should dispatch SELECT_COURSE and UNSELECT_COURSE actions when onChangeRow is called', () => {
    const selectCourseMock = jest.fn();
    const unselectCourseMock = jest.fn();
    const wrapper = shallow(
      <CourseList
        listCourses={listCourses}
        selectCourse={selectCourseMock}
        unselectCourse={unselectCourseMock}
      />
    );

    // Call onChangeRow with id 1 and checked true
    wrapper.instance().onChangeRow(1, true);
    expect(selectCourseMock).toHaveBeenCalledWith(1);

    // Call onChangeRow with id 1 and checked false
    wrapper.instance().onChangeRow(1, false);
    expect(unselectCourseMock).toHaveBeenCalledWith(1);
  });
});
