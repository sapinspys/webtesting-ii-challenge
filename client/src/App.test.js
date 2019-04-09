import React from 'react';
import ReactDOM from 'react-dom';

// MUST PASS IN APP AS BELOW BECAUSE OF REDUX STORE
import { App } from './App';

import { render } from 'react-testing-library'; 
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(App, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders successfully', () => {
    render(App);
  });
})