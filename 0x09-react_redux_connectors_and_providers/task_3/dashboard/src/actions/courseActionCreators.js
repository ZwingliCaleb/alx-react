import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

export const selectCourse = (id) => {
  return {
    type: SELECT_COURSE,
    id,
  };
};

export const unselectCourse = (id) => {
  return {
    type: UNSELECT_COURSE,
    id,
  };
};

export const fetchCourseSuccess = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};

// Bounding action creators
export const boundSelectCourse = (id) => (dispatch) => {
  dispatch(selectCourse(id));
};

export const boundUnSelectCourse = (id) => (dispatch) => {
  dispatch(unselectCourse(id));
};
