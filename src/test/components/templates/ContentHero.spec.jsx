import React from "react";
import { render, screen } from "@testing-library/react";
import ContentHero from "../../../components/templates/ContentHero";

describe("ContentHero (Template)", () => {
  it("renderiza título, subtítulo y descripción cuando se proporcionan", () => {
    render(
      <ContentHero
        title="Título principal"
        subtitle="Subtítulo informativo"
        description="Descripción breve del contenido"
      />
    );

    expect(screen.getByText("Título principal")).toBeTruthy();
    expect(screen.getByText("Subtítulo informativo")).toBeTruthy();
    expect(screen.getByText("Descripción breve del contenido")).toBeTruthy();
  });

  it("renderiza el componente de imagen si se pasa como prop", () => {
    const imageComponent = <img src="/img/test.png" alt="imagen de prueba" />;
    render(<ContentHero imageComponent={imageComponent} />);
    const img = screen.getByAltText("imagen de prueba");
    expect(img).toBeTruthy();
  });

  it("renderiza los componentes de skills y social si se proporcionan", () => {
    const skills = <div data-testid="skills">Habilidades</div>;
    const social = <div data-testid="social">Redes</div>;

    render(<ContentHero skillsComponent={skills} socialComponent={social} />);

    expect(screen.getByTestId("skills")).toBeTruthy();
    expect(screen.getByTestId("social")).toBeTruthy();
  });

  it("agrega la clase 'content-hero-centered' cuando la prop centered es true", () => {
    const { container } = render(<ContentHero centered={true} />);
    expect(container.querySelector(".content-hero-centered")).toBeTruthy();
  });

  it("no agrega la clase 'content-hero-centered' cuando centered es false", () => {
    const { container } = render(<ContentHero centered={false} />);
    expect(container.querySelector(".content-hero-centered")).toBeFalsy();
  });
});
