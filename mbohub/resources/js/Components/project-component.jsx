import React, { useState } from "react";
import Modal from "./Modal";

export default function Project({ title, text, topLabelText, bottomLabelText, date, readMore, circle, textcentered, button }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        let projectComponents = document.querySelectorAll('.project-component');

        if (projectComponents) {
            for (let i = 0; i < projectComponents.length; i++) {
                projectComponents[i].style.zIndex = '-1';
            }
        }
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsOpen(false);
        let projectComponents = document.querySelectorAll('.project-component');

        if (projectComponents) {
            for (let i = 0; i < projectComponents.length; i++) {
                projectComponents[i].style.zIndex = '1';
            }
        }
        document.body.classList.remove("dark-background");
        document.body.style.overflow = "";
    };

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
                    {date && <time className="project-date">{date}</time>}
                    {bottomLabelText && <label className="project-bottom-label">{bottomLabelText}</label>}
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

            {isOpen && <Modal title={title} text={text} date={date} onClose={closeModal} button={button} />}
        </>
    );
}