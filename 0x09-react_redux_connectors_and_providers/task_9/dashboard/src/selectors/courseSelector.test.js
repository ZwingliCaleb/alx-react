import { Map } from 'immutable';
import { getCourses } from './courseSelector';

describe('Course Selector', () => {
  it('should return an empty List if no courses are available', () => {
    const state = {
      courses: Map({}),
    };

    const selectedCourses = getCourses(state);
    expect(selectedCourses.size).toBe(0);
  });

  it('should return a List of courses', () => {
    const state = {
      courses: Map({
        1: { id: 1, title: 'Course 1' },
        2: { id: 2, title: 'Course 2' },
      }),
    };

    const selectedCourses = getCourses(state);
    expect(selectedCourses.size).toBe(2);
    expect(selectedCourses.getIn([0, 'title'])).toBe('Course 1');
    expect(selectedCourses.getIn([1, 'title'])).toBe('Course 2');
  });
});
