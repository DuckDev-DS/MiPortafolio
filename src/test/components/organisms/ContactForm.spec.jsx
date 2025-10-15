import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../../../components/organisms/ContactForm";

describe("ContactForm (Organism)", () => {
  const makeInputs = () => {
    const onChangeName = jasmine.createSpy("onChangeName");
    const onChangeEmail = jasmine.createSpy("onChangeEmail");
    const onChangeMsg = jasmine.createSpy("onChangeMsg");

    return {
      inputs: [
        {
          id: "name",
          label: "Nombre",
          type: "text",
          placeholder: "Tu nombre",
          value: "",
          onChange: onChangeName,
          required: true,
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "tu@email.com",
          value: "",
          onChange: onChangeEmail,
          required: true,
        },
        {
          id: "message",
          label: "Mensaje",
          type: "textarea",
          rows: 4,
          placeholder: "Tu mensaje",
          value: "",
          onChange: onChangeMsg,
          required: true,
          error: "El mensaje es obligatorio",
        },
      ],
      spies: { onChangeName, onChangeEmail, onChangeMsg },
    };
  };

  it("renderiza el formulario con clase 'contact-form'", () => {
    const { inputs } = makeInputs();
    const { container } = render(<ContactForm inputs={inputs} />);
    const form = container.querySelector("form");
    expect(form).toBeTruthy();
    expect(form.className).toContain("contact-form");
  });

  it("renderiza las etiquetas (labels) y placeholders de cada campo", () => {
    const { inputs } = makeInputs();
    render(<ContactForm inputs={inputs} />);

    expect(screen.getByText("Nombre")).toBeTruthy();
    expect(screen.getByText("Email")).toBeTruthy();
    expect(screen.getByText("Mensaje")).toBeTruthy();

    expect(screen.getByPlaceholderText("Tu nombre")).toBeTruthy();
    expect(screen.getByPlaceholderText("tu@email.com")).toBeTruthy();
    expect(screen.getByPlaceholderText("Tu mensaje")).toBeTruthy();
  });

  it("usa <textarea> cuando type es 'textarea' y aplica rows", () => {
    const { inputs } = makeInputs();
    render(<ContactForm inputs={inputs} />);

    const textarea = screen.getByPlaceholderText("Tu mensaje");
    expect(textarea.nodeName.toLowerCase()).toBe("textarea");
    expect(textarea.getAttribute("rows")).toBe("4");
  });

  it("marca los campos como requeridos cuando corresponde", () => {
    const { inputs } = makeInputs();
    render(<ContactForm inputs={inputs} />);

    const nameInput = screen.getByPlaceholderText("Tu nombre");
    const emailInput = screen.getByPlaceholderText("tu@email.com");
    const msgTextarea = screen.getByPlaceholderText("Tu mensaje");

    expect(nameInput.getAttribute("required")).not.toBeNull();
    expect(emailInput.getAttribute("required")).not.toBeNull();
    expect(msgTextarea.getAttribute("required")).not.toBeNull();
  });

  it("muestra mensajes de error cuando se proveen en el input", () => {
    const { inputs } = makeInputs();
    render(<ContactForm inputs={inputs} />);
    expect(screen.getByText("El mensaje es obligatorio")).toBeTruthy();
  });

  it("ejecuta onSubmit al enviar el formulario", () => {
    const { inputs } = makeInputs();
    const onSubmit = jasmine.createSpy("onSubmit");
    const { container } = render(<ContactForm inputs={inputs} onSubmit={onSubmit} />);

    const form = container.querySelector("form");
    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalled();
  });
});
