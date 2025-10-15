import new1 from '../../public/img/news/new_Nobel.webp'
import new2 from '../../public/img/news/new2_SmartPark.webp'
import new3 from '../../public/img/news/new3_tecno.webp'

const newsDetails = {
    1: {
        id: 1,
        title: "Reconocimiento Internacional: Premio Nobel de la Paz",
        excerpt: "He sido honrado con el Premio Nobel de la Paz por mi contribución al desarrollo de tecnología para la resolución de conflictos.",
        image: new1,
        date: "2024-02-20",
        category: "Reconocimiento",
        fullContent: `
            <h3>Premio Nobel de la Paz 2024</h3>
            
            <p>Con gran humildad y honor, comparto que he sido galardonado con el Premio Nobel de la Paz 2024 por mi trabajo en el desarrollo de tecnologías que promueven la resolución pacífica de conflictos y la cooperación internacional.</p>
            
            <h4>El Proyecto que Marcó la Diferencia</h4>
            <p>El reconocimiento se centra en mi proyecto "PeaceBuilder", una plataforma digital que utiliza inteligencia artificial y análisis de datos para facilitar el diálogo entre comunidades en conflicto. Durante los últimos tres años, esta plataforma ha sido implementada en más de 15 países, ayudando a mediar en disputas territoriales, conflictos culturales y tensiones sociales.</p>
            
            <h4>Tecnología al Servicio de la Paz</h4>
            <p>PeaceBuilder combina:</p>
            <ul>
                <li>Algoritmos de procesamiento de lenguaje natural para analizar discursos y detectar puntos en común</li>
                <li>Plataformas de comunicación segura para diálogos confidenciales</li>
                <li>Herramientas de visualización de datos que muestran interconexiones entre comunidades</li>
                <li>Sistemas de alerta temprana para prevenir escaladas de violencia</li>
            </ul>
            
            <h4>Impacto Medible</h4>
            <p>Los resultados concretos incluyen:</p>
            <ul>
                <li>Reducción del 40% en incidentes violentos en regiones donde se implementó</li>
                <li>Facilitación de 47 acuerdos de paz locales</li>
                <li>Capacitación de más de 500 mediadores comunitarios</li>
                <li>Creación de redes de cooperación entre 200 comunidades anteriormente enfrentadas</li>
            </ul>
            
            <h4>Próximos Pasos</h4>
            <p>El premio incluye una dotación económica que será destinada completamente a expandir el proyecto. Planeamos:</p>
            <ul>
                <li>Traducir la plataforma a 10 idiomas adicionales</li>
                <li>Implementar en 20 nuevos países durante 2025</li>
                <li>Desarrollar módulos especializados para conflictos ambientales</li>
                <li>Crear programas de formación para jóvenes líderes de paz</li>
            </ul>
            
            <p>Este reconocimiento no es solo mío, sino de todo el equipo que ha trabajado incansablemente y de las comunidades que han creído en el poder de la tecnología para construir puentes.</p>
            
            <p>La ceremonia de entrega se realizará en Oslo el 10 de diciembre de 2024, donde tendré el honor de representar a todos los desarrolladores que creen que la tecnología puede ser una fuerza para el bien en el mundo.</p>
        `,
        author: "Patricio Castro Jerez",
        tags: ["Premio Nobel", "Paz", "Tecnología", "Innovación Social", "Impacto Global"]
    },

    2: {
        id: 2,
        title: "Lanzamiento de Smart Park",
        excerpt: "Hemos lanzado oficialmente nuestro sistema de gestión de estacionamientos inteligentes.",
        image: new2,
        date: "2025-05-15",
        category: "Lanzamiento",
        fullContent: `
            <h3>Lanzamiento de Smart Park</h3>
            
            <p>Hemos lanzado oficialmente Smart Park, nuestro sistema de gestión de estacionamientos inteligentes desarrollado con Spring Boot y Java 17.</p>
            
            <h4>Características Principales</h4>
            <ul>
                <li>Control en tiempo real de la ocupación de plazas</li>
                <li>API RESTful robusta y segura</li>
                <li>Gestión integral de vehículos y usuarios</li>
                <li>Panel administrativo completo</li>
                <li>Arquitectura escalable y adaptable</li>
            </ul>
            
            <h4>Tecnologías Implementadas</h4>
            <p>El sistema fue desarrollado utilizando Spring Boot 3.3.11, Java 17, MySQL y Spring Data JPA, garantizando alto rendimiento y confiabilidad.</p>
        `,
        author: "SmartPark Team",
        tags: ["Spring Boot", "Java", "MySQL", "Backend"]
    },
    
    3: {
        id: 3,
        title: "Nuevas Tecnologías en Desarrollo",
        excerpt: "Estamos explorando React 18 y Next.js para mejorar nuestras aplicaciones.",
        image: new3,
        date: "2024-01-10",
        category: "Tecnología",
        fullContent: `
            <h3>Actualización de Stack Tecnológico</h3>
            
            <p>Estamos incorporando React 18 y Next.js a nuestro stack de desarrollo frontend para ofrecer aplicaciones más rápidas y eficientes.</p>
            
            <h4>Mejoras Implementadas</h4>
            <ul>
                <li>Concurrent Features de React 18 para mejor rendimiento</li>
                <li>Server Side Rendering con Next.js para mejor SEO</li>
                <li>Optimización automática de imágenes y assets</li>
                <li>Mejor experiencia de usuario en actualizaciones</li>
            </ul>
        `,
        author: "TecnoTeam",
        tags: ["React", "Next.js", "Frontend", "JavaScript"]
    }
};

export default newsDetails;