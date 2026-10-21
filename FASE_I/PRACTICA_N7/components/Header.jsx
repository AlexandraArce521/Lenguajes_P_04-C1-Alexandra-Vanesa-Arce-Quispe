
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-icon">B</span>
        <span>BlobStudio</span>
      </Link>

      <nav className="nav">
        <NavLink to="/" end>
          Inicio
        </NavLink>

        <NavLink to="/blob">
          proyectoBlob
        </NavLink>

        <NavLink to="/acercaDe">
          Acerca de nosotros
        </NavLink>

        <NavLink to="/contacto" className="nav-contacto">
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
