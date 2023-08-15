import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link, NavLink } from 'react-router-dom'; 

function Nav() {
    return (
        <nav className="navbar  navbar-expand-lg bg-dark navbar-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About me</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/project">Project</Link>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;