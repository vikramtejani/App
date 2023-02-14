import React from 'react';
import './index.css';
import Getstarted from './Container/GetStarted/Getstarted';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Container/Login/Login';
import Signup from './Container/SignUp/Signup';
import Home from './Container/Home/Home';
import Cart from './Container/Cart/Cart';
import Account from './Container/Account/Account';
import AdminHome from './Container/AdminHome/AdminHome';



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
                    <Route path="/account" element={<Account />} />
                    <Route path="/adminHome" element={<AdminHome />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}
export default App;