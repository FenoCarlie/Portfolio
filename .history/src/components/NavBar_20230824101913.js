import React from "react";
import { Link, NavLink } from 'react-router-dom';
import navIcon1 from '../img&logo/nav-icon1.svg';
import navIcon2 from '../img&logo/nav-icon2.svg';
import navIcon3 from '../img&logo/github (1).svg';

function Nav() {
    return (
        <nav className="my_container">
            <div className="logo">
                <Link to="/">
                    <span className="typo">Feno C</span>
                    <span className="point">.</span>
                </Link>
            </div>
            <div className="parent-link">
                <NavLink className="social-link" aria-current="page" exact to="/">Home</NavLink>
                <NavLink className="social-link" to="/about">About me</NavLink>
                <NavLink className="social-link" to="/project">Project</NavLink>
                <NavLink className="social-link" to="/contact">Contact</NavLink>
            </div>
            <span className="navbar-text">
                <div className="social-icon svg-container">
                    <a href="https://www.linkedin.com/in/carlie-feno-516063240/" className="">
                        <img src={navIcon1} alt="" />
                    </a>
                    <a href="https://www.facebook.com/aidane.feno" className="">
                        <img src={navIcon2} alt="" />
                    </a>
                    <a href="https://github.com/FenoCarlie"  className="">
                        <img src={navIcon3} alt="" />
                    </a>
                </div>
            </span>
        </nav>
    )
}

export default Nav;