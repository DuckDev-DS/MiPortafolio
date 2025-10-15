import smartPark from '../../public/img/proyects/smartPark.webp'
import kozi from '../../public/img/proyects/kozi.webp'
import libreria from '../../public/img/proyects/libreria.webp'

const proyects = [
    {
        id: 1,
        title: 'Smart Park - Sistema de Gestión de Estacionamientos',
        description: 'Backend desarrollado con Spring Boot para gestionar estacionamientos inteligentes. Permite controlar ocupación de plazas, registrar vehículos y administrar usuarios mediante API REST.',
        image: smartPark,
        tecnology: ['Java 17', 'Spring Boot 3.3.11', 'MySQL', 'Spring Data JPA', 'Hibernate', 'Maven', 'Lombok', 'REST API'],
        link: 'https://github.com/DuckDev-DS/Smart-Park/',
        category: 'Backend',
        status: 'Completado',
        features: [
            'Gestión de vehículos y plazas',
            'API RESTful robusta y segura',
            'Integración con sistemas externos',
            'Configuración adaptable'
        ]
    },
    {
        id: 2,
        title: 'kOzi 2.5 - Aplicación Móvil Android',
        description: 'kOzi es una aplicación móvil desarrollada en Kotlin con Android Studio, diseñada para ofrecer una experiencia moderna, fluida y adaptable dentro del ecosistema Android. Versión 2.5 en desarrollo activo.',
        image: kozi,
        tecnology: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Room', 'Material Design 3', 'ViewModel', 'LiveData', 'Gradle'],
        link: 'https://github.com/DuckDev-DS/kozi',
        category: 'Mobile',
        status: 'En Progreso',
        features: [
            'Interfaz moderna con Jetpack Compose',
            'Base de datos local con Room',
            'Arquitectura MVVM',
            'Compatibilidad Android 7.0+',
            'Material Design 3'
        ]
    },
    {
        id: 3,
        title: 'Librería Online - Sitio Web Estático',
        description: 'Sitio web estático para librería con catálogo de libros, carrito de compras y gestión de usuarios mediante localStorage. Diseño responsivo con Bootstrap.',
        image: libreria,
        tecnology: ['HTML5', 'CSS', 'JavaScript ES6', 'Bootstrap', 'Font Awesome', 'localStorage'],
        link: 'https://github.com/DuckDev-DS/TuLibro',
        category: 'Frontend',
        status: 'Completado',
        features: [
            'Catálogo de libros interactivo',
            'Carrito de compras persistente',
            'Autenticación de usuarios',
            'Diseño responsivo con Bootstrap',
            'Navegación entre múltiples páginas'
        ]
    }
];

export default proyects;