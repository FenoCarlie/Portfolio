import React from "react";
import { NavLink } from 'react-router-dom';

function MinNav() {
    return (
        <nav>
            <div className="parent-link">
                <NavLink className="social-link" to="/Description">Description</NavLink>
                <NavLink className="social-link" to="/Skill">Skill</NavLink>
            </div>
        </nav>
    )
}

export default MinNav;