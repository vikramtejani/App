import React from "react";
import { NavLink } from "react-router-dom";


const Btn = () => {
    console.log('jfsf')
}

const Getstarted = () => {
    return (
        <>  
            <div style={{textAlign:"center"}} >
            <img style={{ marginTop:'39px' ,height:'330px', width:'450px', borderRadius:'30px' }}  src="https://yt3.ggpht.com/a/AGF-l79HZRHG7b5qCRn9np742LMt2hpX5qVPQ7SvyA=s900-mo-c-c0xffffffff-rj-k-no" />

            <h1 style={{color:"green", fontSize:'30px'}}>SAYALNI WELFARE</h1>
            <h3 style={{color:"green", fontSize:'30px'}}>ONLINE DISCOUNT STORE</h3>
            </div>
            <div className="btn" style={{textAlign:"center"}} >
            <button style={{backgroundColor: "green", color:"white",border:'1px solid green', borderRadius:'10px',  fontSize:'30px'}}  
            onClick={Btn}><NavLink to="/Login"></NavLink> Get Started</button>
            </div>
            
        </>
    )
}

export default Getstarted;