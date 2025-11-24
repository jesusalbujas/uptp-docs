import React from 'react';

const BestBot = () => {
    return (
        <section className="best-bot">
            <div className="best-bot-content">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>Best Your Bot</h2>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', marginBottom: '30px' }}>
                    Documentación para UPTP es la mejor documentación para tu carrera.
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>

            <div className="best-bot-image">
                {/* Placeholder for bot interface image */}
                <div style={{ width: '80%', height: '60%', background: 'rgba(111, 66, 193, 0.1)', borderRadius: '10px', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                    <div style={{ width: '100%', height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '10px' }}></div>
                    <div style={{ width: '70%', height: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '30px' }}></div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                        <div style={{ flex: 1 }}>
                            <div style={{ width: '100px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '5px' }}></div>
                            <div style={{ width: '150px', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestBot;
