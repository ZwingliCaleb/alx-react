import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCourses, SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionCreators';
import { FETCH_COURSE_SUCCESS as FETCH_COURSE_SUCCESS_TYPE } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  it('creates FETCH_COURSE_SUCCESS when fetching courses has been done', () => {
    const apiURL = '/api/courses';
    const responseData = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(responseData),
      })
    );

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS_TYPE, data: responseData },
      { type: SELECT_COURSE, index: 1 },
    ];

    const store = mockStore({});

    return store.dispatch(fetchCourses(apiURL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
