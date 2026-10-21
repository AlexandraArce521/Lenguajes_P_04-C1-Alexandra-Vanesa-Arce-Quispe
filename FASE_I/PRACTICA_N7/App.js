import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Blob from "./pages/ProyectoBlob";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";

import "./App.css";

function App() {
  return (
      <div className="app">
        <Header />

        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blob" element={<Blob />} />
            <Route path="/acercaDe" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;