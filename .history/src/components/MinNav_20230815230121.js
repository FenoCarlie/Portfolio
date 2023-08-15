import React from "react";
import { NavLink } from 'react-router-dom';

function MinNav() {
    return (
        <nav>
            <div className="parent-link">
                <NavLink className="social-link" aria-current="page" exact to="/">Home</NavLink>
                <NavLink className="social-link" to="/about">About me</NavLink>
                <NavLink className="social-link" to="/project">Project</NavLink>
                <NavLink className="social-link" to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}

export default MinNav;