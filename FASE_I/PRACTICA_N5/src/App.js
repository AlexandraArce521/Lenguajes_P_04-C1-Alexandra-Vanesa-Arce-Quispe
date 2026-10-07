import React, { useState } from "react";
import "./App.css";

function App() {
  let nombre = "Alexandra";
  let edad = 20;
  let ciudad = "Arequipa, Perú";
  let frutas = ["mango ", " banana ", " kiwi", " manzana"];
  let fruta = frutas[0];

  
  const [blob, setBlob] = useState(null);

  // 1. Crear el Blob
  const crearBlob = () => {
    const texto = "lorem ipsum dolor sit amet consectetur adipiscing elit";
    const nuevoBlob = new Blob([texto], { type: "text/plain;charset=utf-8" });
    setBlob(nuevoBlob);
    alert("Blob creado y guardado en memoria.");
  };
  const descargarArchivo = (blobParaDescargar, nombreArchivo) => {
    const url = URL.createObjectURL(blobParaDescargar);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  
  const descargarBlob = () => {
    if (!blob) {
      alert("Primero tenés que crear el blob con el botón 1.");
      return;
    }
    descargarArchivo(blob, "archivo.txt");
  };

  
  const sliceBlob = () => {
    if (!blob) {
      alert("Primero tenés que crear el blob con el botón 1.");
      return;
    }
    
    const slicedBlob = blob.slice(0, 11, "text/plain;charset=utf-8");
    descargarArchivo(slicedBlob, "archivo_slice.txt");
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>{nombre}</h1>
      <h1>Mi nombre es {nombre}, tengo {edad} y vivo en {ciudad}</h1>
      <h2>Mi fruta favorita es {fruta}</h2>
      <h3>{frutas.join(", ")}</h3>

      <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
        <button onClick={crearBlob}>1. Crear blob</button>
        <button onClick={descargarBlob}>2. Descargar blob</button>
        <button onClick={sliceBlob}>3. Slice blob</button>
      </div>
    </div>
  );
}

export default App;
