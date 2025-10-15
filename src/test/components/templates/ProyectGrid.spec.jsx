import React from "react";
import { render, screen } from "@testing-library/react";
import ProyectGrid from "../../../components/templates/ProyectGrid";

describe("ProyectGrid (Template)", () => {
  it("renderiza el título y subtítulo por defecto", () => {
    render(<ProyectGrid projects={[]} renderProyectCard={() => null} />);
    expect(screen.getByText("Mis Proyectos")).toBeTruthy();
    expect(screen.getByText("Desarrollos y soluciones tecnológicas")).toBeTruthy();
  });

  it("muestra el estado vacío cuando no hay proyectos", () => {
    render(<ProyectGrid projects={[]} renderProyectCard={() => null} />);
    expect(screen.getByText("No hay proyectos disponibles")).toBeTruthy();
    expect(
      screen.getByText("Próximamente se agregarán nuevos proyectos.")
    ).toBeTruthy();
  });

  it("renderiza los proyectos usando la función renderProyectCard", () => {
    const projects = [
      { id: 1, title: "Proyecto A" },
      { id: 2, title: "Proyecto B" },
    ];

    const renderProyectCard = (proyect) => (
      <div data-testid={`proyect-${proyect.id}`}>{proyect.title}</div>
    );

    render(<ProyectGrid projects={projects} renderProyectCard={renderProyectCard} />);

    expect(screen.getByTestId("proyect-1")).toBeTruthy();
    expect(screen.getByTestId("proyect-2")).toBeTruthy();
    expect(screen.getByText("Proyecto A")).toBeTruthy();
    expect(screen.getByText("Proyecto B")).toBeTruthy();
  });

  it("permite personalizar el título y subtítulo", () => {
    render(
      <ProyectGrid
        title="Portafolio de Aplicaciones"
        subtitle="Proyectos recientes"
        projects={[]}
        renderProyectCard={() => null}
      />
    );

    expect(screen.getByText("Portafolio de Aplicaciones")).toBeTruthy();
    expect(screen.getByText("Proyectos recientes")).toBeTruthy();
  });
});
