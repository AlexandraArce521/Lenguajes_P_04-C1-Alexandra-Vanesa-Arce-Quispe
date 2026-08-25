// Crear el mapa
const mapa = L.map("mapa").setView(
    [-16.4090, -71.5375],
    13
);

// ++OpenStreetMap
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap contributors"
    }
).addTo(mapa);

// Crear historial
const historial = [];

// Variable para el marcador
let marcador = null;

// Variable para el recorrido
let recorrido = L.polyline(
    [],
    {
        color: "red"
    }
).addTo(mapa);

// Variable para controlar el seguimiento
let seguimiento = null;

// Crear Botones
const btnIniciar =
    document.getElementById("btn-iniciar");

const btnDetener =
    document.getElementById("btn-detener");

const btnLimpiar =
    document.getElementById("btn-limpiar");

// Iniciar seguimiento
btnIniciar.addEventListener(
    "click",
    function() {

        if (seguimiento === null) {

            seguimiento =
                navigator.geolocation.watchPosition(
                    obtenerUbicacion,
                    errorUbicacion,
                    {
                        enableHighAccuracy: true
                    }
                );

            document.getElementById("estado").textContent =
                "Seguimiento iniciado";
        }
    }
);

// Detener seguimiento
btnDetener.addEventListener(
    "click",
    function() {

        if (seguimiento !== null) {

            navigator.geolocation.clearWatch(
                seguimiento
            );

            seguimiento = null;

            document.getElementById("estado").textContent =
                "Seguimiento detenido";
        }
    }
);

// Limpiar historial
btnLimpiar.addEventListener(
    "click",
    function() {

        historial.length = 0;

        recorrido.setLatLngs([]);

        actualizarHistorial();

        document.getElementById("estado").textContent =
            "Historial limpiado";
    }
);

// Obtener ubicación
function obtenerUbicacion(posicion) {

    const latitud =
        posicion.coords.latitude;

    const longitud =
        posicion.coords.longitude;

    const nuevaPosicion = [
        latitud,
        longitud
    ];

    console.log(
        latitud,
        longitud
    );

    // Centrar el mapa
    mapa.setView(
        nuevaPosicion,
        17
    );

    // Crear o actualizar marcador
    if (marcador === null) {

        marcador = L.marker(
            nuevaPosicion
        ).addTo(mapa);

    } else {

        marcador.setLatLng(
            nuevaPosicion
        );
    }

    // Agregar posición al historial
    historial.push(
        nuevaPosicion
    );

    // Actualizar recorrido
    recorrido.setLatLngs(
        historial
    );

    // Actualizar historial
    actualizarHistorial();

    // Actualizar estado
    document.getElementById("estado").textContent =
        "Ubicación actualizada";
}

// Mostrar error
function errorUbicacion(err) {
    console.error(
        `ERROR(${err.code}): ${err.message}`
    );

    document.getElementById("estado").textContent =
        "No se pudo obtener la ubicación";
}

function actualizarHistorial() {

    const contenedor =
        document.getElementById("historial");

    contenedor.innerHTML = "";

    historial.forEach(
        function(posicion, indice) {

            const elemento =
                document.createElement("div");

            elemento.className =
                "posicion";

            elemento.textContent =
                `Posición ${indice + 1}: ` +
                `${posicion[0].toFixed(6)}, ` +
                `${posicion[1].toFixed(6)}`;

            contenedor.appendChild(
                elemento
            );
        }
    );
}
