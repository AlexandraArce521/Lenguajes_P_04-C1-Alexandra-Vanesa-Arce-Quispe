import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="logo">MiSitio</div>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
        </ul>
      </nav>
      
        <button
        className="header-button"
        onClick={() => alert("Hola Mundo!")}
        >
        Click
        </button>

    </header>
  );
}
export default Header;