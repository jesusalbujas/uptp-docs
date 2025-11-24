import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Alta Demanda Laboral",
            text: "La industria tecnológica crece exponencialmente. Asegura tu futuro con una de las carreras más solicitadas del mundo.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            )
        },
        {
            title: "Innovación Constante",
            text: "Sé parte de la revolución digital. Crea soluciones que cambien la forma en que vivimos y trabajamos.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        },
        {
            title: "Desarrollo Creativo",
            text: "La programación es un arte. Transforma tus ideas en realidad mediante el código y el diseño de software.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
            )
        },
        {
            title: "Resolución de Problemas",
            text: "Desarrolla un pensamiento lógico y analítico para enfrentar desafíos complejos y encontrar soluciones eficientes.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        }
    ];

    return (
        <section className="features fade-in-section">
            <h2 className="section-title">¿Por qué estudiar <span>Informática</span>?</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-text">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
