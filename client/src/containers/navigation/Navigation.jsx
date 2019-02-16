import React from 'react'
import { NavLink } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-items">
            <NavLink to="/application">Ansök om lån</NavLink>
            <NavLink to="/landingpage">Mina ansökningar</NavLink>
            <NavLink to="/info">Info</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </div>
    );
}

export default Navigation
