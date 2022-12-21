import React from "react";
import "./Header.css";
import PetsIcon from "@mui/icons-material/Pets";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EventIcon from "@mui/icons-material/Event";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
      <div className="header">
        <img
          src="https://www.fiveacresanimalshelter.org/wp-content/uploads/2016/12/FA_logo_web.png"
          alt="five-acres-logo"
        />
        
        <ul className="nav_bar">
          <li className="nav_bar_item">About</li>
          <li className="nav_bar_item">Shop</li>
          <li className="nav_bar_item">Blog</li>
          <li className="nav_bar_item">Contact Us</li>
        </ul>
        {/*  */}
        <div className="header_dropdown">
          <button className="dropButton">
            <MenuIcon className="menu-icon"/>
          </button>
          <div className="dropdown-content">
            <a href="" className="dropdown-item">About</a>
            <a href="" className="dropdown-item">Shop</a>
            <a href="" className="dropdown-item">Blog</a>
            <a href="" className="dropdown-item">Contact Us</a>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="subheader">
        <div className="subheader_flexContainer">
          <div className="subheader_Container subheader_adoptContainer">
            <PetsIcon className="subheader_icon" />
            <h2 className="subheader__title">adopt</h2>
          </div>
          <div className="subheader_Container subheader_volunteerContainer">
            <VolunteerActivismIcon className="subheader_icon" />
            <h2 className="subheader__title">volunteer</h2>
          </div>
          <div className="subheader_Container subheader_donateContainer">
            <MonetizationOnIcon className="subheader_icon" />
            <h2 className="subheader__title">donate</h2>
          </div>
          <div className="subheader_Container subheader_eventsContainer">
            <EventIcon className="subheader_icon" />
            <h2 className="subheader__title">events</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
