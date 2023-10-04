import { FETCH_COURSES_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  courses: [],
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return state.set('courses', action.payload);
    default:
      return state;
  }
};

export default courseReducer;
