import { useState } from "react";

function TurnoForm() {
  const [turnos, setTurnos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // 🔄 Modificación
      const nuevosTurnos = [...turnos];
      nuevosTurnos[editIndex] = { nombre, especialidad, fecha, hora };
      setTurnos(nuevosTurnos);
      setEditIndex(null);
    } else {
      // ➕ Creación
      setTurnos([...turnos, { nombre, especialidad, fecha, hora }]);
    }

    // Reiniciar formulario
    setNombre("");
    setEspecialidad("");
    setFecha("");
    setHora("");
  };

  const handleEdit = (index) => {
    setNombre(turnos[index].nombre);
    setEspecialidad(turnos[index].especialidad);
    setFecha(turnos[index].fecha);
    setHora(turnos[index].hora);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // 🗑 Eliminación
    setTurnos(turnos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del paciente:
          <input
            type="text"
            placeholder="Nombre del paciente"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>

        <label>
          Especialidad:
          <input
            type="text"
            placeholder="Especialidad"
            required
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
          />
        </label>

        <label>
          Fecha:
          <input
            type="date"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        <label>
          Hora:
          <input
            type="time"
            required
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </label>

        <button type="submit">Agregar Turno</button>
      </form>

      <h3>Turnos agendados</h3>
      <ul>
        {turnos.map((turno, index) => (
          <li key={index}>
            {turno.nombre} - {turno.especialidad} - 📅 {turno.fecha} ⏰ {turno.hora}
            <button onClick={() => handleEdit(index)}>✏️ Editar</button>
            <button onClick={() => handleDelete(index)}>🗑 Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TurnoForm;
