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
import AddItem from './Container/AddItem/addItem';
import Adminaccount from './Container/AdminAccount/adminaccount';
import AdminOrder from './Container/AdminOrder/adminorder';
import Card from './Container/Card/card';



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
                    <Route path="/addItem" element={<AddItem/>} />
                    <Route path="/adminaccount" element={<Adminaccount/>}/>
                    <Route path="/adminorder" element={<AdminOrder/>}/>
                    <Route path="/card" element={<Card/>}/>
                </Routes>
            </BrowserRouter>

        </>
    );
}
export default App;