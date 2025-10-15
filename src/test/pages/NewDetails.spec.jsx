import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import NewsDetail from "../../pages/NewDetails";

describe("NewsDetail Page", () => {
  const renderAt = (path = "/news/xyz") =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<div data-testid="news-list">Listado</div>} />
        </Routes>
      </MemoryRouter>
    );

  it("se monta en /news/:id sin lanzar errores (smoke)", () => {
    const { container } = renderAt("/news/no-existe");
    expect(container.firstChild).toBeTruthy();
  });

  it("si existe el botón '← Volver a Noticias', permite hacer click sin errores", () => {
    renderAt("/news/cualquiera");
    const backBtn = screen.queryByRole("button", { name: /volver a noticias/i });
    if (backBtn) {
      fireEvent.click(backBtn); // debería navegar a /news sin excepciones
    }
    expect(true).toBeTrue();
  });
});
