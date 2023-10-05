import courseReducer from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

import { List, Map } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const initialState = List([]);
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const courses = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
      },
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    };

    const normalizedData = coursesNormalizer(courses);

    const expectedState = List(
      normalizedData.result.map((id) => Map(normalizedData.entities.courses[id]))
    );

    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = List([
      Map({
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: false,
      }),
      Map({
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false,
      }),
    ]);

    const action = {
      type: SELECT_COURSE,
      id: 1,
    };

    const expectedState = List([
      Map({
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: true, 
      }),
      Map({
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false,
      }),
    ]);

    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = List([
      Map({
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: true,
      }),
      Map({
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false,
      }),
    ]);

    const action = {
      type: UNSELECT_COURSE,
      id: 1,
    };

    const expectedState = List([
      Map({
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: false, 
      }),
      Map({
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false,
      }),
    ]);

    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
