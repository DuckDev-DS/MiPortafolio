import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../../../components/organisms/NavBar";

describe("NavBar (Organism)", () => {
  it("renderiza el nombre de la marca", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const brand = screen.getByText("Mi Portafolio");
    expect(brand).toBeTruthy();
  });

  it("muestra todos los enlaces principales", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const links = ["Inicio", "Proyectos", "Noticias", "Sobre Mí", "Contactame"];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeTruthy();
    });
  });

  it("usa la clase 'navbar-custom' en el contenedor principal", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const navbar = screen.getByRole("navigation");
    expect(navbar.className).toContain("navbar-custom");
  });
});
