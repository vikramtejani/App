import React from 'react'
import "./adminHome.css"
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaUserAlt } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';

export default function AdminHome() {
  return (
    <div>
      <div>
        <div className="tabs">
          <Link to="/home" className="tab-link">
            <FaHome size={40} />
            Home</Link>
          <Link to="/addItem" className="tab-link">
            <FaCartArrowDown size={40} />
            Add Item</Link>
          <Link to="/account" className="tab-link">
            <AiFillPlusCircle size={40} />
            Account</Link>
        </div>
      </div>
    </div>
  )
}

