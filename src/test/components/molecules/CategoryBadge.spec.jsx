import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryBadge from "../../../components/molecules/CategoryBadge";

describe("CategoryBadge (Molecule)", () => {
  it("renderiza el texto de la categoría", () => {
    render(<CategoryBadge category="Frontend" />);
    const badge = screen.getByText("Frontend");
    expect(badge).toBeTruthy();
  });

  it("usa la clase base 'category-badge'", () => {
    render(<CategoryBadge category="Backend" />);
    const badge = screen.getByText("Backend");
    expect(badge.className).toContain("category-badge");
  });

  it("usa el contenedor con clase 'proyect-category'", () => {
    render(<CategoryBadge category="Fullstack" />);
    const container = screen.getByText("Fullstack").closest("div");
    expect(container.className).toContain("proyect-category");
  });
});
