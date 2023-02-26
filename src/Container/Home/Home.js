import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaCartArrowDown, FaUserAlt } from 'react-icons/fa';
import CartIcon from "./../../Assets/Carticon.png"
import Grocery from "./../../Assets/Grocery.png"
import Product1 from "./../../Assets/product1.png"
import product3 from "./../../Assets/product3.png"
import product4 from "./../../Assets/product4.png"

import "./home.css"
function Home() {

    const productData = [
        {
            name: 'Meat',
            price: '800',
            description: 'cy df jkld fjdklfjklafja hdflk  jkljdkl fjdklj'
        },
        {
            name: 'Meat3',
            price: '800',
            description: 'cy df jkld fjdklfjklafja hdflk  jkljdkl fjdklj'
        },
        {
            name: 'Meat4',
            price: '800',
            description: 'cy df jkld fjdklfjklafja hdflk  jkljdkl fjdklj'
        }
    ]

    const data = useRef();
    const handleClick = () => {
        // console.log(data.current.value,'Meat')

    }
    return (
        <div>
            <div className="home-header">
                <div>
                    <h1 className="primary-text">SAYLANI WELFARE</h1>
                    <h4 className="secondary-text">DISCOUNT STORE</h4>
                </div>
                <div><Link to="/card" className="tab-link">
                    <img src={CartIcon} size={40} />
                </Link>

                </div>
            </div>
            <div style={{ padding: '1%' }}>
                <img src={Grocery} width="100%" height="500px" style={{ borderRadius: '20px' }} />
            </div>
            <div style={{ padding: '1%', maxWidth: '700px', margin: "0 auto" }}>
                <input type="text" placeholder="Search by product name" className='searchinput' />

                {
                    productData.map((v, i) => {
                        return <div className="card">
                            <div>
                                <img className='item-name' src={Product1} />
                            </div>
                            <div>
                                <div className='cardheader'>
                                    <p className='cardtitle'> {v.name} </p>
                                    <p className='cardtitle'>Rs.{v.price} - per Kg</p>
                                </div>
                                <div className='cardbody'>
                                    <p className='carddesc'>
                                        {v.description}
                                        </p>
                                    <button className='cardbtn' onClick={()=> console.log(v)}>+</button>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className="card">
                    <div>
                        <img className='item-name' src={Product1} />
                    </div>
                    <div>
                        <div className='cardheader'>
                            <p className='cardtitle'> Meat </p>
                            <p className='cardtitle'>Rs.800 - per Kg</p>
                        </div>
                        <div className='cardbody'>
                            <p className='carddesc'>This is product description This is abc product description</p>
                            <button className='cardbtn' onClick={handleClick} ref={data}>+</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <img className='item-name' src={product3} />
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
                        <img className='item-name' src={Product1} />
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
                        <img className='item-name' src={product4} />
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