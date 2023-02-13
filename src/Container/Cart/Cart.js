import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaUserAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri'
import CartIcon from "./../../Assets/Carticon.png"
import Grocery from "./../../Assets/Grocery.png"
import Product1 from "./../../Assets/product1.png"
import "./cart.css"
function Home() {
    return (
        <div className="tart">
            <div className="home-header">
                <div>
                    <h1 className="secondary-text">Shopping</h1>
                    <h4 className="primary-text">Cart</h4>
                </div>
                <div>
                    <RiDeleteBinFill size={40} color="#65BD50" />
                </div>
            </div>
            <div style={{ padding: '1%', maxWidth: '700px', margin: "0 auto" }}>
                <div className="card">
                    <div>
                        <img src={Product1} />
                        
                    </div>
                    <div>
                        <div  className='cardbody'>
                            <p>ITEM NAME</p>
                        <button className='incredecrebtn'>-</button>
                        <p>0</p>
                        <button className='incredecrebtn'>+</button>
                        </div>
                    </div>
                    <div>
                        <div className='cardbody'>
                            
                            <p>$25.00</p>
                        </div>

                    </div>
                </div>

                <div className="order-place">
                <input type="text" placeholder="Full Name" className='text-field' />
                <input type="email" placeholder="Email" className='text-field' />
                <input type="text" placeholder="Phone Number" className='text-field' />
                <input type="text" placeholder=" Shipping Address" className='text-field' />

                <button type="button" className="primary-btn">Place Order</button>
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

export default Home