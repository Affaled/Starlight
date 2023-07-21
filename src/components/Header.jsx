import React from "react";
import icon from "../assets/svg/header_icon.svg";
import styles from "../assets/styles/modules/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={icon} alt="logo icon" />
        <div className={styles.text}>
          <h1>STARLIGHT</h1>
          <h2>GEEK PARTY</h2>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
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
