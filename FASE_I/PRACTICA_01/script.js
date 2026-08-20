const form = document.getElementById("form-ubicacion");
const ingresarLatitud =
    document.getElementById("latitud");
const ingresarLongitud =
    document.getElementById("longitud");
const ingresarNombre =
    document.getElementById("nombre");
const mensajeError =
    document.getElementById("mensaje-error");


function parseCoordenada(texto) {

    if (!texto) return NaN;

    const normalizado =
        texto.trim().replace(",", ".");

    return parseFloat(normalizado);
}


function esLatitudValida(valor) {

    return !isNaN(valor) &&
           valor >= -90 &&
           valor <= 90;
}


function esLongitudValida(valor) {

    return !isNaN(valor) &&
           valor >= -180 &&
           valor <= 180;
}


form.addEventListener("submit", function(evento) {

    evento.preventDefault();

    mensajeError.textContent = "";


    const latitud =
        parseCoordenada(ingresarLatitud.value);

    const longitud =
        parseCoordenada(ingresarLongitud.value);

    const nombre =
        ingresarNombre.value.trim();


    if (!esLatitudValida(latitud)) {

        mensajeError.textContent =
            "Ingrese una latitud válida entre -90 y 90.";

        return;
    }


    if (!esLongitudValida(longitud)) {

        mensajeError.textContent =
            "Ingrese una longitud válida entre -180 y 180.";

        return;
    }


    const coordenadas =
        `${latitud},${longitud}`;


    const url =
        `https://www.google.com/maps/search/?api=1&query=${coordenadas}`;


    window.open(url, "_blank");

});
