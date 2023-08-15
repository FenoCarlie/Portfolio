import React from "react";
import { Link, NavLink } from 'react-router-dom'; 

function Nav() {
    return (
        <nav className="container">
            <div className="logo-box">
                <Link className="logo" to="/" target="_blank"><span className="point">.</span></Link>
            </div>
            <div className="" id="navbar-Nav">
                <ul className="">
                    <li className="">
                    <NavLink className="navlink" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="">
                    <NavLink className="navlink" to="/about">About me</NavLink>
                    </li>
                    <li className="">
                    <NavLink className="navlink" to="/project">Project</NavLink>
                    </li>
                    <li className="">
                    <NavLink className="navlink" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;