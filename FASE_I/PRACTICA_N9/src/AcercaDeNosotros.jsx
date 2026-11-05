import "./AcercaDeNosotros.css";

function AcercaDeNosotros() {
  return (
    <section className="about-page">

      <div className="about-heading">

        <span className="eyebrow">
          NUESTRA ESENCIA
        </span>

        <h1>
          Más que un hotel, un lugar para sentirte bien.
        </h1>

        <p>
          Combinamos comodidad, diseño y hospitalidad
          para ofrecerte una estancia inolvidable.
        </p>

      </div>

      <div className="about-content">

        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
          alt="Interior moderno del hotel"
        />

        <div className="about-text">

          <span className="eyebrow">
            QUIÉNES SOMOS
          </span>

          <h2>
            Un espacio creado para ti.
          </h2>

          <p>
            Hotel Jorám nace con la idea de ofrecer una
            experiencia de alojamiento moderna, tranquila
            y personalizada.
          </p>

          <p>
            Cuidamos cada detalle, desde el diseño de nuestras
            habitaciones hasta la atención de nuestro equipo,
            para que cada huésped se sienta como en casa.
          </p>

          <div className="about-services">

            <div>
              <strong>24/7</strong>
              <span>Atención al huésped</span>
            </div>

            <div>
              <strong>Wi-Fi</strong>
              <span>Conexión gratuita</span>
            </div>

            <div>
              <strong>Confort</strong>
              <span>En cada habitación</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AcercaDeNosotros;