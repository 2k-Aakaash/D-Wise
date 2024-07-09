// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1 className="logo">D-Wise</h1>
            <ul className="menu">
                <li className="menu-item active">Dashboard</li>
                <li className="menu-item">Events</li>
                <li className="menu-item">Live Sessions</li>
                <li className="menu-item">Market Place</li>
                <li className="menu-item">Courses</li>
                <li className="menu-item">Resources</li>
                <li className="menu-item">Discussions</li>
            </ul>
            <div className="other">Other</div>
        </div>
    );
};

export default Sidebar;
