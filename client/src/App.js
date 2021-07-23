import './App.css';
import React from 'react'
import Create from './components/Create';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <Create path="/product/create" />
        <AllProducts path="/" />
        <ProductDetails path="/product/detail/:productId" />
        <EditProduct path="/product/edit/:productId" />
      </Router>
    </div>
  );
}

export default App;
