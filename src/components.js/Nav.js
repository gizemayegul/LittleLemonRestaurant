

import { Link } from "react-router-dom";
import React from 'react';
import logo from './asset/Logos.svg'


const Nav = (props) => {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    return (<>
        <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-list">
                    <ul className="navbar-list-ul">
                        <li><Link to="/home" onClick={(e) => handleNavClick(e, '#home')} >Home</Link></li>
                        <li><Link to="/about" onClick={(e) => handleNavClick(e, '#about')}>About</Link></li>
                        <li><Link to="/menu"  onClick={(e) => handleNavClick(e, '#cards')}>Menu</Link></li>
                        <li><Link to="/booking" onClick={(e) => handleNavClick(e, '#reservation')}>Reservation</Link></li>
                        <li><Link to="/orderonline" onClick={(e) => handleNavClick(e, '#order')}>Order</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                    </ul>
                </div>
        </nav>
    </>
    );


};

export default Nav;