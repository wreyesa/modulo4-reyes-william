import { useState, useEffect } from "react";

function PacienteList() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setPacientes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar pacientes");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {pacientes.map((p) => (
        <li key={p.id}>{p.name} - {p.email}</li>
      ))}
    </ul>
  );
}

export default PacienteList;
