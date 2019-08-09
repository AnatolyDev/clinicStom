import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Content}/>
      </Switch>
    </div>
  );
}

export default App;
