import { useState, useEffect } from "react";

const images = [
    { placeholder: "https://placehold.co/600x400", link: "https://example.com/image1" },
    { placeholder: "https://placehold.co/600x400", link: "https://example.com/image2" },
    { placeholder: "https://placehold.co/600x400", link: "https://example.com/image3" },
    { placeholder: "https://placehold.co/600x400", link: "https://example.com/image4" },
    { placeholder: "https://placehold.co/600x400", link: "https://example.com/image5" },
    { placeholder: "https://placehold.co/600x400", link: "https://example.com/image6" },
];

function MultiCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(4);

    useEffect(() => {
        const updateVisibleSlides = () => {
            let newVisibleSlides;
            if (window.innerWidth < 600) {
                newVisibleSlides = 1;
            } else if (window.innerWidth < 900) {
                newVisibleSlides = 2;
            } else {
                newVisibleSlides = 4;
            }

            setVisibleSlides((prev) => {
                if (newVisibleSlides !== prev) {
                    setCurrentIndex((prevIndex) => 
                        Math.min(prevIndex, images.length - newVisibleSlides)
                    );
                }
                return newVisibleSlides;
            });
        };

        updateVisibleSlides();
        window.addEventListener("resize", updateVisibleSlides);
        return () => window.removeEventListener("resize", updateVisibleSlides);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const maxIndex = images.length - visibleSlides;
                return prevIndex >= maxIndex ? 0 : prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [visibleSlides]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            Math.min(prevIndex + 1, images.length - visibleSlides)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            Math.max(prevIndex - 1, 0)
        );
    };

    return (
        <div className="carousel">
            <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${(100 / images.length) * currentIndex}%)` }}
            >
                {images.map((image, idx) => (
                    <a className="carousel-link" key={idx} href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.placeholder} alt={`Slide ${idx}`} className="carousel-image" />
                    </a>
                ))}
            </div>
            <button className="carousel-prev" onClick={prevSlide} disabled={currentIndex === 0}>
                ◀
            </button>
            <button className="carousel-next" onClick={nextSlide} disabled={currentIndex >= images.length - visibleSlides}>
                ▶
            </button>
        </div>
    );
}

export default MultiCarousel;
