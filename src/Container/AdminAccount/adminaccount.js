import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import profile from './../../Assets/Ellipse 4.png'
import product from './../../Assets/product1.png'


export default function AdminAccount() {
  return (
    <div >
      <div className='headert'>
        <h2>Settings</h2>
      </div>
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }} >
        <img className='profile-img' src={profile} alt='Profile Image' />
        <br /><br />
        <div className='update-name'>
          <input className='update-name' type='text' placeholder='Update Full Name' />
          <p className='line'></p>
        </div>
        <div>
          <input className='file' type='file' />

        </div>
        <div style={{ padding: 10 }}>
          <input className='unitinput' type='text' placeholder='new category name' />
          <button className='btn-add'>ADD</button>

        </div>
        <div style={{ display: 'flex', 'justifyContent': 'center' }}>
          <div className='allcategorie'>
            <img src={product} />
            <p className='catname'>Fruits</p>
          </div>
        </div>
        <div style={{ display: 'flex', 'justifyContent': 'center' }}>
          <div className='allcategorie'>
            <img src={product} />
            <p className='catname'>Fruits</p>
          </div>
        </div>
        <div style={{ display: 'flex', 'justifyContent': 'center' }}>
          <div className='allcategorie'>
            <img src={product} />
            <p className='catname'>Fruits</p>
          </div>
          
        </div>
        <div className='logout-btn'>
      <Link to="/login" className='btnname'>
        Logout</Link>
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
