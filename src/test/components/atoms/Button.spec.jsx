import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/atoms/Button"; // ajusta si tu ruta difiere

describe("Button (Atom) — básico", () => {
  it("renderiza correctamente con el texto indicado", () => {
    render(<Button>Presionar</Button>);
    const btn = screen.getByRole("button", { name: /presionar/i });
    // Básico: solo que exista (sin toBeInTheDocument)
    expect(btn).toBeTruthy();
  });

  it("ejecuta la función onClick al hacer clic", () => {
    const handleClick = jasmine.createSpy("handleClick");
    render(<Button onClick={handleClick}>Click</Button>);
    const btn = screen.getByRole("button", { name: /click/i });
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  it("respeta la propiedad disabled", () => {
    const handleClick = jasmine.createSpy("handleClick");
    render(
      <Button disabled onClick={handleClick}>
        No tocar
      </Button>
    );
    const btn = screen.getByRole("button", { name: /no tocar/i });
    expect(btn.disabled).toBeTrue();
    expect(btn.getAttribute("disabled")).not.toBeNull();
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
