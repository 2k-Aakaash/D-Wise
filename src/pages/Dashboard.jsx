// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import MainContent from '../components/MainContent/MainContent';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content">
                <Navbar />
                <MainContent />
            </div>
        </div>
    );
};

export default Dashboard;
