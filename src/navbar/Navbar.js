import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
      
            <div className="container">
    <div className="logo">
        <a href="#help">
        <img src={process.env.PUBLIC_URL+"images/logo.png"} alt="logo"/></a>
    </div>
</div>
       
    )
}


export default Navbar;