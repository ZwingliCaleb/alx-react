import { Map, List } from 'immutable'; // Import Map and List from Immutable.js
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

const initialState = Map({
  courses: List(), // Initialize courses as an Immutable List
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data with coursesNormalizer and merge it with the state
      return state.mergeIn(['courses'], coursesNormalizer(action.data));

    case SELECT_COURSE:
      // Use updateIn to update the isSelected value of the course
      return state.updateIn(['courses', action.index, 'isSelected'], () => true);

    case UNSELECT_COURSE:
      // Use updateIn to update the isSelected value of the course
      return state.updateIn(['courses', action.index, 'isSelected'], () => false);

    default:
      return state;
  }
};

export default courseReducer;
