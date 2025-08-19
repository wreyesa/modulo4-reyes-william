function MedicoCard({ nombre, especialidad }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>Especialidad: {especialidad}</p>
    </div>
  );
}

export default MedicoCard;
