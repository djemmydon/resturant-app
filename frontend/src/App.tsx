import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';


function App() {
  return (
    <div className="App font-myFont">
      <BrowserRouter>
      
        {/* <Navbar /> */}
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin/addproduct' element={<Admin />}/>
        </Routes>
      
       
        </BrowserRouter>
    </div>
  );
}

export default App;
