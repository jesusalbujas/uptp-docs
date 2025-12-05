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
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '20px',
                    maxWidth: '700px',
                    margin: '0 auto',
                    marginTop: '40px'
                }}>
                    <div style={{
                        background: 'rgba(255, 15, 34, 0.1)',
                        border: '1px solid rgba(255, 15, 34, 0.3)',
                        borderRadius: '16px',
                        padding: '20px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🎓</div>
                        <div style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            color: '#ff0f22',
                            fontFamily: "'Space Grotesk', sans-serif",
                            marginBottom: '5px'
                        }}>4 Años</div>
                        <div style={{ fontSize: '0.85rem', color: '#b8b8b8' }}>Duración</div>
                    </div>
                    <div style={{
                        background: 'rgba(255, 15, 34, 0.1)',
                        border: '1px solid rgba(255, 15, 34, 0.3)',
                        borderRadius: '16px',
                        padding: '20px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🏆</div>
                        <div style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            color: '#ff0f22',
                            fontFamily: "'Space Grotesk', sans-serif",
                            marginBottom: '5px'
                        }}>2 Títulos</div>
                        <div style={{ fontSize: '0.85rem', color: '#b8b8b8' }}>Certificaciones</div>
                    </div>

                    <div style={{
                        background: 'rgba(255, 15, 34, 0.1)',
                        border: '1px solid rgba(255, 15, 34, 0.3)',
                        borderRadius: '16px',
                        padding: '20px',
                        textAlign: 'center',
                        transition: 'all 0.3s ease'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🌍</div>
                        <div style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            color: '#ff0f22',
                            fontFamily: "'Space Grotesk', sans-serif",
                            marginBottom: '5px'
                        }}>100%</div>
                        <div style={{ fontSize: '0.85rem', color: '#b8b8b8' }}>Proyectos Reales</div>
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
