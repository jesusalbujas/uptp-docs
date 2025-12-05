import React, { useRef, useEffect } from 'react';

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
            if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                el.scrollBy({ left: 300, behavior: 'smooth' });
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
                if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
                    el.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    el.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }, 3000);
        };

        el.addEventListener("wheel", onWheel);

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
            <p style={{
                textAlign: 'center',
                color: '#b8b8b8',
                fontSize: '1.2rem',
                maxWidth: '800px',
                margin: '0 auto 60px',
                lineHeight: '1.8'
            }}>
                Desde el primer día hasta tu título de <strong style={{ color: '#ff0f22' }}>Ingeniero en Informática</strong>,
                dominarás las tecnologías más demandadas del mercado.
            </p>
            <div className="carousel-container" ref={scrollRef}>
                {items.map((item, index) => (
                    <div className="carousel-item" key={index} style={{ minWidth: '280px', height: '350px' }}>
                        <div style={{
                            height: '100%',
                            background: `linear-gradient(135deg, #000 0%, ${item.color} 100%)`,
                            opacity: 0.9,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '30px 20px',
                            position: 'relative'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '15px',
                                filter: 'drop-shadow(0 0 10px rgba(255, 15, 34, 0.5))'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                color: '#ffffff',
                                marginBottom: '12px',
                                textAlign: 'center'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                color: '#e0e0e0',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                textAlign: 'center',
                                marginBottom: '15px',
                                fontFamily: "'Outfit', sans-serif"
                            }}>
                                {item.desc}
                            </p>
                            <span style={{
                                display: 'inline-block',
                                padding: '6px 12px',
                                background: 'rgba(255, 15, 34, 0.2)',
                                border: '1px solid rgba(255, 15, 34, 0.5)',
                                borderRadius: '20px',
                                color: '#ff0f22',
                                fontSize: '0.75rem',
                                fontWeight: '600',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase'
                            }}>
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
