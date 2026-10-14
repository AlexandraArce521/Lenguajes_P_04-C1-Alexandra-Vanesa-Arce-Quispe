import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
    <div className="logo">Fin de MiSitio</div>
      <p>{currentYear} Footer</p>
    </footer>
  );
}

export default Footer;