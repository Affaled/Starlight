import React from "react";
import icon from "../assets/svg/header_icon.svg";

export default function Header() {
  return (
    <header>
      <div className="logo_container">
        <img src={icon} alt="logo icon" />
        <div>
          <h1>STARLIGHT</h1>
          <h2>GEEK PARTY</h2>
        </div>
      </div>
      <nav className="nav_container">
        <ul>
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <li>NOVIDADES</li>
          <li>GALERIA</li>
          <li>LOJA</li>
          <li>CONTATO</li>
        </ul>
      </nav>
    </header>
  );
}
