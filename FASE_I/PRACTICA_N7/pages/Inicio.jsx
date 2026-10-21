
import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <section className="inicio">
      <div className="inicio-texto">
        <span className="etiqueta">Mi pagina web</span>

        <h1>
          Mi proyecto Blob 
          <span> con React </span>
        </h1>

        <p>
          Un proyecto interactivo para conocer la navegación
          por rutas y la creación de archivos mediante Blob.
        </p>

        <div className="inicio-botones">
          <Link to="/blob" className="boton-principal">
            Ver proyecto Blob
          </Link>

          <Link to="/acercaDe" className="boton-secundario">
            Conoceme
          </Link>
        </div>
      </div>

      <div className="inicio-visual">
        <div className="blob blob-uno"></div>
        <div className="blob blob-dos"></div>

        <div className="tarjeta-visual">
          <span className="codigo-icono">&lt;/&gt;</span>
          <h2>React + Blob</h2>
          <p>Fin de pagina.</p>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
