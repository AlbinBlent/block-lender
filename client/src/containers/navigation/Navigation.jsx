import React from 'react'
import { NavLink } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-items">
            <NavLink to="/admin">Admin</NavLink>
            <NavLink to="/application">Application</NavLink>
            <NavLink to="/info">Info</NavLink>
            <NavLink to="/landingpage">LandingPage</NavLink>
        </div>
    );
}

export default Navigation
