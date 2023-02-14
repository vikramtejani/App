import React from 'react'
import "./account.css"
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaUserAlt } from 'react-icons/fa';
import profile from './../../Assets/Ellipse 4.png'
import { RiDeleteBinFill } from 'react-icons/ri'

const Account = () => {
    return (
        <div>
            <div className='header'>
                <h2>Settings</h2>
            </div>
            <div className='header-img'>
                <img className='profile-img' src={profile} alt='Profile Image' />
                <br /><br />
                <div className='update-name'>
                    <input className='update-name' type='text' placeholder='Update Full Name' />
                    <p className='line'></p>
                </div>
            </div>
            <div className='order'>
                <p>Orders</p>
            </div>
            <div className='order-full-detail'>
                <div className='order-name'>
                    <h3>Vikram Kumar</h3>
                </div>
                <div className='order-detail'>
                    <p>Just Now - Pending</p>
                    <p>03022004480</p>
                </div>

                <div className='item'>
                    <p>2 x ITEM NAME</p>
                    <p>3 x ITEM NAME</p>
                </div>
                <div className="line-total">
                    <h3>Total</h3>
                    <p className='pkr'>4344PKR</p>
                </div>
                <div className='line3'>
                    <p></p>
                </div>
            </div>

            <div className='order-full-detail'>
                <div className='order-name'>
                    <h3>Vikram Kumar</h3>
                </div>
                <div className='order-detail'>
                    <p>Just Now - Pending</p>
                    <p>03022004480</p>
                </div>

                <div className='item'>
                    <p>2 x ITEM NAME</p>
                    <p>3 x ITEM NAME</p>
                </div>
                <div className="line-total">
                    <h3>Total</h3>
                    <p className='pkr'>4344PKR</p>
                </div>
                <div className='line3'>
                    <p></p>
                </div>
            </div>
            <div className='order-full-detail'>
                <div className='order-name'>
                    <h3>Vikram Kumar</h3>
                </div>
                <div className='order-detail'>
                    <p>Just Now - Pending</p>
                    <p>03022004480</p>
                </div>

                <div className='item'>
                    <p>2 x ITEM NAME</p>
                    <p>3 x ITEM NAME</p>
                </div>
                <div className="line-total">
                    <h3>Total</h3>
                    <p className='pkr'>4344PKR</p>
                </div>
                <div className='line3'>
                    <p></p>
                </div>
            </div>
            <div className='order-full-detail'>
                <div className='order-name'>
                    <h3>Vikram Kumar</h3>
                </div>
                <div className='order-detail'>
                    <p>Just Now - Pending</p>
                    <p>03022004480</p>
                </div>

                <div className='item'>
                    <p>2 x ITEM NAME</p>
                    <p>3 x ITEM NAME</p>
                </div>
                <div className="line-total">
                    <h3>Total</h3>
                    <p className='pkr'>4344PKR</p>
                </div>
                <div className='line3'>
                    <p></p>
                </div>
                <div className='logout-btn'>
                    <Link to="/login" className="tab-link">
                     
                        Logout</Link>
                </div>
                <div className="tabs">
                    <Link to="/home" className="tab-link">
                        <FaHome size={40} />
                        Home</Link>
                    <Link to="/cart" className="tab-link">
                        <FaCartArrowDown size={40} />
                        Cart</Link>
                    <Link to="/account" className="tab-link">
                        <FaUserAlt size={40} />
                        Account</Link>
                </div>

            </div>




        </div>

    )
}
export default Account; 