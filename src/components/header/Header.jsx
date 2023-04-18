import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="container-header">
      <header>
        <Link to="/">
          <img src="#" alt="Logo" />
        </Link>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Texto1</Link>
          </li>
          <li>
            <Link to="/">Texto2</Link>
          </li>
          <li>
            <Link to="/">Texto3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
