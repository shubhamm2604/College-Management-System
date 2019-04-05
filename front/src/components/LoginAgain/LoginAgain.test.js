import React from 'react';
import ReactDOM from 'react-dom';
import LoginAgain from './LoginAgain';

it('LoginAgain renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginAgain />, div);
});