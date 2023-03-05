import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateProduct from './pages/Admin/CreateProduct';
import ProductDatails from './pages/ProductDatails';
import Product from './pages/Product';
import Footer from './components/Footer';


function App() {



  return (
    <div className="App relative">
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/admin/addproduct' element={<Admin />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/products/' element={<Product />} />
          <Route path='/products/:id' element={<ProductDatails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
