import React, { useState } from "react";

export function Project({ title, text, topLabelText, bottomLabelText, date, readMore, circle, textcentered }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.classList.add("dark-background"); 
        document.body.style.overflow = "hidden";
    };
    
    const closeModal = () => {
        setIsOpen(false);
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

            {isOpen && <Modal title={title} text={text} date={date} onClose={closeModal} />}
        </>
    );
}

export function Modal({ title, text, date, onClose }) {
    return (
        <div className="modal-overlay">
            <button className="modal-close" onClick={onClose}>X</button>
            <div className="modal-content">
                <div className="modal-content-top">
                    <h2 className="modal-header">header</h2>
                    <time datetime="">{date}</time>
                </div>
                <figure className="modal-content-img">
                    <img className="modal-img" src="https://placehold.co/400x200" alt="" />
                </figure>
                <div className="modal-content-bottom">
                    <p className="modal-p">lorem ipsum. Lorem ipsum</p>
                    <button className="modal-btn">Bekijk het verhaal</button>
                </div>
            </div>
        </div>
    );
}
