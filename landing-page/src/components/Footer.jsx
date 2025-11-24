import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-col">
                    <div className="logo" style={{ marginBottom: '20px' }}>
                        <div className="logo-img"></div>
                        <span>UPTP JJ Montilla</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--text-gray)' }}>
                        <span>🇻🇪 Venezuela</span>
                    </div>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>2025 © UPTP JJ Montilla</p>

                    <div className="bot-status">
                        <span className="status-dot"></span>
                        Bot Online
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">Vote Bot</a></li>
                        <li><a href="#">Support Server</a></li>
                        <li><a href="#">Invite Bot</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Social</h4>
                    <ul className="footer-links">
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Important</h4>
                    <ul className="footer-links">
                        <li><a href="#">Terms Of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                Powered by Code Share ❤️
            </div>
        </footer>
    );
};

export default Footer;
