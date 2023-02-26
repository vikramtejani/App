import React from 'react'
import './adminorder.css'
import { Link } from "react-router-dom";
import vector from './../../Assets/Vector.png'
import list_alt from './../../Assets/list_alt.png'
import img from './../../Assets/Ellipse 4.png'


export default function adminorder() {
    return (

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
                <h2 className='orders'>Orders</h2>
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
                <div >
                    <select className='change-status'>
                        <option>Fruit</option>
                        <option>chicken</option>
                        <option>vegetable</option>
                    </select>
                </div>

                <div className='line3'>
                    <p></p>
                </div>

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
                <div >
                    <select className='change-status'>
                        <option>Fruit</option>
                        <option>chicken</option>
                        <option>vegetable</option>
                    </select>
                </div>
                <div className='line3'>
                    <p></p>
                </div>

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
                <div >
                    <select className='change-status'>
                        <option>Fruit</option>
                        <option>chicken</option>
                        <option>vegetable</option>
                    </select>
                </div>
                <div className='line3'>
                    <p></p>
                </div>

                
            </div>

        </div>

    )
}
