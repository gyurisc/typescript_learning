import React from 'react';
import ReactDOM from 'react-dom';
import { GuestList } from './state/GuestList';

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
