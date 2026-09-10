let miBlob = null; //variable para el blob

const resultado = document.getElementById('resultado');

// 1. Crear un BLOB de txt
const btnCrear = document.getElementById('btnCrear');
btnCrear.addEventListener('click', () => {
  const texto ="Fecha de creación: " + new Date().toLocaleString();

  // Se crea el Blob indicando el contenido y el tipo MIME
  miBlob = new Blob([texto], { type: 'text/plain' });

  resultado.textContent =
    "Blob creado correctamente.\n" +
    "Tamaño: " + miBlob.size + " bytes\n" +
    "Tipo: " + miBlob.type + "\n\n" +
    "Contenido:\n" + texto;
});

// 2. Descargar el BLOB como txt
const btnDescargar = document.getElementById('btnDescargar');
btnDescargar.addEventListener('click', () => {
  if (!miBlob) {
    resultado.textContent = "Primero se debe crear el Blob antes de descargarlo.";
    return;
  }

  // Se crea una URL que apunta al Blob
  const url = URL.createObjectURL(miBlob);

  // Creamos un enlace invisible para forzar la descarga
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = 'archivo_generado.txt';
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);

  URL.revokeObjectURL(url);

  resultado.textContent = "Archivo descargado como 'archivo_generado.txt'.";
});

// 3. usamos slice() para obtener una parte del BLOB
const btnSlice = document.getElementById('btnSlice');
btnSlice.addEventListener('click', async () => {
  if (!miBlob) {
    resultado.textContent = "Primero debes crear el Blob antes de usar slice()."; //manejo de error
    return;
  }

  // slice devuelve un nuevo Blob con esa porción
  const mitad = Math.floor(miBlob.size / 2);
  const parteBlob = miBlob.slice(0, mitad, 'text/plain');

  const textoParcial = await parteBlob.text();

  resultado.textContent =
    "slice() aplicado sobre el Blob original.\n" +
    "Tamaño original: " + miBlob.size + " bytes\n" +
    "Tamaño de la porción (primera mitad): " + parteBlob.size + " bytes\n\n" +
    "Contenido de la porción:\n" + textoParcial;
});
