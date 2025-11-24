import React, { useRef, useEffect } from 'react';

const CareerCarousel = () => {
    const scrollRef = useRef(null);

    const items = [
        {
            title: "Programación",
            desc: "Domina lenguajes como Python, Java, C++ y JavaScript.",
            color: "#e50914"
        },
        {
            title: "Desarrollo Web",
            desc: "Crea sitios y aplicaciones web modernas y responsivas.",
            color: "#b20710"
        },
        {
            title: "Bases de Datos",
            desc: "Diseña y gestiona grandes volúmenes de información.",
            color: "#831010"
        },
        {
            title: "Redes y Seguridad",
            desc: "Protege infraestructuras y conecta el mundo.",
            color: "#e50914"
        },
        {
            title: "Inteligencia Artificial",
            desc: "El futuro es ahora. Aprende Machine Learning y Data Science.",
            color: "#b20710"
        },
        {
            title: "Gestión de Proyectos",
            desc: "Lidera equipos y lleva ideas al éxito.",
            color: "#831010"
        }
    ];

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <section className="carousel-section fade-in-section">
            <h2 className="section-title">Lo que aprenderás en la <span>Carrera</span></h2>
            <div className="carousel-container" ref={scrollRef}>
                {items.map((item, index) => (
                    <div className="carousel-item" key={index}>
                        <div style={{
                            height: '100%',
                            background: `linear-gradient(45deg, #000, ${item.color} 150%)`,
                            opacity: 0.8
                        }}></div>
                        <div className="carousel-content">
                            <h3 className="carousel-title">{item.title}</h3>
                            <p className="carousel-desc">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CareerCarousel;
