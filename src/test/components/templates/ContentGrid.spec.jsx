import React from "react";
import { render, screen } from "@testing-library/react";
import ContentGrid from "../../../components/templates/ContentGrid";

describe("ContentGrid (Template)", () => {
  const items = [
    { id: 1, name: "Item A" },
    { id: 2, name: "Item B" },
    { id: 3, name: "Item C" },
  ];

  const renderItem = (item) => (
    <div data-testid={`item-${item.id}`}>{item.name}</div>
  );

  it("renderiza el título y subtítulo por defecto", () => {
    render(<ContentGrid items={[]} renderItem={() => null} />);
    expect(screen.getByText("Contenido")).toBeTruthy();
    expect(screen.getByText("Lista de elementos")).toBeTruthy();
  });

  it("permite personalizar título y subtítulo", () => {
    render(
      <ContentGrid
        title="Catálogo"
        subtitle="Listado actualizado"
        items={[]}
        renderItem={() => null}
      />
    );
    expect(screen.getByText("Catálogo")).toBeTruthy();
    expect(screen.getByText("Listado actualizado")).toBeTruthy();
  });

  it("no muestra el subtítulo cuando se pasa null", () => {
    const { queryByText } = render(
      <ContentGrid title="Solo título" subtitle={null} items={[]} renderItem={() => null} />
    );
    expect(screen.getByText("Solo título")).toBeTruthy();
    expect(queryByText("Lista de elementos")).toBeNull();
  });

  it("muestra el estado vacío cuando no hay items", () => {
    render(<ContentGrid items={[]} renderItem={() => null} />);
    expect(screen.getByText("No hay elementos disponibles")).toBeTruthy();
    expect(
      screen.getByText("Próximamente se agregarán nuevos elementos.")
    ).toBeTruthy();
  });

  it("renderiza los items usando la función renderItem", () => {
    render(<ContentGrid items={items} renderItem={renderItem} />);
    expect(screen.getByTestId("item-1")).toBeTruthy();
    expect(screen.getByTestId("item-2")).toBeTruthy();
    expect(screen.getByTestId("item-3")).toBeTruthy();
    expect(screen.getByText("Item A")).toBeTruthy();
    expect(screen.getByText("Item B")).toBeTruthy();
    expect(screen.getByText("Item C")).toBeTruthy();
  });

  it("permite configurar columnas personalizadas", () => {
    const { container } = render(
      <ContentGrid
        items={items}
        renderItem={renderItem}
        columns={{ lg: 4, xl: 3 }}
      />
    );
    const firstCol = container.querySelector(".content-grid-container .mb-4");
    expect(firstCol).toBeTruthy();
    expect(firstCol.className).toMatch(/\bcol-lg-4\b/);
    expect(firstCol.className).toMatch(/\bcol-xl-3\b/);
  });
});
