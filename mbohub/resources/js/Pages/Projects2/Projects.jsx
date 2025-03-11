import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { usePage } from '@inertiajs/react';
import Project from '@/Components/project-component.jsx'; // Assuming this is your Project component
import Navigation from '@/Layouts/Navigation.jsx';
import '../../../scss/style.scss';

export default function Projects() {
    const { props } = usePage();
    const projects = props.projects || []; // Fallback to empty array if undefined

    console.log('Projects:', projects); // Log all projects for debugging

    return (
        <>
            <Navigation />
            <AuthenticatedLayout>
                <a className="createButton" href={route('projects.create')}>
                    <span>Create</span>
                </a>
            </AuthenticatedLayout>
            <main className="projects projects__page">
                <ul className="project-container">
                    {projects.map((project) => (
                        <li key={project.id}>
                            <Project
                                title={project.title}
                                text={project.text}
                                id={project.id}
                                image={project.image_url}
                                readMore={"lees meer"}
                            />
                            {console.log('Project:', project)}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
