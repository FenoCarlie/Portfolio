import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Nav() {
    return (
        <nav className="container">
            <span className="">
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
            </span>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/carlie-feno-516063240/" className="sm-icon">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.facebook.com/aidane.feno" className="sm-icon">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                    <a href="https://github.com/FenoCarlie"  className="sm-icon">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                </div>
            </span>
        </nav>
    )
}

export default Nav;
