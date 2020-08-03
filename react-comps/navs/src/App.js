import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav1 from './nav1/nav1';
import { Route, Switch } from 'react-router-dom';
import Page1 from './Pages/Page1/page1';
import Page2 from './Pages/Page2/page2';
import Home from './Pages/Home/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/page1' component={Page1} />
        <Route exact path='/page2' component={Page2} />
      </Switch>
    </div>
  );
}

export default App;
