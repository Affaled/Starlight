import React from "react";
import background from "../assets/images/home_background.png";

export default function Home() {
  return (
    <main>
      <img src={background} alt="home background" />
      <div className="text_container">
        <div>
          <h2>Bem-Vindo a</h2>
          <h1>STARLIGHT</h1>
        </div>
        <p>
          Entre no universo da <span className="primary">Starlight</span> e
          sinta a temperatura <span className="secondary">subir</span>! Uma
          festa intensa como uma <span className="secondary">supernova</span>{" "}
          onde as bebidas são explosões de sabor e a energia é{" "}
          <span className="secondary">eletrizante</span>!
        </p>
      </div>
    </main>
  );
}
