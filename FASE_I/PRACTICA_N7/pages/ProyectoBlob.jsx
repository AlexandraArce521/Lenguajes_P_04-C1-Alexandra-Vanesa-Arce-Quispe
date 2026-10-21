import { useState } from "react";
import "./Blob.css";

function ProyectoBlob() {
  const nombre = "Alexandra";
  const edad = 20;
  const ciudad = "Arequipa, Perú";
  const frutas = ["mango", "banana", "kiwi", "manzana"];
  const fruta = frutas[0];

  const [miBlob, setMiBlob] = useState(null);

  // 1. Crear el Blob.
  const crearBlob = () => {
    const texto = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

    const nuevoBlob = new window.Blob([texto], {
      type: "text/plain;charset=utf-8",
    });

    setMiBlob(nuevoBlob);
    alert("Blob creado y guardado en memoria.");
  };

  // Descargar un archivo.
  const descargarArchivo = (blobParaDescargar, nombreArchivo) => {
    const url = URL.createObjectURL(blobParaDescargar);
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.download = nombreArchivo;

    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    // Liberar la URL después de iniciar la descarga.
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  // 2. Descargar el Blob completo.
  const descargarBlob = () => {
    if (!miBlob) {
      alert("Primero tenés que crear el Blob con el botón 1.");
      return;
    }

    descargarArchivo(miBlob, "archivo.txt");
  };

  // 3. Extraer y descargar una parte del Blob.
  const sliceBlob = () => {
    if (!miBlob) {
      alert("Primero tenés que crear el Blob con el botón 1.");
      return;
    }

    const slicedBlob = miBlob.slice(0, 11, "text/plain;charset=utf-8");

    descargarArchivo(slicedBlob, "archivo_slice.txt");
  };

  return (
    <section className="blob-pagina">
      <div className="blob-presentacion">
        <span className="blob-etiqueta">PROYECTO PRÁCTICO · REACT</span>

        <h1>Mi proyecto Blob</h1>

        <p>
          Conocé cómo crear, descargar y extraer una parte de un archivo
          utilizando la API Blob de JavaScript.
        </p>
      </div>

      <div className="blob-perfil">
        <div className="blob-avatar">A</div>

        <h2>¡Hola, {nombre}!</h2>

        <p>
          Tengo {edad} años y vivo en {ciudad}.
        </p>

        <div className="blob-fruta">
          <span>Mi fruta favorita</span>
          <strong>{fruta}</strong>
        </div>

        <p className="blob-lista">Frutas: {frutas.join(", ")}.</p>
      </div>

      <div className="blob-panel">
        <h2>Operaciones con Blob</h2>

        <p>Seleccioná una operación para trabajar con el archivo.</p>

        <div className="blob-botones">
          <button onClick={crearBlob}>1. Crear Blob</button>

          <button onClick={descargarBlob}>2. Descargar Blob</button>

          <button onClick={sliceBlob}>3. Slice Blob</button>
        </div>

        <div className="blob-estado">
          <span className={`blob-indicador ${miBlob ? "creado" : ""}`} />

          {miBlob
            ? `Blob creado correctamente · ${miBlob.size} bytes`
            : "Todavía no creaste el archivo."}
        </div>
      </div>
    </section>
  );
}

export default ProyectoBlob;