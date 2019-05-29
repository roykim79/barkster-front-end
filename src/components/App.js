import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header'
import Landing from './Landing'
import NewDogPark from './NewDogPark'
import DogPark from './DogPark'

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route path="/parks/new" component={NewDogPark} />
          <Route path="/parks/:id" component={DogPark} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
