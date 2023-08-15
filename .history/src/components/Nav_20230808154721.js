import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link, NavLink } from 'react-router-dom'; 

function Nav() {
    return (
        <nav className="my_navbar">
            <Link className="" to="/">Feno C.</Link>
            <div className="" id="navbarNav">
                <ul className="">
                    <li className="">
                    <NavLink className="" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="">
                    <NavLink className="" to="/about">About me</NavLink>
                    </li>
                    <li className="">
                    <NavLink className="" to="/project">Project</NavLink>
                    </li>
                    <li className="">
                    <NavLink className="" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;