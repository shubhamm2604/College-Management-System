import React from 'react';
import ReactDOM from 'react-dom';
import Faculty from './Faculty';

it('Faculty renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Faculty />, div);
});