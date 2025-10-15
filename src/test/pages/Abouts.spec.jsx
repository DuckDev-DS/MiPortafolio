import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import About from "../../pages/Abouts";


describe("Abouts Page", () => {
  const renderAtAbouts = () =>
    render(
      <MemoryRouter initialEntries={["/abouts"]}>
        <Routes>
          <Route path="/abouts" element={<About />} />
        </Routes>
      </MemoryRouter>
    );

  it("se monta en /abouts sin lanzar errores (con Router)", () => {
    const { container } = renderAtAbouts();
    expect(container.firstChild).toBeTruthy();
  });

  it("muestra las secciones principales", () => {
    renderAtAbouts();
    expect(screen.getByText("Sobre Mí")).toBeTruthy();
    expect(screen.getByText("Mi Historia")).toBeTruthy();
    expect(screen.getByText("Lo que me apasiona")).toBeTruthy();
    expect(screen.getByText("Mis Metas")).toBeTruthy();
  });
});
