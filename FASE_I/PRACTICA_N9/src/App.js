import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Inicio from "./Inicio";
import AcercaDeNosotros from "./AcercaDeNosotros";
import Reservas from "./Reservas";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/acerca"
            element={<AcercaDeNosotros />}
          />
          <Route path="/reservas" element={<Reservas />} />
        </Routes>
      </main>

      <footer className="footer">
        <h3>JORÁM HOTEL</h3>
        <p>Tu descanso, nuestra inspiración.</p>
        <p>© 2026 JORÁM HOTEL. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;