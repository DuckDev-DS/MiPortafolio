import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Proyects from "../../pages/Proyects";

describe("Proyects Page", () => {
  const renderProyects = () =>
    render(
      <MemoryRouter initialEntries={["/proyects"]}>
        <Routes>
          <Route path="/proyects" element={<Proyects />} />
        </Routes>
      </MemoryRouter>
    );

  it("renderiza sin fallar (smoke test)", () => {
    const { container } = renderProyects();
    expect(container.firstChild).toBeTruthy();
  });

  it("muestra el encabezado principal con el título y subtítulo (scoped al header)", () => {
    const { container } = renderProyects();

    const header = container.querySelector(".news-page-header");
    expect(header).toBeTruthy();
    const h1 = within(header).getByRole("heading", { level: 1 });
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe("Mis Proyectos");
    expect(
      within(header).getByText("Descubre mis desarrollos y soluciones tecnológicas")
    ).toBeTruthy();
  });
});

