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

export const setCourses = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('courses.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setCourses(data)); // Dispatch setCourses action with the fetched data
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };
};

// Bounding action creators
export const boundSelectCourse = (id) => (dispatch) => {
  dispatch(selectCourse(id));
};

export const boundUnSelectCourse = (id) => (dispatch) => {
  dispatch(unselectCourse(id));
};
