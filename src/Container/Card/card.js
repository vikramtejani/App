import React from 'react'
import './card.css'
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaUserAlt } from 'react-icons/fa';


export default function card() {
    return (
        <div>Card
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
    )
}
