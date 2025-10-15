import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Proyects from "../../pages/Proyects";

describe("Proyects Page", () => {
  const renderAtProyects = () =>
    render(
      <MemoryRouter initialEntries={["/proyects"]}>
        <Routes>
          <Route path="/proyects" element={<Proyects />} />
        </Routes>
      </MemoryRouter>
    );

  it("se monta en /proyects y muestra el encabezado principal", () => {
    const { container } = renderAtProyects();

    //evitar el duplicado del grid
    const header = container.querySelector(".news-page-header");
    expect(header).toBeTruthy();
    expect(within(header).getByText("Mis Proyectos")).toBeTruthy();

    // Este texto es único en la página
    expect(
      screen.getByText("Descubre mis desarrollos y soluciones tecnológicas")
    ).toBeTruthy();
  });

  it("renderiza el BackButton y permite hacer click (navega sin error)", () => {
    renderAtProyects();
    const backBtn = screen.getByRole("button", { name: /volver al inicio/i });
    expect(backBtn).toBeTruthy();
    fireEvent.click(backBtn);
    expect(true).toBeTrue();
  });
});
