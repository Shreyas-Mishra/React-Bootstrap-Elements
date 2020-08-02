import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav1 from './nav1/nav1';
import Nav2 from './nav2/nav2';
import Nav3 from './nav3/nav3';

function App() {
  return (
    <div className="App">
      <Nav1 />
      <br />
      <Nav2 />
      <br />
      <Nav3 />
    </div>
  );
}

export default App;
