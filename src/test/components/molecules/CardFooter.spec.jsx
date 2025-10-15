import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardFooter from "../../../components/molecules/CardFooter";

describe("CardFooter (Molecule)", () => {
  it("renderiza el texto por defecto del botón", () => {
    render(<CardFooter />);
    const button = screen.getByRole("button", { name: /ver detalles/i });
    expect(button).toBeTruthy();
  });

  it("usa el texto personalizado cuando se pasa por props", () => {
    render(<CardFooter buttonText="Abrir proyecto" />);
    const button = screen.getByRole("button", { name: /abrir proyecto/i });
    expect(button).toBeTruthy();
  });

  it("ejecuta la función onViewDetails al hacer clic", () => {
    const onClick = jasmine.createSpy("onClick");
    render(<CardFooter onViewDetails={onClick} />);
    const button = screen.getByRole("button", { name: /ver detalles/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("aplica las clases CSS correctas", () => {
    render(<CardFooter />);
    const button = screen.getByRole("button", { name: /ver detalles/i });
    expect(button.className).toContain("proyect-details-btn");
    expect(button.className).toContain("elegant-blue-btn");
  });
});
