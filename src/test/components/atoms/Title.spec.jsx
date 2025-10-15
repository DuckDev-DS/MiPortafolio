import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../../../components/atoms/Title";

describe("Title (Atom)", () => {
  it("renderiza el texto pasado como children", () => {
    render(<Title>Título Principal</Title>);
    const title = screen.getByText("Título Principal");
    expect(title).toBeTruthy();
  });

  it("usa h1 como elemento por defecto", () => {
    render(<Title>Título por defecto</Title>);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title.nodeName.toLowerCase()).toBe("h1");
  });

  it("cambia el tipo de elemento según el variant", () => {
    render(<Title variant="h3">Subtítulo</Title>);
    const title = screen.getByRole("heading", { level: 3 });
    expect(title.nodeName.toLowerCase()).toBe("h3");
  });

  it("aplica las clases correctas", () => {
    render(<Title variant="h2" className="custom">Texto</Title>);
    const title = screen.getByText("Texto");
    expect(title.className).toContain("title-h2");
    expect(title.className).toContain("custom");
  });
});
