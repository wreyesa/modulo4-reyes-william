import React, { useState } from "react";
import PacienteList from "./components/PacienteList";
import TurnoForm from "./components/TurnoForm";
import MedicoCard from "./components/MedicoCard";

function App() {
  const [turnos, setTurnos] = useState([]);

  // función para añadir turno (se pasa como prop a TurnoForm)
  const agregarTurno = (nuevoTurno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sistema de Gestión de Turnos Médicos</h1>

      {/* Lista de pacientes (carga desde API externa) */}
      <section>
        <h2>Pacientes (desde API)</h2>
        <PacienteList />
      </section>

      {/* Formulario para agendar un turno */}
      <section>
        <h2>Agendar Turno</h2>
        <TurnoForm onAddTurno={agregarTurno} />
        <ul>
          {turnos.map((t, index) => (
            <li key={index}>
              {t.paciente} - {t.fecha}
            </li>
          ))}
        </ul>
      </section>

      {/* Tarjeta de médico (usa props) */}
      <section>
        <h2>Médico destacado</h2>
        <MedicoCard nombre="Dra. Pérez" especialidad="Pediatría" />
      </section>
    </div>
  );
}

export default App;