import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio">

      <section className="hero">

        <div className="hero-content">

          <span className="eyebrow">
            BIENVENIDO A HOTEL JORÁM
          </span>

          <h1>
            Tu descanso,
            <br />
            nuestra inspiración.
          </h1>

          <p>
            Descubre un lugar donde el diseño, la tranquilidad
            y la hospitalidad se encuentran.
          </p>

          <Link to="/reservas" className="primary-button">
            Reservar habitación
          </Link>

        </div>

      </section>

      <section className="welcome">

        <div>
          <span className="eyebrow">
            UNA EXPERIENCIA DIFERENTE
          </span>

          <h2>
            El lujo está en los detalles.
          </h2>
        </div>

        <p>
          En Hotel Jorám creemos que cada estancia debe ser
          especial. Creamos espacios modernos y acogedores
          para que disfrutes de cada momento, ya sea en un
          viaje de descanso o de negocios.
        </p>

      </section>

      <section className="features">

        <article>
          <span>01</span>
          <h3>Diseño contemporáneo</h3>
          <p>
            Espacios elegantes pensados para tu comodidad.
          </p>
        </article>

        <article>
          <span>02</span>
          <h3>Descanso auténtico</h3>
          <p>
            Habitaciones acogedoras para desconectar.
          </p>
        </article>

        <article>
          <span>03</span>
          <h3>Atención personalizada</h3>
          <p>
            Una experiencia cálida en cada detalle.
          </p>
        </article>

      </section>

    </div>
  );
}

export default Inicio;