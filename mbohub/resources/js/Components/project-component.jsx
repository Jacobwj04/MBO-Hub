import React, { useState } from "react";

export function Project({ title, text, topLabelText, bottomLabelText, date, readMore, circle, textcentered }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <div className="project-component" onClick={openModal}>
                <figure className="image-container">
                    {topLabelText && <label className="project-top-label">{topLabelText}</label>}
                    {circle ? (
                        <img className="circle-image" src="https://placehold.co/600x400" alt="image from projects" />
                    ) : (
                        <img className="square-image" src="https://placehold.co/600x400" alt="image from projects" />
                    )}
                </figure>
                <div className="project-content">
                    {bottomLabelText && <label className="project-bottom-label">{bottomLabelText}</label>}
                    {date && <time className="project-date">{date}</time>}
                    {textcentered ? (
                        <>
                            <h2 className="project-h2-center">{title}</h2>
                            <p className="project-summary-center">{text}</p>
                        </>
                    ) : (
                        <>
                            <h2 className="project-h2">{title}</h2>
                            <p className="project-summary">{text}</p>
                        </>
                    )}
                    {readMore && <a className="project-read" href="">{readMore}</a>}
                </div>
            </div>

            {isOpen && <Modal title={title} text={text} onClose={closeModal} />}
        </>
    );
}

export function Modal({ title, text, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <h2>Dit is een header</h2>
                <p>Dit is een p</p>
            </div>
        </div>
    );
}
