import React from "react";
import { render, screen } from "@testing-library/react";
import ImageCard from "../../../components/organisms/ImageCard";

describe("ImageCard (Organism)", () => {
  it("renderiza la imagen con src y alt correctos", () => {
    render(<ImageCard src="/img/test.png" alt="Imagen de prueba" />);
    const img = screen.getByRole("img", { name: /imagen de prueba/i });
    expect(img).toBeTruthy();
    expect(img.getAttribute("src")).toBe("/img/test.png");
  });

  it("usa las clases base del contenedor", () => {
    render(<ImageCard src="/img/test.png" alt="Imagen base" />);
    const container = screen.getByRole("img", { name: /imagen base/i }).closest("div.image-card-container");
    expect(container).toBeTruthy();
  });

  it("aplica la clase personalizada pasada por props", () => {
    render(<ImageCard src="/img/test.png" alt="Imagen personalizada" className="rounded" />);
    const img = screen.getByRole("img", { name: /imagen personalizada/i });
    expect(img.className).toContain("rounded");
  });

  it("usa la estructura interna correcta", () => {
  const { container } = render(<ImageCard src="/img/test.png" alt="Estructura" />);
  const frame = container.querySelector(".image-card-frame");
  const img = screen.getByRole("img", { name: /estructura/i });

  expect(frame).toBeTruthy();
  expect(img).toBeTruthy();
  expect(frame.contains(img)).toBeTrue();
});
});
