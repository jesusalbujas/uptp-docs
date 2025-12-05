import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../assets/social/github.ico';
import instagramIcon from '../assets/social/instagram.ico';
import telegramIcon from '../assets/social/telegram.ico';
import uptpIcon from '../assets/uptp.ico';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <div className="logo" style={{ marginBottom: '20px' }}>
                        <img src={uptpIcon} alt="UPTP Logo" className="logo-img" style={{ width: '40px', height: '40px' }} />
                        <span>UPTP JJ Montilla</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-gray)' }}>
                        <span>🇻🇪 Venezuela</span>
                    </div>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>2025 © UPTP JJ Montilla</p>

                    <div className="bot-status">
                        <span className="status-dot"></span>
                        Programadores de la UPTP JJ Montilla
                    </div>
                </div>

                {/* <div className="footer-col">
                    <h4>Links</h4>
                    <ul className="footer-links">
                        <li><a href="https://uptp.sytes.net/">SOGAC UPTP</a></li>
                        <li><a href="#">Support Server</a></li>
                        <li><a href="#">Invite Bot</a></li>
                    </ul>
                </div> */}

                <div className="footer-col">
                    <h4>Social</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="https://uptp.sytes.net/daece/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={uptpIcon} alt="UPTP SOGAC DAECE" style={{ width: '16px', height: '16px' }} />
                                UPTP SOGAC DAECE
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/jesusalbujas/uptp-docs" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={githubIcon} alt="Github" style={{ width: '16px', height: '16px' }} />
                                Github
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/uptpjjmontilla" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={instagramIcon} alt="Instagram" style={{ width: '16px', height: '16px' }} />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/cogracuptp" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={telegramIcon} alt="Telegram" style={{ width: '16px', height: '16px' }} />
                                Únete a nuestro canal de Telegram
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Políticas</h4>
                    <ul className="footer-links">
                        <li><Link to="/terminos-y-condiciones">Términos y Condiciones</Link></li>
                        <li><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                Powered by Jesús Albujas and team UPTP JJ Montilla
            </div>
        </footer>
    );
};

export default Footer;
