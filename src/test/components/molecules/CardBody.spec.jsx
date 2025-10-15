import React from "react";
import { render, screen } from "@testing-library/react";
import CardBody from "../../../components/molecules/CardBody";

describe("CardBody (Molecule)", () => {
  it("renderiza el título dentro de un Text con variante h5", () => {
    render(<CardBody title="Proyecto A" description="Sistema de prueba" />);
    const title = screen.getByText("Proyecto A");
    expect(title).toBeTruthy();
    expect(title.className).toContain("proyect-title");
  });

  it("renderiza la descripción dentro de un Text con variante p", () => {
    render(<CardBody title="Proyecto B" description="Descripción breve" />);
    const description = screen.getByText("Descripción breve");
    expect(description).toBeTruthy();
    expect(description.className).toContain("proyect-description");
  });

  it("muestra ambos elementos de texto al mismo tiempo", () => {
    render(<CardBody title="Proyecto C" description="En desarrollo" />);
    const title = screen.getByText("Proyecto C");
    const description = screen.getByText("En desarrollo");
    expect(title).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
