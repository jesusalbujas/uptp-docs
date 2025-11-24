import React, { useState, useRef, useEffect } from 'react';
import './TechCube.css';

const PHRASES = [
    "El código es poesía",
    "Piensa, luego compila",
    "El futuro se escribe hoy",
    "Rompe el loop",
    "Bug o Feature?",
    "La nube es de otros",
    "Si funciona, no lo toques",
    "Ctrl + Z no arregla la vida",
    "Programar es arte",
    "Todo es un objeto",
    "Café + Código = Magia",
    "No hay lugar como 127.0.0.1"
];

const TechCube = () => {
    const [rotation, setRotation] = useState({ x: -30, y: -45 });
    const [isDragging, setIsDragging] = useState(false);
    const [facesContent, setFacesContent] = useState([]);
    const lastPosRef = useRef({ x: 0, y: 0 });

    // Select random phrases on mount
    useEffect(() => {
        const shuffled = [...PHRASES].sort(() => 0.5 - Math.random());
        setFacesContent(shuffled.slice(0, 6));
    }, []);

    const handleStart = (clientX, clientY) => {
        setIsDragging(true);
        lastPosRef.current = { x: clientX, y: clientY };
    };

    const handleMove = (clientX, clientY) => {
        if (!isDragging) return;

        const deltaX = clientX - lastPosRef.current.x;
        const deltaY = clientY - lastPosRef.current.y;

        setRotation(prev => ({
            x: prev.x - deltaY * 0.5,
            y: prev.y + deltaX * 0.5
        }));

        lastPosRef.current = { x: clientX, y: clientY };
    };

    const handleEnd = () => {
        setIsDragging(false);
        // Reset to initial position when released
        setRotation({ x: -30, y: -45 });
    };

    // Mouse events
    const handleMouseDown = (e) => {
        e.preventDefault();
        handleStart(e.clientX, e.clientY);
    };

    // Touch events
    const handleTouchStart = (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleStart(touch.clientX, touch.clientY);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            handleMove(e.clientX, e.clientY);
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                handleMove(touch.clientX, touch.clientY);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleEnd);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging]);

    return (
        <div
            className="cube-container"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div className="cube-floater">
                <div
                    className="cube"
                    style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                >
                    <div className="face front">
                        <div className="cube-text">{facesContent[0]}</div>
                    </div>
                    <div className="face back">
                        <div className="cube-text">{facesContent[1]}</div>
                    </div>
                    <div className="face right">
                        <div className="cube-text">{facesContent[2]}</div>
                    </div>
                    <div className="face left">
                        <div className="cube-text">{facesContent[3]}</div>
                    </div>
                    <div className="face top">
                        <div className="cube-text">{facesContent[4]}</div>
                    </div>
                    <div className="face bottom">
                        <div className="cube-text">{facesContent[5]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechCube;
