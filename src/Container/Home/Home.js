import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaUserAlt } from 'react-icons/fa';
import CartIcon from "./../../Assets/Carticon.png"
import Grocery from "./../../Assets/Grocery.png"
import Product1 from "./../../Assets/product1.png"
import "./home.css"
function Home() {
    return (
        <div>
            <div className="home-header">
                <div>
                    <h1 className="primary-text">SAYLANI WELFARE</h1>
                    <h4 className="secondary-text">DISCOUNT STORE</h4>
                </div>
                <div>
                    <img src={CartIcon} />
                </div>
            </div>
            <div style={{ padding: '1%' }}>
                <img src={Grocery} width="100%" height="500px" style={{ borderRadius: '20px' }} />
            </div>


            <div style={{ padding: '1%', maxWidth: '700px', margin: "0 auto" }}>
                <input type="text" placeholder="Search by product name" className='searchinput' />
                <div className="card">
                    <div>
                        <img src={Product1} />
                    </div>
                    <div>
                        <div className='cardheader'>
                            <p className='cardtitle'>
                                Meat
                            </p>

                            <p className='cardtitle'>Rs.800 - per Kg</p>
                        </div>
                        <div className='cardbody'>
                            <p className='carddesc'>This is product description This is abc product description</p>
                            <button className='cardbtn'>+</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={Product1} />
                    </div>
                    <div>
                        <div className='cardheader'>
                            <p className='cardtitle'>
                                Meat
                            </p>

                            <p className='cardtitle'>Rs.800 - per Kg</p>
                        </div>
                        <div className='cardbody'>
                            <p className='carddesc'>This is product description This is abc product description</p>
                            <button className='cardbtn'>+</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img src={Product1} />
                    </div>
                    <div>
                        <div className='cardheader'>
                            <p className='cardtitle'>
                                Meat
                            </p>

                            <p className='cardtitle'>Rs.800 - per Kg</p>
                        </div>
                        <div className='cardbody'>
                            <p className='carddesc'>This is product description This is abc product description</p>
                            <button className='cardbtn'>+</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={Product1} />
                    </div>
                    <div>
                        <div className='cardheader'>
                            <p className='cardtitle'>
                                Meat
                            </p>

                            <p className='cardtitle'>Rs.800 - per Kg</p>
                        </div>
                        <div className='cardbody'>
                            <p className='carddesc'>This is product description This is abc product description</p>
                            <button className='cardbtn'>+</button>
                        </div>
                    </div>
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