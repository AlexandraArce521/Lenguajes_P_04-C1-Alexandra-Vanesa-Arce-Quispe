import { useState } from "react";
import "./Reservas.css";

const habitaciones = [
  {
    id: 1,
    nombre: "Habitación Estándar",
    descripcion: "Un espacio acogedor para descansar.",
    precio: 60,
    capacidad: 2,
    imagen:
      "https://images.squarespace-cdn.com/content/v1/600b53d0d5ef08628d370b52/1612392780818-XUJ5E1ZHL5DQ0X3IDLJH/HAB_17_DORMITORIO_A.jpg?format=1000w",
  },
  {
    id: 2,
    nombre: "Habitación Deluxe",
    descripcion: "Diseño moderno y máximo confort.",
    precio: 95,
    capacidad: 2,
    imagen:
      "https://images.squarespace-cdn.com/content/v1/600b53d0d5ef08628d370b52/1612886648883-5MBZSMLA3BXFBRCTWBNQ/HAB_20_DORMITORIO_A.jpg",
  },
  {
    id: 3,
    nombre: "Habitación Familiar",
    descripcion: "Más espacio para compartir.",
    precio: 120,
    capacidad: 4,
    imagen:
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=900&q=80",
  },
  {
    
    id: 4,
    nombre: "Suite Presidencial",
    descripcion: "Una experiencia exclusiva y elegante.",
    precio: 180,
    capacidad: 2,
    imagen:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
  },
];

function Reservas() {
  const hoy = new Date();
  const fechaActual = [
    hoy.getFullYear(),
    String(hoy.getMonth() + 1).padStart(2, "0"),
    String(hoy.getDate()).padStart(2, "0"),
  ].join("-");

  const [habitacion, setHabitacion] = useState(null);
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const [huespedes, setHuespedes] = useState("1");

  function calcularNoches() {
    if (!entrada || !salida) return 0;

    const fechaEntrada = new Date(`${entrada}T12:00:00`);
    const fechaSalida = new Date(`${salida}T12:00:00`);

    return Math.round(
      (fechaSalida - fechaEntrada) / (1000 * 60 * 60 * 24)
    );
  }

  function confirmarReserva(event) {
    event.preventDefault();

    if (!habitacion) {
      alert("Por favor, selecciona una habitación.");
      return;
    }

    if (!entrada || !salida) {
      alert("Selecciona las fechas de entrada y salida.");
      return;
    }

    if (entrada < fechaActual || salida <= entrada) {
      alert("Las fechas seleccionadas no son válidas.");
      return;
    }

    if (Number(huespedes) > habitacion.capacidad) {
      alert("La habitación no tiene capacidad para esa cantidad de huéspedes.");
      return;
    }

    const noches = calcularNoches();
    const total = noches * habitacion.precio;

    alert(
      `¡RESERVA REALIZADA CON ÉXITO!\n\n` +
      `Hotel Élan\n\n` +
      `Habitación: ${habitacion.nombre}\n` +
      `Entrada: ${entrada}\n` +
      `Salida: ${salida}\n` +
      `Huéspedes: ${huespedes}\n` +
      `Noches: ${noches}\n` +
      `Precio por noche: $${habitacion.precio}\n` +
      `TOTAL: $${total}\n\n` +
      `¡Gracias por elegirnos!`
    );
  }

  return (
    <section className="reservas-page">

      <div className="reservas-heading">

        <span className="eyebrow">
          RESERVA TU ESTANCIA
        </span>

        <h1>
          Encuentra tu habitación ideal.
        </h1>

        <p>
          Selecciona una habitación y planifica tu próxima experiencia.
        </p>

      </div>

      <div className="habitaciones-grid">

        {habitaciones.map((item) => (

          <article className="habitacion-card" key={item.id}>

            <img
              src={item.imagen}
              alt={item.nombre}
            />

            <div className="habitacion-info">

              <h2>{item.nombre}</h2>

              <p>{item.descripcion}</p>

              <div className="habitacion-detalles">
                <span>Hasta {item.capacidad} huéspedes</span>
                <strong>${item.precio} / noche</strong>
              </div>

              <button
                type="button"
                className={
                  habitacion?.id === item.id
                    ? "seleccionar-btn seleccionado"
                    : "seleccionar-btn"
                }
                onClick={() => {
                  setHabitacion(item);
                  setHuespedes("1");
                }}
              >
                {habitacion?.id === item.id
                  ? "Habitación seleccionada"
                  : "Seleccionar habitación"}
              </button>

            </div>

          </article>

        ))}

      </div>

      <div className="formulario-reserva">

        <div className="formulario-heading">

          <span className="eyebrow">
            COMPLETA TU RESERVA
          </span>

          <h2>Planifica tu estancia.</h2>

          <p>
            Selecciona las fechas de entrada y salida para calcular
            el precio de tu alojamiento.
          </p>

        </div>

        <form onSubmit={confirmarReserva}>

          <div className="campo-reserva">

            <label htmlFor="entrada">
              Fecha de entrada
            </label>

            <input
              type="date"
              id="entrada"
              min={fechaActual}
              value={entrada}
              onChange={(e) => {
                setEntrada(e.target.value);
                if (salida && e.target.value >= salida) {
                  setSalida("");
                }
              }}
              required
            />

          </div>

          <div className="campo-reserva">

            <label htmlFor="salida">
              Fecha de salida
            </label>

            <input
              type="date"
              id="salida"
              min={entrada || fechaActual}
              value={salida}
              onChange={(e) => setSalida(e.target.value)}
              required
            />

          </div>

          <div className="campo-reserva">

            <label htmlFor="huespedes">
              Cantidad de huéspedes
            </label>

            <select
              id="huespedes"
              value={huespedes}
              onChange={(e) => setHuespedes(e.target.value)}
            >

              {Array.from(
                {
                  length: habitacion
                    ? habitacion.capacidad
                    : 4,
                },
                (_, i) => i + 1
              ).map((cantidad) => (

                <option key={cantidad} value={cantidad}>
                  {cantidad} {cantidad === 1 ? "huésped" : "huéspedes"}
                </option>

              ))}

            </select>

          </div>

          <div className="resumen-reserva">

            <div>
              <span>Habitación</span>

              <strong>
                {habitacion
                  ? habitacion.nombre
                  : "No seleccionada"}
              </strong>
            </div>

            <div>
              <span>Precio por noche</span>

              <strong>
                {habitacion
                  ? `$${habitacion.precio}`
                  : "$0"}
              </strong>
            </div>

            <div>
              <span>Noches</span>

              <strong>{calcularNoches()}</strong>
            </div>

            <div className="total-reserva">
              <span>Total estimado</span>

              <strong>
                $
                {habitacion
                  ? habitacion.precio * calcularNoches()
                  : 0}
              </strong>
            </div>

          </div>

          <button
            type="submit"
            className="confirmar-btn"
          >
            Confirmar reserva
          </button>

        </form>

      </div>

    </section>
  );
}

export default Reservas;