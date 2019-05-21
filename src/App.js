import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </div>
  );
}

export default App;
