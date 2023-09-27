import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Map the courses from action.data and set isSelected to false
      const courses = action.data.map(course => ({
        ...course,
        isSelected: false,
      }));
      return courses;

    case SELECT_COURSE:
      return state.map(course => {
        if (course.id === action.id) {
          return {
            ...course,
            isSelected: true,
          };
        }
        return course;
      });

    case UNSELECT_COURSE:
      return state.map(course => {
        if (course.id === action.id) {
          return {
            ...course,
            isSelected: false,
          };
        }
        return course;
      });

    default:
      return state;
  }
};

export default courseReducer;
