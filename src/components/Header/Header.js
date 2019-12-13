import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to="">Home</Link>
            <Link to="About">About</Link>
            <Link to="Portfolio">Portfolio</Link>
            <Link to="Blog">Blog</Link>
        </div>
    );
}

export default Header;
