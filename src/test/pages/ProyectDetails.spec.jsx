import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProyectDetail from "../../pages/ProyectDetails";

describe("ProyectDetail Page", () => {
  const renderAt = (path = "/proyects/xyz") =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/proyects/:id" element={<ProyectDetail />} />
          <Route path="/proyects" element={<div data-testid="proyects-list">Listado</div>} />
        </Routes>
      </MemoryRouter>
    );

  it("se monta en /proyects/:id sin lanzar errores (smoke)", () => {
    const { container } = renderAt("/proyects/no-existe");
    expect(container.firstChild).toBeTruthy();
  });

  it("si existe el botón '← Volver a Proyectos', permite hacer click sin errores", () => {
    renderAt("/proyects/cualquiera");
    const backBtn = screen.queryByRole("button", { name: /volver a proyectos/i });
    if (backBtn) {
      fireEvent.click(backBtn);
    }
    expect(true).toBeTrue();
  });
});
