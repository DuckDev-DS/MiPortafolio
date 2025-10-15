import React from "react";
import { render, screen } from "@testing-library/react";
import Image from "../../../components/atoms/Image";

describe("Image (Atom)", () => {
  it("renderiza una imagen con el src y alt correctos", () => {
    render(<Image src="/img/test.png" alt="Ejemplo" />);
    const img = screen.getByRole("img", { name: /ejemplo/i });
    expect(img).toBeTruthy();
    expect(img.getAttribute("src")).toBe("/img/test.png");
  });

  it("usa la clase base 'atom-image'", () => {
    render(<Image src="/img/test.png" alt="Imagen base" />);
    const img = screen.getByRole("img", { name: /imagen base/i });
    expect(img.className).toContain("atom-image");
  });

  it("acepta clases adicionales", () => {
    render(<Image src="/img/test.png" alt="Imagen personalizada" className="rounded" />);
    const img = screen.getByRole("img", { name: /imagen personalizada/i });
    expect(img.className).toContain("rounded");
  });

  it("acepta atributos extra", () => {
    render(<Image src="/img/test.png" alt="Con atributos" loading="lazy" data-testid="img1" />);
    const img = screen.getByRole("img", { name: /con atributos/i });
    expect(img.getAttribute("loading")).toBe("lazy");
    expect(img.getAttribute("data-testid")).toBe("img1");
  });
});
