import React from 'react';
import {Link} from "react-router-dom";

import "./navbar.scss";

import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <div className="navbar">
        <header className="max-width">
            <div className='logo'><span>HanjiCards</span></div>
            <div className="menu">
                <ul>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="about" className='link'>about</Link></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Navbar;