import { useState, useEffect } from "react";

const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/550x400",
    "https://placehold.co/500x400",
    "https://placehold.co/600x400",
    "https://placehold.co/550x400",
    "https://placehold.co/500x400",
];

function MultiCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(4);

    useEffect(() => {
        const updateVisibleSlides = () => {
            if (window.innerWidth < 600) {
                setVisibleSlides(1);
            } else if (window.innerWidth < 900) {
                setVisibleSlides(2);
            } else {
                setVisibleSlides(4);
            }
        };

        updateVisibleSlides();
        window.addEventListener("resize", updateVisibleSlides);
        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - (visibleSlides - 1)));
        }, 3000);

        return () => clearInterval(interval);
    }, [visibleSlides]);

    return (
        <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}>
                {images.map((src, idx) => (
                    <img key={idx} src={src} alt={`Slide ${idx}`} className="carousel-image" />
                ))}
            </div>
            <button className="carousel-prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % (images.length - (visibleSlides - 1)))}>
                ◀
            </button>
            <button className="carousel-next" onClick={() => setCurrentIndex((currentIndex + 1) % (images.length - (visibleSlides - 1)))}>
                ▶
            </button>
        </div>
    );
}

export default MultiCarousel;
