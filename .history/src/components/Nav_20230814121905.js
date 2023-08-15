import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="container">
            <div>
                <Link className="logo" to="/">Feno C<span className="point">.</span></Link>
            </div>
            <div className="parent-link">
                <NavLink className="social-link" aria-current="page" to="/">Home</NavLink>
                <NavLink className="social-link" to="/about">About me</NavLink>
                <NavLink className="social-link" to="/project">Project</NavLink>
                <NavLink className="social-link" to="/contact">Contact</NavLink>
            </div>
            <div className="icon">
            
            </div>
        </nav>
    )
}

export default Nav;