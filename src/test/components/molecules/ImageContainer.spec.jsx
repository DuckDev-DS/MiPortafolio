import React from "react";
import { render, screen } from "@testing-library/react";
import ImageContainer from "../../../components/molecules/ImageContainer";

describe("ImageContainer (Molecule)", () => {
  it("renderiza la imagen con el src y alt correctos", () => {
    render(<ImageContainer image="/img/project.png" alt="Proyecto A" status="En progreso" />);
    const img = screen.getByRole("img", { name: /proyecto a/i });
    expect(img).toBeTruthy();
    expect(img.getAttribute("src")).toBe("/img/project.png");
  });

  it("muestra el texto del estado", () => {
    render(<ImageContainer image="/img/p1.png" alt="Proyecto B" status="Completado" />);
    const badge = screen.getByText("Completado");
    expect(badge).toBeTruthy();
  });

it("usa clase de éxito cuando el estado es 'Completado'", () => {
  render(<ImageContainer image="/img/p1.png" alt="Proyecto C" status="Completado" />);
  const badge = screen.getByText("Completado");
  expect(/(^|\s)(bg-success|text-bg-success)(\s|$)/.test(badge.className)).toBeTrue();
});

it("usa clase de warning cuando el estado NO es 'Completado'", () => {
  render(<ImageContainer image="/img/p2.png" alt="Proyecto D" status="En desarrollo" />);
  const badge = screen.getByText("En desarrollo");
  expect(/(^|\s)(bg-warning|text-bg-warning)(\s|$)/.test(badge.className)).toBeTrue();
});

  it("aplica las clases CSS correctas", () => {
    render(<ImageContainer image="/img/p3.png" alt="Proyecto E" status="Completado" />);
    const container = screen.getByRole("img", { name: /proyecto e/i }).closest("div");
    expect(container.className).toContain("proyect-image-container");
  });
});
