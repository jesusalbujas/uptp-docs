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
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }} onClick={() => window.location.href = '/docs/'}>
                        Leer Documentación
                    </button>
                    <button className="btn" style={{ padding: '15px 40px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', color: 'white' }} onClick={() => window.location.href = '/docs/guide/'}>
                        Ver Guía Rápida
                    </button>
                </div>
            </div>

            <div className="hero-illustration" style={{ perspective: 'none', transform: 'none', border: 'none', boxShadow: 'none', marginTop: '120px' }}>
                <TechCube />
            </div>
        </section>
    );
};

export default Hero;
