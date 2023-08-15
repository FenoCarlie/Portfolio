import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Nav() {
    return (
        <nav className="navbar  navbar-expand-lg bg-dark navbar-dark">
            <a className="navbar-brand" href="/">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About me</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/project">Project</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;