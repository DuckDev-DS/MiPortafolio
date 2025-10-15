import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../../../components/organisms/Footer";

describe("Footer (Organism)", () => {
  const renderFooter = () =>
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

  it("usa el elemento <footer> con clase 'custom-footer'", () => {
    renderFooter();
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeTruthy();
    expect(footer.className).toContain("custom-footer");
  });

  it("muestra los enlaces rápidos principales", () => {
    renderFooter();
    expect(screen.getByRole("link", { name: /inicio/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /proyectos/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /noticias/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /sobre mí/i })).toBeTruthy();
    expect(screen.getByRole("link", { name: /contactame/i })).toBeTruthy();
  });

  it("cada enlace rápido apunta a su ruta esperada", () => {
    renderFooter();
    expect(screen.getByRole("link", { name: /inicio/i }).getAttribute("href")).toBe("/");
    expect(screen.getByRole("link", { name: /proyectos/i }).getAttribute("href")).toBe("/proyects");
    expect(screen.getByRole("link", { name: /noticias/i }).getAttribute("href")).toBe("/news");
    expect(screen.getByRole("link", { name: /sobre mí/i }).getAttribute("href")).toBe("/abouts");
    expect(screen.getByRole("link", { name: /contactame/i }).getAttribute("href")).toBe("/contacts");
  });

  it("muestra el año actual en el copyright", () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    const anyCopyright =
      screen.getByText((content) => content.includes(year)) || null;
    expect(anyCopyright).toBeTruthy();
  });

  it("renderiza la sección de redes sociales (si existen)", () => {
    renderFooter();
    const socialContainer = document.querySelector(".footer-social .social-links");
    expect(socialContainer).toBeTruthy();
    const anchors = socialContainer ? socialContainer.querySelectorAll("a") : [];
    if (anchors.length > 0) {
      anchors.forEach((a) => {
        expect(a.getAttribute("target")).toBe("_blank");
        expect(a.getAttribute("rel")).toContain("noopener");
      });
    }
  });
});
