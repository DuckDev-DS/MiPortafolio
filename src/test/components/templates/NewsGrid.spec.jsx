import React from "react";
import { render, screen } from "@testing-library/react";
import NewsGrid from "../../../components/templates/NewsGrid";

describe("NewsGrid (Template)", () => {
  it("renderiza título y subtítulo por defecto", () => {
    render(<NewsGrid news={[]} renderNewsCard={() => null} />);
    expect(screen.getByText("Últimas Noticias")).toBeTruthy();
    expect(screen.getByText("Mantente informado sobre las novedades")).toBeTruthy();
  });

  it("muestra el estado vacío cuando no hay noticias", () => {
    render(<NewsGrid news={[]} renderNewsCard={() => null} />);
    expect(screen.getByText("No hay noticias disponibles")).toBeTruthy();
    expect(screen.getByText("Próximamente se publicarán nuevas noticias.")).toBeTruthy();
  });

  it("renderiza las noticias usando la función renderNewsCard", () => {
    const news = [
      { id: 1, title: "Noticia 1" },
      { id: 2, title: "Noticia 2" },
    ];

    const renderNewsCard = (item) => (
      <div data-testid={`news-${item.id}`}>{item.title}</div>
    );

    render(<NewsGrid news={news} renderNewsCard={renderNewsCard} />);

    expect(screen.getByTestId("news-1")).toBeTruthy();
    expect(screen.getByTestId("news-2")).toBeTruthy();
    expect(screen.getByText("Noticia 1")).toBeTruthy();
    expect(screen.getByText("Noticia 2")).toBeTruthy();
  });

  it("permite personalizar título y subtítulo", () => {
    render(
      <NewsGrid
        title="Noticias Tecnológicas"
        subtitle="Actualizaciones del mundo IT"
        news={[]}
        renderNewsCard={() => null}
      />
    );
    expect(screen.getByText("Noticias Tecnológicas")).toBeTruthy();
    expect(screen.getByText("Actualizaciones del mundo IT")).toBeTruthy();
  });
});
