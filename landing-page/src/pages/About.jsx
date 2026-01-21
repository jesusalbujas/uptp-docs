import React from 'react';
import teamImage from '../assets/about/team.png';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">
                Acerca de Nosotros
            </h1>

            <p className="about-intro">
                Somos estudiantes de Ingeniería en Informática de la <strong style={{ color: '#ff0f22' }}>UPTP Juan de Jesús Montilla</strong>,
                comprometidos con compartir conocimiento y facilitar el camino de las nuevas generaciones.
            </p>

            {/* Imagen del equipo */}
            <div className="about-team-image-container">
                <img
                    src={teamImage}
                    alt="Equipo del Proyecto UPTP Docs"
                    className="about-team-image"
                />
            </div>

            <section className="about-section">
                <h2 className="about-section-title">
                    🎯 Nuestra Misión
                </h2>
                <p className="about-text">
                    Crear y mantener una plataforma de documentación completa, accesible y actualizada que sirva como
                    guía fundamental para todos los estudiantes del Programa Nacional de Formación en Informática (PNFI).
                    Queremos que cada estudiante tenga acceso a recursos de calidad que faciliten su aprendizaje y desarrollo profesional.
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-section-title">
                    👥 El Equipo
                </h2>
                <p className="about-text" style={{ marginBottom: '30px' }}>
                    Este proyecto es el resultado del esfuerzo colaborativo de estudiantes apasionados por la tecnología
                    y el código abierto. Creemos firmemente en el poder del conocimiento compartido y en la filosofía del
                    Software Libre, en línea con el Decreto Presidencial N° 3.390.
                </p>

                <div className="team-card">
                    <h3 className="team-member-name">
                        💻 Jesús Albujas
                    </h3>
                    <p className="about-text" style={{ marginBottom: '10px' }}>
                        <strong style={{ color: '#ff0f22' }}>Líder del Proyecto & Desarrollador Principal</strong>
                    </p>
                    <p className="about-text">
                        Estudiante de Ingeniería en Informática, apasionado por el desarrollo web, la documentación técnica
                        y el software libre. Responsable de la arquitectura, desarrollo y mantenimiento de esta plataforma.
                    </p>
                    <div className="team-links">
                        <a
                            href="https://github.com/jesusalbujas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-link"
                        >
                            🔗 GitHub
                        </a>
                    </div>
                </div>

                <p className="about-text" style={{ fontStyle: 'italic', textAlign: 'center' }}>
                    Y el apoyo de toda la comunidad de estudiantes de la UPTP JJ Montilla 🎓
                </p>
            </section>

            <section className="about-section">
                <h2 className="about-section-title">
                    🚀 Tecnologías Utilizadas
                </h2>
                <p className="about-text" style={{ marginBottom: '20px' }}>
                    Esta plataforma está construida con tecnologías modernas y de código abierto:
                </p>
                <div className="tech-grid">
                    <div className="tech-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚛️</div>
                        <strong style={{ color: '#ffffff' }}>React</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Frontend Framework</p>
                    </div>
                    <div className="tech-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📝</div>
                        <strong style={{ color: '#ffffff' }}>VuePress</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Documentation Engine</p>
                    </div>
                    <div className="tech-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎨</div>
                        <strong style={{ color: '#ffffff' }}>CSS3</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Styling</p>
                    </div>
                    <div className="tech-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔧</div>
                        <strong style={{ color: '#ffffff' }}>Vite</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Build Tool</p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h2 className="about-section-title">
                    🤝 Contribuye
                </h2>
                <p className="about-text" style={{ marginBottom: '20px' }}>
                    Este es un proyecto de código abierto y siempre estamos abiertos a contribuciones. Si eres estudiante
                    de la UPTP o simplemente quieres ayudar a mejorar esta documentación, ¡te invitamos a participar!
                </p>
                <div className="contribute-links">
                    <a
                        href="https://github.com/jesusalbujas/uptp-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-github"
                    >
                        🌟 Ver en GitHub
                    </a>
                    <a
                        href="https://t.me/cogracuptp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-telegram"
                    >
                        💬 Únete al Telegram
                    </a>
                </div>
            </section>

            <div className="about-footer">
                <p style={{ margin: 0, fontSize: '1.1rem', color: '#b8b8b8', lineHeight: '1.8' }}>
                    <strong style={{ color: '#ff0f22' }}>Hecho con ❤️ por estudiantes, para estudiantes</strong>
                    <br />
                    <span style={{ fontSize: '0.95rem' }}>
                        Universidad Politécnica Territorial "Juan de Jesús Montilla"
                    </span>
                </p>
            </div>
        </div>
    );
};

export default About;
