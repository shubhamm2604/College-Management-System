import React from 'react';
import ReactDOM from 'react-dom';
import Homeacc from './Homeacc';

it('Homeacc renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homeacc />, div);
});