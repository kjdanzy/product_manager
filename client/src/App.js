import './App.css';
import React from 'react'
import Create from './components/Create';
import AllProducts from './components/AllProducts';
import { Router} from '@reach/router';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <Create path="/product/create" />
        <AllProducts path="/" />
      </Router>
    </div>
  );
}

export default App;
