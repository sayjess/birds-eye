import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css'
import logo from '../../images/logo.png'

const Logo = () => {
    return (
            <Tilt className="logo-container">
                <img  className="logo" src={logo} alt="logo"/>
            </Tilt>
    )
}

export default Logo;