import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./../../Assets/Logo.png"
import "./getstarted.css"


const Getstarted = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ textAlign: "center" }} >
                <img style={{ marginTop: '39px', height: '330px', width: '450px', borderRadius: '30px' }} src={Logo} />
                <br />
                <br />
                <h1 className="primary-text getstarted-title">SAYALNI WELFARE</h1>
                <br />

                <h4 className="secondary-text">ONLINE DISCOUNT STORE</h4>
            </div>
            <div style={{ textAlign: "center", marginTop: '19px' }} >
                <button className="primary-btn"
                    onClick={() => navigate("/signup")}>
                    Get Started
                </button>
            </div>

        </>
    )
}

export default Getstarted;