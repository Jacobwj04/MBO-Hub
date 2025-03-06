import React, { useState } from "react";
import Modal from "./Modal";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

export default function Project({ title, text, topLabelText, bottomLabelText, date, readMore, circle, textcentered, button, id = 1 }) {
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
            <div className="project-component">
                <figure className="image-container">
                    <AuthenticatedLayout>
                        <a className="editButton" href={ route('projects.edit', id) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                        </a>
                    </AuthenticatedLayout>
                    { topLabelText && <label className="project-top-label">{ topLabelText }</label> }
                    { circle ? (
                        <img className="circle-image" src="https://placehold.co/600x400" alt="image from projects" />
                    ) : (
                        <img className="square-image" src="https://placehold.co/600x400" alt="image from projects" />
                    ) }
                </figure>
                <div className="project-content">
                    { date && <time className="project-date">{date}</time>}
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
                    {readMore && <button className="project-read" onClick={openModal}>{readMore}</button>}
                </div>
            </div>

            {isOpen && <Modal title={title} text={text} date={date} onClose={closeModal} button={button} />}
        </>
    );
}
