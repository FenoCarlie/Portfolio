import React from "react";
import { Link, NavLink } from 'react-router-dom'; 

function Nav() {
    return (
        <nav className="container">
            <div>
                <Link className="logo" to="/">Feno C<span className="point">.</span></Link>
            </div>
            <div className="parent-link">
                <NavLink className="navlink" aria-current="page" to="/">Home</NavLink>
                <NavLink className="navlink" to="/about">About me</NavLink>
                <NavLink className="navlink" to="/project">Project</NavLink>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
                <ul className="">
                    <li className="">
                    
                    </li>
                    <li className="">
                    
                    </li>
                    <li className="">
                    
                    </li>
                    <li className="">
                    
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;