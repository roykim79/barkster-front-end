import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/Landing'
import DogPark from './components/DogPark'

function App() {
  return (
    <div>
      <header>
        <span className="header">Barkster</span>
      </header>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/:id" component={DogPark} />
      </BrowserRouter>
    </div>
  );
}

export default App;
