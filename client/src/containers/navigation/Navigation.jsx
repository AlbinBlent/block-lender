import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/admin">Admin</NavLink>
            <br />
            <NavLink to="/application">Application</NavLink>
            <br />
            <NavLink to="/info">Info</NavLink>
            <br />
            <NavLink to="/landingpage">LandingPage</NavLink>
        </div>
    );
}

export default Navigation;
