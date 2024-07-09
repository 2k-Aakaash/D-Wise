// src/components/Navbar/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <input type="text" placeholder="Search across the D Wise..." className="search-input" />
            <div className="icons">
                <span className="icon">🔔</span>
                <span className="icon">👤</span>
            </div>
        </nav>
    );
};

export default Navbar;
