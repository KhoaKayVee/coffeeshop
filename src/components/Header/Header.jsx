import React from "react";
import Logo from "../../assets/logo.png";
import { links } from "../../Data";
import "./Header.css";
import { FaStream } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          <img className="nav-logo-img" src={Logo} alt="Logo" />
        </a>

        <div className="nav-menu">
          <ul className="nav-list">
            {links.map(({ name, path }, index) => {
              return (
                <li key={index} className="nav-item">
                  <a href={path} className="nav-link">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-toggle">
          <FaStream />
        </div>
      </nav>
    </header>
  );
};

export default Header;
