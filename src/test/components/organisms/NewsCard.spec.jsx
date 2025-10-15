import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import NewsCard from "../../../components/organisms/NewsCard";

const news = {
  id: 7,
  title: "Nuevo lanzamiento tecnológico",
  excerpt: "Se presentó la nueva generación de inteligencia artificial.",
  image: "/img/news.png",
  category: "Innovación",
  date: "2025-10-01",
};

function Harness() {
  return (
    <MemoryRouter initialEntries={["/news"]}>
      <Routes>
        <Route path="/news" element={<NewsCard news={news} />} />
        <Route path="/news/:id" element={<div>NEWS DETAIL OK</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("NewsCard (Organism)", () => {
  it("renderiza título, extracto y categoría", () => {
    render(<Harness />);
    expect(screen.getByText("Nuevo lanzamiento tecnológico")).toBeTruthy();
    expect(screen.getByText("Se presentó la nueva generación de inteligencia artificial.")).toBeTruthy();
    expect(screen.getByText("Innovación")).toBeTruthy();
  });

  it("renderiza la imagen con el alt correcto", () => {
    render(<Harness />);
    const img = screen.getByRole("img", { name: /nuevo lanzamiento tecnológico/i });
    expect(img).toBeTruthy();
    expect(img.getAttribute("src")).toBe("/img/news.png");
  });

  it("navega a /news/:id al hacer clic en 'Leer más'", async () => {
    render(<Harness />);
    const button = screen.getByRole("button", { name: /leer más/i });
    fireEvent.click(button);
    expect(await screen.findByText("NEWS DETAIL OK")).toBeTruthy();
  });

  it("tiene el contenedor con clase 'news-card-col'", () => {
    render(<Harness />);
    const title = screen.getByText("Nuevo lanzamiento tecnológico");
    const col = title.closest(".news-card-col");
    expect(col).toBeTruthy();
  });
});
