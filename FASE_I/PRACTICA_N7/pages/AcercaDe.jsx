import "./AcercaDe.css";

function AcercaDe() {
  return (
    <section className="acerca">
      <div className="acerca-intro">
        <span className="etiqueta">SOBRE EL PROYECTO BLOB</span>
        <h1>Acerca de mi</h1>
        <p>
            Soy Alexandra Arce de 21 años, de Perú.
            Estudiante de Ingenieria de Sistemas de 
            la Universidad Cátolica de Santa María de tercer año.
        </p>
      </div>

      <div className="acerca-tarjetas">
        <article className="acerca-card">
          <div className="acerca-icono">01</div>
          <h2>Nuestra misión</h2>
          <p>
            Desarrollar una aplicación funcional para blob, funcional
            y visualmente atractiva utilizando React.
          </p>
        </article>

        <article className="acerca-card">
          <div className="acerca-icono">02</div>
          <h2>Nuestro objetivo</h2>
          <p>
            Aplicar componentes, navegación por rutas,
            estilos CSS y generación de archivos con Blob.
          </p>
        </article>

        <article className="acerca-card">
          <div className="acerca-icono">03</div>
          <h2>Nuestra tecnología</h2>
          <p>
            Utilizamos React, React Router, JavaScript
            y CSS para construir la aplicación.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AcercaDe;
