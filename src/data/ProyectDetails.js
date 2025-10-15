import smartPark from '../../public/img/proyects/SmartPark.webp';
import kozi from '../../public/img/proyects/kozi.webp';
import libreria from '../../public/img/proyects/libreria.webp'

const proyectDetails = {
    1: {
        id: 1,
        title: 'Smart Park - Sistema de Gestión de Estacionamientos',
        shortDescription: 'Backend desarrollado con Spring Boot para gestionar estacionamientos inteligentes.',
        longDescription: `Smart Park es una aplicación backend desarrollada con Spring Boot 3.3.11 y Java 17, diseñada para gestionar estacionamientos inteligentes. Permite controlar la ocupación de plazas, registrar vehículos, y administrar usuarios y espacios mediante una API REST robusta y segura.`,
        
        fullDetails: {
            overview: "Sistema backend completo para gestión de estacionamientos con API RESTful",
            features: [
                'API RESTful construida con Spring Boot',
                'Persistencia de datos con Spring Data JPA y MySQL',
                'Modelo de datos optimizado para estacionamientos inteligentes',
                'Gestión de vehículos, plazas y usuarios',
                'Integración con sensores o sistemas externos',
                'Configuración adaptable mediante application.properties',
                'Uso de Lombok para simplificar el código'
            ],
            architecture: [
                { component: 'Lenguaje', technology: 'Java 17' },
                { component: 'Framework', technology: 'Spring Boot 3.3.11' },
                { component: 'ORM', technology: 'Hibernate / JPA' },
                { component: 'Base de datos', technology: 'MySQL' },
                { component: 'Compilación', technology: 'Maven' },
                { component: 'Utilidades', technology: 'Lombok' },
                { component: 'Servidor embebido', technology: 'Tomcat' }
            ],
            installation: [
                'Java 17 o superior',
                'Maven 3.8+',
                'MySQL 8.x (o base de datos compatible)'
            ],
            endpoints: [
                { method: 'GET', endpoint: '/api/vehiculos', description: 'Lista todos los vehículos' },
                { method: 'POST', endpoint: '/api/vehiculos', description: 'Registra un nuevo vehículo' },
                { method: 'GET', endpoint: '/api/plazas', description: 'Consulta plazas disponibles' },
                { method: 'PUT', endpoint: '/api/plazas/{id}', description: 'Actualiza el estado de una plaza' }
            ],
            team: ['Rocio Mino', 'Patricio Castro', 'Heri Nilo'],
            repository: 'https://github.com/DuckDev-DS/Smart-Park/'
        },

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
    2: {
        id: 2,
        title: 'kOzi 2.5 - Aplicación Móvil Android',
        shortDescription: 'Aplicación móvil desarrollada en Kotlin con Android Studio, actualmente en desarrollo activo.',
        longDescription: `kOzi es una aplicación móvil Android desarrollada en Kotlin, diseñada para ofrecer una experiencia moderna, fluida y adaptable. Esta versión 2.5 se encuentra en desarrollo activo, implementando arquitectura moderna con Jetpack Compose y Room para base de datos local.`,
        
        fullDetails: {
            overview: "Aplicación móvil Android moderna desarrollada con Kotlin y arquitectura MVVM",
            features: [
                'Interfaz de usuario moderna con Jetpack Compose',
                'Arquitectura MVVM con ViewModel y LiveData/Flow',
                'Persistencia local con Room Database',
                'Diseño siguiendo Material Design 3',
                'Compatibilidad con Android 7.0 Nougat (API 24) hasta Android 14',
                'Gradle para gestión de dependencias',
                'Desarrollo en Android Studio'
            ],
            architecture: [
                { component: 'Lenguaje', technology: 'Kotlin' },
                { component: 'IDE', technology: 'Android Studio' },
                { component: 'UI Framework', technology: 'Jetpack Compose' },
                { component: 'Base de datos', technology: 'Room' },
                { component: 'Arquitectura', technology: 'MVVM' },
                { component: 'Estado', technology: 'ViewModel + LiveData/Flow' },
                { component: 'Diseño', technology: 'Material Design 3' }
            ],
            installation: [
                'Android Studio Ladybug o superior',
                'SDK Android API 24-34',
                'Dispositivo con Android 7.0+ o emulador',
                'Kotlin 1.8+',
                'Gradle 8.0+'
            ],
            endpoints: [
                { method: 'Build', endpoint: './gradlew build', description: 'Compila el proyecto' },
                { method: 'Run', endpoint: './gradlew installDebug', description: 'Instala en dispositivo/emulador' },
                { method: 'Test', endpoint: './gradlew test', description: 'Ejecuta pruebas unitarias' }
            ],
            team: ['Patricio Castro Jerez', 'Lucas Huerta'],
            repository: 'https://github.com/DuckDev-DS/kOzi',
            developmentStatus: [
                { module: 'Interfaz de usuario (UI)', status: 'En desarrollo' },
                { module: 'Lógica de negocio', status: 'Parcialmente implementada' },
                { module: 'Base de datos local (Room)', status: 'En pruebas' },
                { module: 'API / Conexión remota', status: 'Pendiente' },
                { module: 'Testing y depuración', status: 'Pendiente' }
            ]
        },

        image: kozi,
        tecnology: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Room', 'Material Design 3', 'ViewModel', 'LiveData', 'Gradle'],
        link: 'https://github.com/DuckDev-DS/kOzi',
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
    3: {
        id: 3,
        title: 'Librería Online - Sitio Web Estático',
        shortDescription: 'Sitio web estático para librería con catálogo de libros, carrito de compras y gestión de usuarios.',
        longDescription: `Proyecto web de Librería desarrollado como sitio estático que permite explorar libros, gestionar un carrito de compras y simular autenticación básica con almacenamiento local. Diseñado con enfoque en experiencia de usuario y responsividad.`,
        
        fullDetails: {
            overview: "Sitio web estático para librería online con funcionalidades de e-commerce básico",
            features: [
                'Catálogo completo de libros con información detallada',
                'Carrito de compras persistente en localStorage',
                'Sistema de autenticación básico con registro e inicio de sesión',
                'Navegación entre secciones (Blog, Nosotros, Libros)',
                'Diseño completamente responsivo con Bootstrap',
                'Iconografía moderna con Font Awesome',
                'Estructura modular y mantenible'
            ],
            architecture: [
                { component: 'Frontend', technology: 'HTML5, CSS3, JavaScript ES6' },
                { component: 'Framework CSS', technology: 'Bootstrap' },
                { component: 'Iconos', technology: 'Font Awesome' },
                { component: 'Almacenamiento', technology: 'localStorage' },
                { component: 'Estructura', technology: 'Modular (MVC pattern)' },
                { component: 'Responsive', technology: 'Mobile First' }
            ],
            installation: [
                'Navegador web moderno (Chrome, Firefox, Safari, Edge)',
                'Servidor local opcional (Live Server, Python http.server)',
                'Editor de código (VS Code recomendado)'
            ],
            endpoints: [
                { method: 'Directo', endpoint: 'Abrir html/blog.html en navegador', description: 'Ejecución básica' },
                { method: 'Live Server', endpoint: 'Extensión VS Code', description: 'Servidor de desarrollo' },
                { method: 'Python', endpoint: 'python -m http.server 5173', description: 'Servidor local Python' }
            ],
            team: ['Daniel Núñez', 'Joel Sangster', 'Patricio Castro'],
            repository: 'https://github.com/DuckDev-DS/TuLibro',
            projectStructure: [
                { folder: 'assets/', description: 'Recursos estáticos (CSS, JS, imágenes)' },
                { folder: 'assets/css/', description: 'Estilos personalizados y Bootstrap' },
                { folder: 'assets/js/', description: 'JavaScript modular para funcionalidades' },
                { folder: 'assets/img/', description: 'Imágenes de libros y recursos visuales' },
                { folder: 'html/', description: 'Páginas principales de la aplicación' },
                { file: 'html/blog.html', description: 'Página de blog y noticias' },
                { file: 'html/libros.html', description: 'Catálogo completo de libros' },
                { file: 'html/nosotros.html', description: 'Información sobre la librería' },
                { file: 'html/usuario.html', description: 'Gestión de usuarios y perfil' },
                { file: 'index.html', description: 'Página principal de inicio' }
            ],
            implementationNotes: [
                'Uso de localStorage para persistencia de datos',
                'Validación de formularios en cliente',
                'Manejo de JSON para datos complejos',
                'Estructura modular para mantenibilidad'
            ]
        },

        image: libreria,
        tecnology: ['HTML5', 'CSS3', 'JavaScript ES6', 'Bootstrap', 'Font Awesome', 'localStorage'],
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
    // agregar más proyectos aquí
};

export default proyectDetails;