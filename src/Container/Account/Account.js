import React from 'react'
import "./Account.css"
import { Link } from "react-router-dom";

function Account(){
    return(
        <div>
            <div className='vikram'>
                <h3>vikram</h3>
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
       
    )
}
export default Account