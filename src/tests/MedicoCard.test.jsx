import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import MedicoCard from "../components/MedicoCard";

test("renderiza nombre y especialidad", () => {
  render(<MedicoCard nombre="Dr. López" especialidad="Cardiología" />);
  expect(screen.getByText("Dr. López")).toBeInTheDocument();
  expect(screen.getByText(/Cardiología/i)).toBeInTheDocument();
});
