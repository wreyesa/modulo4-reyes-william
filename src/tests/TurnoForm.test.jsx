import { render, screen, fireEvent } from "@testing-library/react";
import TurnoForm from "../components/TurnoForm";

test("agrega un turno al enviar el formulario", () => {
  render(<TurnoForm />);
  
  fireEvent.change(screen.getByLabelText(/Nombre del paciente/i), { target: { value: "Juan Pérez" } });
  fireEvent.change(screen.getByLabelText(/Especialidad/i), { target: { value: "Dermatología" } });
  fireEvent.change(screen.getByLabelText(/Fecha/i), { target: { value: "2025-08-20" } });
  fireEvent.change(screen.getByLabelText(/Hora/i), { target: { value: "10:30" } });
  
  fireEvent.click(screen.getByText(/Agregar Turno/i));
  
  expect(screen.getByText(/Juan Pérez - Dermatología/)).toBeInTheDocument();
});
