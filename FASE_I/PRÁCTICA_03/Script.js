
const loadingText = document.querySelector('#loadingText');
const progress = document.querySelector('#progress');
const loader = document.querySelector('#loader');
const contenido = document.querySelector('#contenido');

let dots = '';
let progressWidth = 0;


/* Animación del texto */
const textInterval = setInterval(() => {

    dots = dots.length < 3 ? dots + '.' : '';

    loadingText.textContent = 'Cargando' + dots;

}, 500);


/* Barra de progreso */
const progressInterval = setInterval(() => {

    progressWidth += 2;

    progress.style.width = progressWidth + '%';

    if (progressWidth >= 100) {

        clearInterval(textInterval);
        clearInterval(progressInterval);
        loadingText.textContent = '¡Carga completada!';
        setTimeout(() => {
            loader.style.display = 'none';
            contenido.style.display = 'block';

        }, 500);

    }

}, 100);


/* =================================
   ARCHIVOS
================================= */

const fileInput = document.querySelector('#fileInput');
const dropZone = document.querySelector('#dropZone');

const informacion = document.querySelector('#informacion');

const nombreArchivo = document.querySelector('#nombreArchivo');
const tipoArchivo = document.querySelector('#tipoArchivo');
const tamanoArchivo = document.querySelector('#tamanoArchivo');
const fechaArchivo = document.querySelector('#fechaArchivo');

const contenidoArchivo = document.querySelector('#contenidoArchivo');


/* =================================
   SELECCIONAR ARCHIVO
================================= */

fileInput.addEventListener('change', (event) => {

    const archivo = event.target.files[0];

    if (archivo) {

        mostrarInformacion(archivo);

    }

});


/* =================================
   DRAG AND DROP
================================= */


/* Cuando el archivo entra al área */

dropZone.addEventListener('dragenter', (event) => {

    event.preventDefault();

    dropZone.classList.add('dragover');

});


/* Mientras se arrastra */

dropZone.addEventListener('dragover', (event) => {

    event.preventDefault();

    dropZone.classList.add('dragover');

});



dropZone.addEventListener('dragleave', () => {

    dropZone.classList.remove('dragover');

});



dropZone.addEventListener('drop', (event) => {

    event.preventDefault();

    dropZone.classList.remove('dragover');


    const archivos = event.dataTransfer.files;

    if (archivos.length > 0) {

        const archivo = archivos[0];

        mostrarInformacion(archivo);

    }

});


function mostrarInformacion(archivo) {

    console.log('Archivo seleccionado:', archivo);


    /* Nombre */

    nombreArchivo.textContent = archivo.name;


    /* Tipo MIME */

    tipoArchivo.textContent =
        archivo.type || 'Tipo desconocido';


    /* Tamaño */

    tamanoArchivo.textContent =
        formatearTamano(archivo.size);


    /* Fecha */

    const fecha = new Date(archivo.lastModified);

    fechaArchivo.textContent =
        fecha.toLocaleString();


    /* Mostrar panel */

    informacion.style.display = 'block';


    /* Leer contenido */

    leerArchivo(archivo);

}


/* =================================
   FORMATEAR TAMAÑO
================================= */

function formatearTamano(bytes) {

    if (bytes === 0) {

        return '0 Bytes';

    }


    const unidades = [
        'Bytes',
        'KB',
        'MB',
        'GB'
    ];


    const indice =
        Math.floor(
            Math.log(bytes) / Math.log(1024)
        );


    return (
        bytes / Math.pow(1024, indice)
    ).toFixed(2) +
    ' ' +
    unidades[indice];

}


/* =================================
   LEER ARCHIVO
================================= */

function leerArchivo(archivo) {

    const reader = new FileReader();


    /* Cuando termina de leer */

    reader.addEventListener('load', (event) => {

        contenidoArchivo.innerHTML = '';


        /*
         * Si es un archivo de texto,
         * mostramos su contenido.
         */

        if (
            archivo.type.startsWith('text/') ||
            archivo.name.endsWith('.txt') ||
            archivo.name.endsWith('.csv') ||
            archivo.name.endsWith('.html') ||
            archivo.name.endsWith('.css') ||
            archivo.name.endsWith('.js')
        ) {

            const texto = document.createElement('pre');

            texto.textContent = event.target.result;

            contenidoArchivo.appendChild(texto);

        } else {

            contenidoArchivo.textContent =
                'El archivo se cargó correctamente. ' +
                'La información básica está disponible arriba.';

        }

    });


    /* Si ocurre un error */

    reader.addEventListener('error', () => {

        contenidoArchivo.textContent =
            'No se pudo leer el archivo.';

    });


    /*
     * Leer como texto
     */

    reader.readAsText(archivo);

}
