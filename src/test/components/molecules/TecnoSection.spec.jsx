import React from "react";
import { render, screen } from "@testing-library/react";
import TecnoSection from "../../../components/molecules/TecnoSection";

describe("TecnoSection (Molecule)", () => {
  const technologies = ["React", "Node.js", "MongoDB"];

  it("renderiza el título 'Tecnologías:'", () => {
    render(<TecnoSection technologies={technologies} />);
    const heading = screen.getByText(/tecnologías:/i);
    expect(heading).toBeTruthy();
  });

  it("muestra todas las tecnologías pasadas por props", () => {
    render(<TecnoSection technologies={technologies} />);
    technologies.forEach((tech) => {
      expect(screen.getByText(tech)).toBeTruthy();
    });
  });

  it("aplica las clases de estilo principales", () => {
    render(<TecnoSection technologies={technologies} />);
    const container = screen.getByRole("heading", { name: /tecnologías:/i }).closest("div");
    expect(container.className).toContain("proyect-technologies");
  });

  it("renderiza la cantidad correcta de etiquetas", () => {
    render(<TecnoSection technologies={technologies} />);
    const tags = screen.getAllByText(/react|node\.js|mongodb/i);
    expect(tags.length).toBe(technologies.length);
  });
});
