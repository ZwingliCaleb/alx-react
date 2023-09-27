import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS correctly', () => {
    const initialState = [];
    const courses = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    };

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(courses);
  });

  it('should handle SELECT_COURSE correctly', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      id: 1,
    };

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: true,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ]);
  });

  it('should handle UNSELECT_COURSE correctly', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: true,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ];

    const action = {
      type: UNSELECT_COURSE,
      id: 1,
    };

    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
    ]);
  });
});
