import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <Link to="/" className="logo">
        Jorám<span>.</span>
      </Link>

      <nav className="nav">
        <NavLink to="/" end>
          Inicio
        </NavLink>

        <NavLink to="/acerca">
          Acerca de nosotros
        </NavLink>

        <NavLink to="/reservas">
          Reservas
        </NavLink>
      </nav>

      <Link to="/reservas" className="header-button">
        Reservar ahora
      </Link>

    </header>
  );
}

export default Header;