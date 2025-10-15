import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../../../components/atoms/Avatar"; // ajusta la ruta si es diferente

describe("Avatar (Atom)", () => {
  it("renderiza una imagen con el src y alt indicados", () => {
    render(<Avatar image="/img/user.png" alt="Usuario" />);
    const img = screen.getByRole("img", { name: /usuario/i });
    expect(img).toBeTruthy();
    expect(img.getAttribute("src")).toBe("/img/user.png");
  });

  it("usa el alt por defecto cuando no se pasa prop", () => {
    render(<Avatar image="/img/default.png" />);
    const img = screen.getByRole("img", { name: /avatar/i });
    expect(img).toBeTruthy();
  });

  it("agrega las clases correctas según el tamaño", () => {
    render(<Avatar image="/img/avatar.png" size="small" />);
    const img = screen.getByRole("img");
    expect(img.className).toContain("avatar");
    expect(img.className).toContain("avatar-small");
  });

  it("permite añadir clases personalizadas", () => {
    render(<Avatar image="/img/custom.png" className="red-border" />);
    const img = screen.getByRole("img");
    expect(img.className).toContain("red-border");
  });
});
