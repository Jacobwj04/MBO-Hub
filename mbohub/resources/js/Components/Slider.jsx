import React, { useState, useEffect } from 'react';
import jsonData from '../../data/data.json';

export default function SliderComponent({ width, height }) {
    const slides = jsonData.slider;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const handlePreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        console.log("prev")
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
                <div className="slider__buttonWrapper">
                    <button className="slider__button slider__button--prev" onClick={handlePreviousSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                        </svg>
                    </button>
                    <button className="slider__button slider__button--next" onClick={handleNextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </button>
                </div>
            </figure>
        </section>
    );
}