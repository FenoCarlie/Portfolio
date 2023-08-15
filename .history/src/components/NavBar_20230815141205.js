import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../img&logo/nav-icon1.svg';
import navIcon2 from '../img&logo/nav-icon2.svg';
import navIcon3 from '../img&logo/github (1).svg';
import { HashLink } from 'react-router-hash-link';
import {
BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

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
    <nav className="container">
        <div className="logo">
            <Nav.Link href="/">
                <span className="typo">Feno C</span>
                <span className="point">.</span>
            </Nav.Link>
        </div>
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="parent-link">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'social-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'social-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'social-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </div>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="/"><img src={navIcon1} alt="" /></a>
                            <a href="/"><img src={navIcon2} alt="" /></a>
                            <a href="/"><img src={navIcon3} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    </nav>
)
}