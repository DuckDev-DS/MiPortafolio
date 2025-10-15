import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from "../../../components/atoms/Badge";

describe("Badge (Atom)", () => {
  it("renderiza el texto pasado como children", () => {
    render(<Badge>Nuevo</Badge>);
    const badge = screen.getByText("Nuevo");
    expect(badge).toBeTruthy();
  });

  it("usa la clase por defecto 'badge-primary'", () => {
    render(<Badge>Etiqueta</Badge>);
    const badge = screen.getByText("Etiqueta");
    expect(badge.className).toContain("badge");
    expect(badge.className).toContain("badge-primary");
  });

  it("aplica la clase según el variant", () => {
    render(<Badge variant="success">Completado</Badge>);
    const badge = screen.getByText("Completado");
    expect(badge.className).toContain("badge-success");
  });

  it("acepta clases personalizadas adicionales", () => {
    render(
      <Badge className="rounded-pill" variant="danger">
        Error
      </Badge>
    );
    const badge = screen.getByText("Error");
    expect(badge.className).toContain("badge-danger");
    expect(badge.className).toContain("rounded-pill");
  });
});
