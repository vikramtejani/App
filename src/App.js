import React from 'react';
import './index.css';
import Getstarted from './Container/GetStarted/Getstarted';
import ProductList from './Component/ProductList.';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Container/Login/Login';
import Signup from './Container/SignUp/Signup';
import Home from './Container/Home/Home';
import Cart from './Container/Cart/Cart';
import Slider from './Component/Slider'
import User from './Component/User';
import Product from './Component/Card';



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Getstarted />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/slider" element={<Slider />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}
export default App;