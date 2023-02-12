import React from 'react';
import './index.css';
import Getstarted from './Container/Getstarted';
import ProductList from './Component/ProductList.';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Container/Login';
import Signup from './Container/Signup';
import Slider from './Component/Slider'
import User from './Component/User';
import Product from './Component/Card';


    
const App = () => {
    return (
        <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Getstarted />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Slider" element={<Slider/>} />

            </Routes>
    </BrowserRouter>
        
        </>
    );
}
export default App;