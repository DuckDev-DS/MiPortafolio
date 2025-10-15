import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/Home";

describe("Home Page", () => {
  const renderHome = () =>
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

  it("renderiza sin fallar y muestra imagen y título principal", () => {
    const { container } = renderHome();
    const h1 = container.querySelector("h1");
    expect(h1).toBeTruthy();
    expect(h1.textContent.trim().length).toBeGreaterThan(0);
    const img = container.querySelector("img");
    expect(img).toBeTruthy();
  });

  it("muestra la sección de tecnologías y los botones sociales", () => {
    const { container } = renderHome();
    expect(screen.getByText("Tecnologías:")).toBeTruthy();
    const social = container.querySelector(".home-social-buttons");
    expect(social).toBeTruthy();
    const anchors = social.querySelectorAll("a");
    anchors.forEach((a) => {
      expect(a.getAttribute("target")).toBe("_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    });
  });
});
