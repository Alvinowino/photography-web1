import React from 'react';
import './Navbar.css';

import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Photography<span>Website</span></a>
            </div>
            <ul className="navbarlinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="gallery">Gallery</Link></li>
                <li><Link to="services">Service</Link></li>
                <li><Link to="contacts">Contacts</Link></li>
            </ul>
            <Outlet />
        </nav>
    );
}
export default Navbar;