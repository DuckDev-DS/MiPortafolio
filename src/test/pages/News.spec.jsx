import React from "react";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import News from "../../pages/News";

describe("News Page", () => {
  const renderAtNews = () =>
    render(
      <MemoryRouter initialEntries={["/news"]}>
        <Routes>
          <Route path="/news" element={<News />} />
        </Routes>
      </MemoryRouter>
    );

  it("se renderiza correctamente (smoke) dentro de Router", () => {
    const { container } = renderAtNews();
    expect(container.firstChild).toBeTruthy();
  });

  it("muestra el encabezado principal (título y subtítulo) en el header", () => {
    const { container } = renderAtNews();

    const header = container.querySelector(".news-page-header");
    expect(header).toBeTruthy();

    const h1 = within(header).getByRole("heading", { level: 1 });
    expect(h1).toBeTruthy();
    expect(h1.textContent).toBe("Últimas Noticias");

    const subtitleText =
      "Mantente informado sobre mis últimos proyectos, logros y novedades en el mundo del desarrollo";
    expect(within(header).getByText(subtitleText)).toBeTruthy();
  });
});
