
import { useState } from "react";
import "./Contacto.css";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const actualizarCampo = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    alert(
      `Gracias, ${formulario.nombre}. Tu mensaje fue validado.`
    );

    setFormulario({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <section className="contacto">
      <div className="contacto-info">
        <span className="etiqueta">Estamos para ayudar al usuario</span>
        <h1>Contactanos</h1>
        <p>
          Completá el formulario para realizar una consulta
        </p>
      </div>

      <form className="contacto-form" onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={actualizarCampo}
          placeholder="Tu nombre"
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formulario.email}
          onChange={actualizarCampo}
          placeholder="correo@ejemplo.com"
          required
        />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formulario.mensaje}
          onChange={actualizarCampo}
          placeholder="Escribe tu consulta..."
          rows="5"
          required
        />

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;
