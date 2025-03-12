import React, { useState } from 'react';
import Modal from './Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { router } from '@inertiajs/react';

export default function Project({
    title,
    text,
    topLabelText,
    bottomLabelText,
    date,
    image,
    summary,
    readMore,
    circle,
    textcentered,
    button,
    id = 1,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        let projectComponents = document.querySelectorAll('.project-component');
        let header = document.querySelectorAll(".header");

        if (projectComponents && header) {
            for (let i = 0; i < projectComponents.length; i++) {
                projectComponents[i].style.zIndex = '-1';
            }
            header[0].style.zIndex = '-1'
        }
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        let projectComponents = document.querySelectorAll('.project-component');
        let header = document.querySelectorAll(".header");

        if (projectComponents && header) {
            for (let i = 0; i < projectComponents.length; i++) {
                projectComponents[i].style.zIndex = '1';
            }
            header[0].style.zIndex = '1'
        }
        document.body.classList.remove('dark-background');
        document.body.style.overflow = '';
    };

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(route('projects.destroy', id), {
                onSuccess: () => {
                    console.log('Project deleted successfully');
                },
                onError: (errors) => {
                    console.error('Delete error:', errors);
                },
            });
        }
    };

    return (
        <>
            <div className="project-component">
                <figure className="image-container">
                    <AuthenticatedLayout>
                        <button className="editButton" onClick={handleDelete}>
                            X
                        </button>
                    </AuthenticatedLayout>
                    {topLabelText && <label className="project-top-label">{topLabelText}</label>}
                    {circle ? (
                        <img className="circle-image" src="https://placehold.co/600x400" alt="image from projects" />
                    ) : (
                        <img className="square-image" src={image} alt="image from projects" />
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
                            <p className="project-summary">{summary}</p>
                        </>
                    )}
                    {readMore && <button className="project-read" onClick={openModal}>{readMore}</button>}
                </div>
            </div>

            {isOpen && <Modal title={title} text={text} date={date} image={image} onClose={closeModal} button={button} />}
        </>
    );
}
