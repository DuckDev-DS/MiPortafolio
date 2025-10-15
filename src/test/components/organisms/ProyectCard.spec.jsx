import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProyectCard from "../../../components/organisms/ProyectCard";

const proyect = {
  id: 1,
  title: "Sistema Aduanero",
  description: "Proyecto de gestión de aduanas.",
  image: "/img/proyects/falso.webp",
  status: "Completado",
  category: "Backend",
  features: ["Seguridad", "Reportes automáticos", "API REST"],
  tecnology: ["React", "Node.js", "MongoDB", "Bootstrap", "JWT"],
};

function Harness() {
  return (
    <MemoryRouter initialEntries={["/proyects"]}>
      <Routes>
        <Route path="/proyects" element={<ProyectCard proyect={proyect} />} />
        <Route path="/proyects/:id" element={<div>DETAIL OK</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("ProyectCard (Organism)", () => {
  it("renderiza título, descripción y categoría", () => {
    render(<Harness />);
    expect(screen.getByText("Sistema Aduanero")).toBeTruthy();
    expect(screen.getByText("Proyecto de gestión de aduanas.")).toBeTruthy();
    expect(screen.getByText("Backend")).toBeTruthy();
  });

  it("renderiza la lista de características (máximo 3)", () => {
    render(<Harness />);
    proyect.features.slice(0, 3).forEach((f) => {
      expect(screen.getByText(f)).toBeTruthy();
    });
  });

  it("renderiza las tecnologías (máximo 5)", () => {
    render(<Harness />);
    proyect.tecnology.slice(0, 5).forEach((t) => {
      expect(screen.getByText(t)).toBeTruthy();
    });
  });

  it("navega a /proyects/:id al hacer clic en 'Ver detalles'", async () => {
    render(<Harness />);
    const btn = screen.getByRole("button", { name: /ver detalles/i });
    fireEvent.click(btn);
    expect(await screen.findByText("DETAIL OK")).toBeTruthy();
  });

  it("tiene el contenedor con clase proyect-card-col", () => {
    render(<Harness />);
    const title = screen.getByText("Sistema Aduanero");
    const col = title.closest(".proyect-card-col");
    expect(col).toBeTruthy();
  });
});
