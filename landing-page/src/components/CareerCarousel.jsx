import React, { useRef, useEffect } from 'react';
import './CareerCarousel.css';

const CareerCarousel = () => {
    const scrollRef = useRef(null);

    const items = [
        {
            title: "Soporte Técnico",
            desc: "Inicia tu carrera dominando hardware, ensamblaje de equipos y diagnóstico de fallas. ¡Conviértete en el experto que todos necesitan!",
            icon: "🔧",
            color: "#e50914",
            trayecto: "Trayecto I"
        },
        {
            title: "Desarrollo de Software",
            desc: "Crea aplicaciones increíbles con Python, Java, JavaScript y más. Transforma tus ideas en código que cambia el mundo.",
            icon: "💻",
            color: "#b20710",
            trayecto: "Trayecto II-III"
        },
        {
            title: "Bases de Datos",
            desc: "Domina SQL, PostgreSQL, Oracle y MongoDB. Gestiona millones de datos con eficiencia y seguridad.",
            icon: "🗄️",
            color: "#831010",
            trayecto: "Trayecto II-IV"
        },
        {
            title: "Redes y Conectividad",
            desc: "Diseña redes empresariales, configura routers y switches. Conecta el mundo con tecnología de vanguardia.",
            icon: "🌐",
            color: "#e50914",
            trayecto: "Trayecto III-IV"
        },
        {
            title: "Ciberseguridad",
            desc: "Protege sistemas, realiza pentesting ético y combate amenazas cibernéticas. Sé el guardián digital del futuro.",
            icon: "🔒",
            color: "#b20710",
            trayecto: "Trayecto IV"
        },
        {
            title: "Gestión de Proyectos",
            desc: "Lidera equipos con metodologías ágiles (Scrum, Kanban). Convierte ideas en proyectos exitosos.",
            icon: "📊",
            color: "#831010",
            trayecto: "Trayecto IV"
        },
        {
            title: "Inteligencia Artificial",
            desc: "Explora Machine Learning, Deep Learning y análisis de datos. Construye el futuro con IA.",
            icon: "🤖",
            color: "#e50914",
            trayecto: "Electivas"
        },
        {
            title: "Proyectos Sociales",
            desc: "Aplica tecnología para resolver problemas reales de tu comunidad. Impacta vidas con cada proyecto.",
            icon: "🌍",
            color: "#831010",
            trayecto: "Todos los Trayectos"
        }
    ];

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        // Auto-scroll
        let scrollInterval = setInterval(() => {
            if (!el) return;
            // dynamic width calculation
            const firstCard = el.querySelector('.career-carousel-item');
            const cardWidth = firstCard ? firstCard.offsetWidth : 300;
            const gap = window.innerWidth <= 768 ? 15 : 30; // based on CSS
            const scrollStep = cardWidth + gap;

            if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: scrollStep, behavior: 'smooth' });
            }
        }, 3000);

        // Manual wheel scroll
        const onWheel = e => {
            if (e.deltaY == 0) return;
            e.preventDefault();
            clearInterval(scrollInterval);
            el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: "smooth"
            });
            // Restart auto-scroll after manual interaction
            scrollInterval = setInterval(() => {
                if (!el) return;
                const firstCard = el.querySelector('.career-carousel-item');
                const cardWidth = firstCard ? firstCard.offsetWidth : 300;
                const gap = window.innerWidth <= 768 ? 15 : 30;
                const scrollStep = cardWidth + gap;

                if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
                    el.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    el.scrollBy({ left: scrollStep, behavior: 'smooth' });
                }
            }, 3000);
        };

        el.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            el.removeEventListener("wheel", onWheel);
            clearInterval(scrollInterval);
        };
    }, []);

    return (
        <section className="carousel-section fade-in-section">
            <h2 className="section-title">
                Tu camino hacia el <span>éxito tecnológico</span>
            </h2>
            <p className="carousel-intro">
                Desde el primer día hasta tu título de <strong style={{ color: '#ff0f22' }}>Ingeniero en Informática</strong>,
                dominarás las tecnologías más demandadas del mercado.
            </p>
            <div className="carousel-container" ref={scrollRef}>
                {items.map((item, index) => (
                    <div className="career-carousel-item" key={index}>
                        <div
                            className="carousel-card-inner"
                            style={{
                                background: `linear-gradient(135deg, #000 0%, ${item.color} 100%)`,
                                opacity: 0.9
                            }}
                        >
                            <div className="carousel-icon">
                                {item.icon}
                            </div>
                            <h3 className="carousel-item-title">
                                {item.title}
                            </h3>
                            <p className="carousel-item-desc">
                                {item.desc}
                            </p>
                            <span className="carousel-tag">
                                {item.trayecto}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerCarousel;
