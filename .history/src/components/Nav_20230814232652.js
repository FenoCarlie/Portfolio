/*import React from "react";
import { Link, NavLink } from 'react-router-dom';
import navIcon1 from '../img&logo/nav-icon1.svg';
import navIcon2 from '../img&logo/nav-icon2.svg';
import navIcon3 from '../img&logo/github (1).svg';

function Nav() {
    return (
        <nav className="container">
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
                <div className="social-icon">
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
*/


import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../img&logo/nav-icon1.svg';
import navIcon2 from '../img&logo/nav-icon2.svg';
import navIcon3 from '../img&logo/github (1).svg';
import {
BrowserRouter as Router
} from "react-router-dom";

export const Nav = () => {

const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const onScroll = () => {
    if (window.scrollY > 50) {
    setScrolled(true);
    } else {
    setScrolled(false);
    }
}

window.addEventListener("scroll", onScroll);

return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
setActiveLink(value);
}

return (
<Router>
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
            <div className="social-icon">
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
        </Navbar.Collapse>
    </Container>
    </Navbar>
</Router>
)
}
