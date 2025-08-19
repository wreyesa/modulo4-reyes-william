import { render, screen, fireEvent } from "@testing-library/react";
import TurnoForm from "../components/TurnoForm";

test("elimina un turno de la lista", () => {
  render(<TurnoForm />);

  // Agregar un turno
  fireEvent.change(screen.getByLabelText(/Nombre del paciente/i), { target: { value: "Ana Torres" } });
  fireEvent.change(screen.getByLabelText(/Especialidad/i), { target: { value: "Pediatría" } });
  fireEvent.change(screen.getByLabelText(/Fecha/i), { target: { value: "2025-08-21" } });
  fireEvent.change(screen.getByLabelText(/Hora/i), { target: { value: "09:00" } });
  fireEvent.click(screen.getByText(/Agregar Turno/i));

  // Verificar que se agregó
  expect(screen.getByText(/Ana Torres - Pediatría/)).toBeInTheDocument();

  // Eliminar turno
  fireEvent.click(screen.getByText(/Eliminar/i));

  // Verificar que desapareció
  expect(screen.queryByText(/Ana Torres - Pediatría/)).not.toBeInTheDocument();
});
