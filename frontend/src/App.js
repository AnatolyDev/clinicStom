import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
