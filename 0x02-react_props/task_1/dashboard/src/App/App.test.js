import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import '../../config/setupTests'

describe('<App />', () => {
  it('renders without crashing', () => {
      shallow(<App />)
  });
})
