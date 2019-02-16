import React from 'react'
import { NavLink } from "react-router-dom";

import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-items">
            <NavLink to="/application">Låna pengar</NavLink>
            <NavLink to="/landingpage">Mina låneansökningar</NavLink>
            <NavLink to="/info">Om oss</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </div>
    );
}

export default Navigation
