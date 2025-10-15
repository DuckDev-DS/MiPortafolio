import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import ContactForm from '../components/organisms/ContactForm';
import BackButton from '../components/atoms/BackButton'
import '../styles/pages/Contact.css';
import '../styles/atoms/Button.css'

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        mensaje: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Ingresa un email válido (debe contener @ y .)';
        }

        if (!formData.mensaje.trim()) {
            newErrors.mensaje = 'El mensaje es requerido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const formInputs = [
        {
            id: 'name',
            type: 'text',
            label: 'Nombre',
            placeholder: 'Ingresa tu nombre',
            value: formData.name,
            onChange: (e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
            },
            required: true,
            error: errors.name
        },
        {
            id: 'email',
            type: 'email',
            label: 'Correo',
            placeholder: 'tuemail@ejemplo.com',
            value: formData.email,
            onChange: (e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
            },
            required: true,
            error: errors.email
        },
        {
            id: 'mensaje',
            type: 'textarea',
            label: 'Mensaje',
            placeholder: 'Escribe tu mensaje aquí...',
            rows: 5,
            value: formData.mensaje,
            onChange: (e) => {
                setFormData({ ...formData, mensaje: e.target.value });
                if (errors.mensaje) setErrors({ ...errors, mensaje: '' });
            },
            required: true,
            error: errors.mensaje
        },
    ];

    const handleSubmit = () => {
        if (!validateForm()) {
            return;
        }
        
        const message = `Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.mensaje}`;
        console.log('Mensaje enviado:', message);
        
        setShowAlert(true);
        
        setTimeout(() => {
            setFormData(initialFormData);
            setShowAlert(false);
        }, 5000);
    };

    return (
        <Container fluid className="contact-page-wrapper">
            <Container>
                <div className="text-center mb-5">
                    <BackButton/>
                    <h1 className="contact-title">Contacto</h1>
                    <p className="contact-subtitle mt-3">
                        ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
                    </p>
                </div>
                
                <div className="contact-form-card">
                    {showAlert && (
                        <Alert variant="success" className="contact-alert">
                            ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
                        </Alert>
                    )}
                    
                    <ContactForm inputs={formInputs} onSubmit={handleSubmit} />
                    <div className="form-actions text-center mt-4">
                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                            className="contact-submit-btn"
                            size="lg"
                        >
                            Enviar Mensaje
                        </Button>
                    </div>
                </div>
            </Container>
        </Container>
    );
}

export default Contact;