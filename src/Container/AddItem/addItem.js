import React from 'react'
import "./style.css"
import vector from './../../Assets/Vector.png'
import list_alt from './../../Assets/list_alt.png'
import img from './../../Assets/Ellipse 4.png'
//import uploadImg from './../../Assets/Rectangle 71.png'
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';


export default function addItem() {
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
                    <h2 className='product'>Add New Item</h2>
                </div>
                <div className='new-item-add'>
                    <input className='file' type='file' />
                    <input className='text' type='text' placeholder='Item Name' />
                    <select className='option'>
                        <option>Vegetable</option>
                        <option>Firut</option>
                        <option>chicken</option>
                    </select>
                    <input className='describe' type='text' placeholder='Describe this item' />
                    <div className='unit'>
                        <label className='label'>Unit Name:
                            <input className='unitinput' type='text' placeholder='Pcs. / Kg / dozen' />
                        </label>
                        <label className='label'>Unit Price:
                            <input className='unitinput' type='text' placeholder='Price' />
                        </label>
                    </div>
                    <button className='btn'>ADD PRODUCT</button>
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
