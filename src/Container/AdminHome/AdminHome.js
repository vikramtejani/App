import React from 'react'
import "./adminHome.css"
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import vector from './../../Assets/Vector.png'
import list_alt from './../../Assets/list_alt.png'
import img from './../../Assets/Ellipse 4.png'
import chicken from './../../Assets/product1.png'





export default function AdminHome() {
  return (
    <div>

      <div style={{ padding: '1%', maxWidth: '1180px', margin: "0 auto" }}>
        <div className='header'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 60px' }} >
            <img src={vector} />
            <img src={img} />
            <div>
              <h3 className='name'>Vikram Kumar</h3>
              <h4 className='status'>Admin</h4>
            </div>
          </div>
          <img src={list_alt} style={{ padding: '0 60px' }} />
        </div>
        <div className='main-line'>
          <p></p>
        </div>
        <div >
          <h2 className='product'>All Products</h2>
        </div>
        {/* 6 */}
          <div className='product1'>
            <img src={chicken} />
            <div className='prodt'>
              <p className='item-name'>chicken</p>
              <p className='item-par-kg'>1. kg</p>
            </div>
            <p className='total'>$3.1</p>
          </div>
          {/* 7 */}
          <div className='product1'>
            <img src={chicken} />
            <div className='prodt'>
              <p className='item-name'>chicken</p>
              <p className='item-par-kg'>1. kg</p>
            </div>
            <p className='total'>$3.1</p>
          </div>
          {/* 8 */}
          <div className='product1'>
            <img src={chicken} />
            <div className='prodt'>
              <p className='item-name'>chicken</p>
              <p className='item-par-kg'>1. kg</p>
            </div>
            <p className='total'>$3.1</p>
          </div>
          {/* 9 */}
          <div className='product1'>
            <img src={chicken} />
            <div className='prodt'>
              <p className='item-name'>chicken</p>
              <p className='item-par-kg'>1. kg</p>
            </div>
            <p className='total'>$3.1</p>
          </div>
          {/* 10 */}
          <div className='product1'>
            <img src={chicken} />
            <div className='prodt'>
              <p className='item-name'>chicken</p>
              <p className='item-par-kg'>1. kg</p>
            </div>
            <p className='total'>$3.1</p>
          </div>
      </div>





      <div className="tabs">
        <Link to="/adminHome" className="tab-link">
          <FaHome size={40} />
          Home</Link>
        <Link to="/addItem" className="tab-link">
          <FaCartArrowDown size={40} />
          Add Item</Link>
        <Link to="/adminaccount" className="tab-link">
          <AiFillPlusCircle size={40} />
          Account</Link>
      </div>
    </div>
  )
}

