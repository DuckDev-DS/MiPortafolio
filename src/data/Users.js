import userPhoto from '../../public/img/users/userPhoto.webp'

const user = {
    personalInfo: {
        name: "Patricio Castro Jerez",
        title: "Desarrollador FullStack",
        email: "pa.castroj@duocuc.cl",
        phone: "+56957991309",
        location: "Santiago, Chile",
        about: "Ingeniero en formación con enfoque en el desarrollo de software, la innovación tecnológica y la búsqueda constante de soluciones que conecten la lógica con la creatividad.",
        avatar: userPhoto,
        //bio
        fullBio: `Soy un desarrollador FullStack apasionado por crear soluciones tecnológicas innovadoras y eficientes. 
        Un fuerte enfoque en las mejores prácticas 
        de desarrollo, me especializo en construir aplicaciones web escalables y de alto rendimiento.

        Mi journey en el desarrollo comenzó hace 2 años, y desde entonces he trabajado en diversos proyectos 
        que van desde aplicaciones empresariales hasta soluciones de e-commerce. Disfruto especialmente del desafío 
        de transformar ideas complejas en código limpio y mantenible.

        Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source 
        y mantenerme actualizado con las últimas tendencias del desarrollo web.`,
        //pashion
        passions: [
            "Crear experiencias de usuario excepcionales",
            "Arquitectura de software escalable", 
            "Optimización de performance",
            "Code review y mejores prácticas",
            "Mentoría y compartir conocimiento"
        ],
        
        philosophy: "Creo en el código limpio, la documentación clara y la colaboración efectiva como pilares para construir software de calidad."
    },

    skills: [
        "JavaScript", "React", "Node.js", "Python", "HTML/CSS",
        "Git", "RESTful APIs",
        "Responsive Design", "Bootstrap"
    ],

    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/DuckDev-DS",
            icon: "bi bi-github"  
        },
        {
            name: "LinkedIn", 
            url: "https://linkedin.com/in/Patricio-Castro-Jerez",
            icon: "bi bi-linkedin"  
        }
    ],

    // Experiencia
    experience: [
        {
            period: "2025 - 1er Semestre",
            role: "Desarrollador Backend",
            description: "Desarrollo de aplicaciones web personalizadas para clientes diversos, enfocado en soluciones escalables y mantenibles."
        },
        {
            period: "2022 - 2023", 
            role: "Desarrollador Frontend",
            description: "Creación de interfaces de usuario responsive y componentes reutilizables en React para aplicaciones empresariales."
        }
    ],

    // Metas
    goals: [
        "Dominar arquitecturas de microservicios",
        "Contribuir más a proyectos open source",
        "Aprender Go o Rust",
        "Mentorear a nuevos desarrolladores",
        "Trabajar en proyectos con impacto social"
    ]
}

export default user;