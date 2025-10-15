import React from "react";
import { Form } from 'react-bootstrap';
import '../../styles/organisms/ContactForm.css';

function ContactForm({ inputs = [], onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <Form className="contact-form" onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
                <Form.Group key={input.id || index} className="mb-3">
                    <Form.Label>{input.label}</Form.Label>
                    <Form.Control
                        type={input.type}
                        as={input.type === 'textarea' ? 'textarea' : 'input'}
                        placeholder={input.placeholder}
                        value={input.value}
                        onChange={input.onChange}
                        rows={input.rows}
                        required={input.required}
                        className="form-control-custom"
                    />
                    {input.error && <div className="text-danger small mt-1">{input.error}</div>}
                </Form.Group>
            ))}
        </Form>
    )
}

export default ContactForm;