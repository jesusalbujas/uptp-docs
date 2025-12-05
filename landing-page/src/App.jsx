import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CareerCarousel from './components/CareerCarousel';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import './App.css';

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <CareerCarousel />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acerca-de-nosotros" element={<About />} />
            <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
            <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
