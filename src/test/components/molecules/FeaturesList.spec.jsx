import React from "react";
import { render, screen, within } from "@testing-library/react";
import FeaturesList from "../../../components/molecules/FeaturesList";

describe("FeaturesList (Molecule)", () => {
  const features = ["Responsive", "Login seguro", "Base de datos en la nube"];

  it("renderiza el título 'Características:'", () => {
    render(<FeaturesList features={features} />);
    const heading = screen.getByText(/características:/i);
    expect(heading).toBeTruthy();
  });

  it("muestra todas las características pasadas por props", () => {
    render(<FeaturesList features={features} />);
    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeTruthy();
    });
  });

  it("renderiza la cantidad correcta de elementos <li>", () => {
  const features = ["Responsive", "Login seguro", "Base de datos en la nube"];
  const { container } = render(<FeaturesList features={features} />);
  const list = container.querySelector(".features-list");
  const items = within(list).getAllByRole("listitem");
  expect(items.length).toBe(features.length);
});

  it("aplica las clases principales", () => {
    render(<FeaturesList features={features} />);
    const container = screen.getByText(/características:/i).closest("div");
    expect(container.className).toContain("proyect-features");
  });
});
