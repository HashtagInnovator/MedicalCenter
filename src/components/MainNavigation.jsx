// MainNavigation.jsx

import React, { useState } from "react";
import "./MainNavigation.css";
import Medifylogo from "../asset/medify.png";
import { Link, useNavigate } from "react-router-dom";
import menu from "../asset/menu.svg";
import close from "../asset/close.svg";

const MainNavigation = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="main-header">
      <Link to="/" className="logo-link">
        <img src={Medifylogo} alt="Logo" />
      </Link>
      {sidebarOpen ? (
        <nav className="sidebar">
          <img
            className="close-icon"
            src={close}
            alt="Close"
            onClick={handleSidebarToggle}
          />
          <Link to="/findDoctor" className="sidebar-link">
            Find Doctors
          </Link>
          <Link to="/hospitals" className="sidebar-link">
            Hospitals
          </Link>
          <Link to="/medicines" className="sidebar-link">
            Medicines
          </Link>
          <Link to="/surgeries" className="sidebar-link">
            Surgeries
          </Link>
          <Link to="/softwareProvider" className="sidebar-link">
            Software for Provider
          </Link>
          <Link to="/facilities" className="sidebar-link">
            Facilities
          </Link>
          <button
            className="sidebar-button"
            onClick={() => {
              navigate("/myBookings");
            }}
          >
            My Bookings
          </button>
        </nav>
      ) : (
        <nav className="main-nav">
          <Link to="/findDoctor" className="nav-link">
            Find Doctors
          </Link>
          <Link to="/hospitals" className="nav-link">
            Hospitals
          </Link>
          <Link to="/medicines" className="nav-link">
            Medicines
          </Link>
          <Link to="/surgeries" className="nav-link">
            Surgeries
          </Link>
          <Link to="/softwareProvider" className="nav-link">
            Software for Provider
          </Link>
          <Link to="/facilities" className="nav-link">
            Facilities
          </Link>
          <button
            className="nav-button"
            onClick={() => {
              navigate("/myBookings");
            }}
          >
            My Bookings
          </button>
        </nav>
      )}

      <img
        className="menu-icon"
        src={menu}
        alt="Menu"
        onClick={handleSidebarToggle}
      />
    </header>
  );
};

export default MainNavigation;
