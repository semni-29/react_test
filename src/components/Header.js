import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Header.css";

const MenuItem = ({ active, children, to }) => (
  <Link to={to} className="menu-item">
    {children}
  </Link>
);

const Header = () => {
  return (
    <div>
      <div className="logo">Go back home</div>
      <div className="menu">
        <MenuItem to={"/"}>홈</MenuItem>
        <MenuItem to={"/about"}>소개</MenuItem>
        {/* <MenuItem to={"/picture"}>사진</MenuItem> */}
        <MenuItem to={"/fileupload"}>사진</MenuItem>
      </div>
    </div>
  );
};

export default Header;
