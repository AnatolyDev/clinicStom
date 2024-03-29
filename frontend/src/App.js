import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Reception from './Components/Reception';
import Doctors from './Components/Doctors';
import Doctor from './Components/Doctor';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/doctors' exact component={Doctors} />
        <Route path='/doctors/:id' component={Doctor} />
        <Route path='/reception' component={Reception} />
      </Switch>
    </div>
  );
}

export default App;
