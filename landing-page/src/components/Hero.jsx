import React from 'react';
import TechCube from './TechCube';

const Hero = () => {
    return (
        <section className="hero fade-in-section is-visible">
            <div className="hero-content">
                <div className="hero-badge">"Si puedes imaginarlo, puedes programarlo"</div>
                <h1 className="hero-title">
                    Documentación <br />
                    <span>UPTP JJ Montilla</span>
                </h1>
                <span className="hero-subtitle">La guía definitiva para tu carrera</span>
                <p className="hero-desc">
                    Accede a todos los recursos, guías de estudio y documentación técnica
                    necesaria para triunfar en la carrera de Ingeniería en Informática.
                </p>
                <div className="hero-stats-grid">
                    <div className="hero-stat-card">
                        <div className="stat-icon">🎓</div>
                        <div className="stat-value">4 Años</div>
                        <div className="stat-label">Duración</div>
                    </div>
                    <div className="hero-stat-card">
                        <div className="stat-icon">🏆</div>
                        <div className="stat-value">2 Títulos</div>
                        <div className="stat-label">Certificaciones</div>
                    </div>
                    <div className="hero-stat-card">
                        <div className="stat-icon">🌍</div>
                        <div className="stat-value">100%</div>
                        <div className="stat-label">Proyectos Reales</div>
                    </div>
                </div>
            </div>

            <div className="hero-illustration" style={{ perspective: 'none', transform: 'none', border: 'none', boxShadow: 'none', marginTop: '120px' }}>
                <TechCube />
            </div>
        </section>
    );
};

export default Hero;
