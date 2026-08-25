// Crear el mapa
const mapa = L.map("mapa").setView(
    [-16.4090, -71.5375],
    13
);

// Agregar OpenStreetMap
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap contributors"
    }
).addTo(mapa);

// Crear historial
const historial = [];

// Variable marcador
let marcador = null;

// Variable para el recorrido
let recorrido = L.polyline(
    [],
    {
        color: "red"
    }
).addTo(mapa);

// Ubicación en tiempo real
navigator.geolocation.watchPosition(
    obtenerUbicacion,
    errorUbicacion,
    {
        enableHighAccuracy: true
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

    console.log(latitud, longitud);

    // Centrar el mapa en la nueva posición
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

    // Actualiza historial que se ve por pantalla
    actualizarHistorial();


    // Actualizar estado
    document.getElementById("estado").textContent =
        "Ubicación actualizada";
}

// Mostrar error de ubicación
function errorUbicacion(err) {

    console.error(
        `ERROR(${err.code}): ${err.message}`
    );

    document.getElementById("estado").textContent =
        "No se pudo obtener la ubicación";
}

// Mostrar historial
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
