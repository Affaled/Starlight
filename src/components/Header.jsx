import React from "react";
import icon from "../assets/svg/header_icon.svg";

export default function Header() {
  return (
    <header>
      <div>
        <img src={icon} alt="logo icon" />
        <div>
          <h1>STARLIGHT</h1>
          <h2>GEEK PARTY</h2>
        </div>
      </div>
      <nav>
        <ul>
          <li>INÍCIO</li>
          <li>SOBRE</li>
          <li>GALERIA</li>
          <li>
            <button>COMPRAR</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
