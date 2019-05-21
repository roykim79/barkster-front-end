import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing'

function App() {
  return (
    <div>
      <header>
        <span className="header">Barkster</span>
      </header>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
