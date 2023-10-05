import { createSelector } from 'reselect';
import { Map } from 'immutable';

// Select the course entities from the reducer state
const selectCourses = (state) => state.courses;

export const getCourses = createSelector(
  [selectCourses],
  (courses) => {
    return courses.valueSeq().toList();
  }
);
