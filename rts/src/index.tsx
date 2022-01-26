import React from 'react';
import ReactDOM from 'react-dom';
import { GuestList } from './state/GuestList';
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
