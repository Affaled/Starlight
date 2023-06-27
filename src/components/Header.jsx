import React from "react";
import Star from "../assets/icons/star.svg";
import "../assets/styles/Header.css";
import "../assets/styles/Header-navbar.css";

export default function Header() {
  return (
    <div className="Header_container">
      <div className="Logo_container">
        <img src={Star} alt="logo" />
        <h1>Starlight</h1>
      </div>
      <nav className="Navbar_container">
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">GALERY</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
