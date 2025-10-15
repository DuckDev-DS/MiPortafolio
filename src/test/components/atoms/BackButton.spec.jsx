import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BackButton from "../../../components/atoms/BackButton";

// Pequeño harness de rutas:
// - En "/x" renderea el BackButton (escenario de origen)
// - En "/" renderea un marcador "Home"
function TestHarness() {
  return (
    <MemoryRouter initialEntries={["/x"]}>
      <Routes>
        <Route path="/x" element={<BackButton />} />
        <Route path="/" element={<div>HOME OK</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("BackButton (Atom)", () => {
  it("renderiza el botón con el texto correcto", () => {
    render(<TestHarness />);
    const btn = screen.getByRole("button", { name: /volver al inicio/i });
    expect(btn).toBeTruthy();
    expect(btn.textContent).toContain("Volver al Inicio");
  });

  it("navega a '/' al hacer clic (se muestra la vista HOME)", async () => {
    render(<TestHarness />);
    const btn = screen.getByRole("button", { name: /volver al inicio/i });
    fireEvent.click(btn);

    // Si la navegación ocurrió, ahora deberíamos ver el marcador de la ruta "/"
    const homeMarker = await screen.findByText("HOME OK");
    expect(homeMarker).toBeTruthy();
  });

  it("aplica la clase CSS 'back-btn'", () => {
    render(<TestHarness />);
    const btn = screen.getByRole("button", { name: /volver al inicio/i });
    expect(btn.className).toContain("back-btn");
  });
});

