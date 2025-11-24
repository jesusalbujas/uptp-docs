import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <div className="logo-img"></div>
                <span>UPTP Informática</span>
            </div>

            <nav className="nav-menu">
                <a href="/" className="nav-link">Inicio</a>
                <a href="/docs/" className="nav-link">Documentación</a>
                <a href="/docs/guide/" className="nav-link">Guía</a>
                <a href="#" className="nav-link">Pensum</a>
            </nav>

            <div className="header-actions">
                <button className="btn btn-primary" onClick={() => window.location.href = '/docs/'}>
                    Ingresar
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {menuOpen ? (
                        <>
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </>
                    ) : (
                        <>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </>
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <a href="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Inicio</a>
                    <a href="/docs/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Documentación</a>
                    <a href="/docs/guide/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Guía</a>
                    <a href="#" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Pensum</a>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={() => window.location.href = '/docs/'}>
                        Ingresar
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
