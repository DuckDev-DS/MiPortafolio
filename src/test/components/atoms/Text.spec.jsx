import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "../../../components/atoms/Text";

describe("Text (Atom)", () => {
  it("renderiza el contenido pasado como children", () => {
    render(<Text>Hola mundo</Text>);
    const text = screen.getByText("Hola mundo");
    expect(text).toBeTruthy();
  });

  it("usa 'p' como elemento por defecto", () => {
    render(<Text>Texto por defecto</Text>);
    const text = screen.getByText("Texto por defecto");
    expect(text.nodeName.toLowerCase()).toBe("p");
  });

  it("cambia el tipo de elemento según el variant", () => {
    render(<Text variant="span">Texto inline</Text>);
    const text = screen.getByText("Texto inline");
    expect(text.nodeName.toLowerCase()).toBe("span");
  });

  it("aplica las clases correctas", () => {
    render(<Text variant="h6" className="resaltado">Importante</Text>);
    const text = screen.getByText("Importante");
    expect(text.className).toContain("text-h6");
    expect(text.className).toContain("resaltado");
  });
});
