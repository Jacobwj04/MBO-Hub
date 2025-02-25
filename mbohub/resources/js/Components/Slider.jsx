import React, { useState, useEffect } from 'react';
import jsonData from '../../data/data.json';

export default function SliderComponent( {width, height} ) {
    const slides = jsonData.slider;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        // Corrected previous slide logic.
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const startAutomaticChange = () => {
        clearInterval(intervalId);
        const id = setInterval(handleNextSlide, 8000);
        setIntervalId(id);
    };

    useEffect(() => {
        startAutomaticChange();
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const currentSlide = slides[currentIndex];

    if (!currentSlide) {
        return <div>Loading...</div>;
    }

    return (
        <section className="slider" onMouseEnter={startAutomaticChange} onMouseLeave={startAutomaticChange}>
            <figure className="slider__figure">
                <img
                    src={`/img/${currentSlide.image}`}
                    alt={currentSlide.alt} 
                    className="slider__image"
                />
                <h2 className="slider__title">{currentSlide.title}</h2>
                <button className="slider__button slider__button--prev" onClick={handlePreviousSlide}>
                    <span>&lt;</span>
                </button>
                <button className="slider__button slider__button--next" onClick={handleNextSlide}>
                    <span>&gt;</span>
                </button>
            </figure>
        </section>
    );
}