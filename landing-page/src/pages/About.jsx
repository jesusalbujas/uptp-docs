import React from 'react';
import teamImage from '../assets/about/team.png';

const About = () => {
    return (
        <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '140px 40px 80px',
            color: '#ffffff',
            lineHeight: '1.8',
            fontFamily: "'Outfit', sans-serif"
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '30px',
                color: '#ff0f22',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: '700',
                letterSpacing: '-1px',
                textAlign: 'center'
            }}>
                Acerca de Nosotros
            </h1>

            <p style={{
                marginBottom: '40px',
                color: '#b8b8b8',
                fontSize: '1.2rem',
                textAlign: 'center',
                maxWidth: '700px',
                margin: '0 auto 40px'
            }}>
                Somos estudiantes de Ingeniería en Informática de la <strong style={{ color: '#ff0f22' }}>UPTP Juan de Jesús Montilla</strong>,
                comprometidos con compartir conocimiento y facilitar el camino de las nuevas generaciones.
            </p>

            {/* Imagen del equipo */}
            <div style={{
                marginBottom: '60px',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <img
                    src={teamImage}
                    alt="Equipo del Proyecto UPTP Docs"
                    style={{
                        width: '100%',
                        maxWidth: '700px',
                        borderRadius: '20px',
                        border: '2px solid rgba(255, 15, 34, 0.3)',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 15px 50px rgba(255, 15, 34, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
                    }}
                />
            </div>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
                    color: '#ff0f22',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: '700'
                }}>
                    🎯 Nuestra Misión
                </h2>
                <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: '1.9' }}>
                    Crear y mantener una plataforma de documentación completa, accesible y actualizada que sirva como
                    guía fundamental para todos los estudiantes del Programa Nacional de Formación en Informática (PNFI).
                    Queremos que cada estudiante tenga acceso a recursos de calidad que faciliten su aprendizaje y desarrollo profesional.
                </p>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
                    color: '#ff0f22',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: '700'
                }}>
                    👥 El Equipo
                </h2>
                <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '30px' }}>
                    Este proyecto es el resultado del esfuerzo colaborativo de estudiantes apasionados por la tecnología
                    y el código abierto. Creemos firmemente en el poder del conocimiento compartido y en la filosofía del
                    Software Libre, en línea con el Decreto Presidencial N° 3.390.
                </p>

                <div style={{
                    background: 'rgba(255, 15, 34, 0.1)',
                    border: '1px solid rgba(255, 15, 34, 0.3)',
                    borderRadius: '16px',
                    padding: '30px',
                    marginBottom: '20px'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        color: '#ffffff',
                        marginBottom: '15px',
                        fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                        💻 Jesús Albujas
                    </h3>
                    <p style={{ color: '#b8b8b8', fontSize: '1rem', lineHeight: '1.8', marginBottom: '10px' }}>
                        <strong style={{ color: '#ff0f22' }}>Líder del Proyecto & Desarrollador Principal</strong>
                    </p>
                    <p style={{ color: '#b8b8b8', fontSize: '1rem', lineHeight: '1.8' }}>
                        Estudiante de Ingeniería en Informática, apasionado por el desarrollo web, la documentación técnica
                        y el software libre. Responsable de la arquitectura, desarrollo y mantenimiento de esta plataforma.
                    </p>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a
                            href="https://github.com/jesusalbujas"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: '#ff0f22',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontSize: '0.95rem'
                            }}
                        >
                            🔗 GitHub
                        </a>
                    </div>
                </div>

                <p style={{ color: '#b8b8b8', fontSize: '0.95rem', fontStyle: 'italic', textAlign: 'center' }}>
                    Y el apoyo de toda la comunidad de estudiantes de la UPTP JJ Montilla 🎓
                </p>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
                    color: '#ff0f22',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: '700'
                }}>
                    🚀 Tecnologías Utilizadas
                </h2>
                <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '20px' }}>
                    Esta plataforma está construida con tecnologías modernas y de código abierto:
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '15px',
                    marginBottom: '20px'
                }}>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '15px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚛️</div>
                        <strong style={{ color: '#ffffff' }}>React</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Frontend Framework</p>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '15px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📝</div>
                        <strong style={{ color: '#ffffff' }}>VuePress</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Documentation Engine</p>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '15px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎨</div>
                        <strong style={{ color: '#ffffff' }}>CSS3</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Styling</p>
                    </div>
                    <div style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '15px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔧</div>
                        <strong style={{ color: '#ffffff' }}>Vite</strong>
                        <p style={{ fontSize: '0.85rem', color: '#b8b8b8', marginTop: '5px' }}>Build Tool</p>
                    </div>
                </div>
            </section>

            <section style={{ marginBottom: '50px' }}>
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: '20px',
                    color: '#ff0f22',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: '700'
                }}>
                    🤝 Contribuye
                </h2>
                <p style={{ color: '#b8b8b8', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '20px' }}>
                    Este es un proyecto de código abierto y siempre estamos abiertos a contribuciones. Si eres estudiante
                    de la UPTP o simplemente quieres ayudar a mejorar esta documentación, ¡te invitamos a participar!
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a
                        href="https://github.com/jesusalbujas/uptp-docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            background: '#ff0f22',
                            color: '#ffffff',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        🌟 Ver en GitHub
                    </a>
                    <a
                        href="https://t.me/cogracuptp"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '12px 30px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#ffffff',
                            border: '1px solid rgba(255, 15, 34, 0.3)',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        💬 Únete al Telegram
                    </a>
                </div>
            </section>

            <div style={{
                marginTop: '60px',
                padding: '30px',
                backgroundColor: 'rgba(255, 15, 34, 0.1)',
                borderRadius: '12px',
                borderLeft: '4px solid #ff0f22',
                border: '1px solid rgba(255, 15, 34, 0.3)',
                textAlign: 'center'
            }}>
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
