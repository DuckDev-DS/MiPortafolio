import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../../pages/NotFounds";

describe("NotFound Page", () => {
  it("se renderiza correctamente (smoke)", () => {
    const { container } = render(<NotFound />);
    expect(container.firstChild).toBeTruthy();
  });

  it("muestra la imagen con el alt esperado y clase img-fluid", () => {
    render(<NotFound />);
    const image = screen.getByAltText("Not Found Image");
    expect(!!image).toBeTrue();
    const className = image.getAttribute("class") || "";
    expect(className.includes("img-fluid")).toBeTrue();
  });
});
