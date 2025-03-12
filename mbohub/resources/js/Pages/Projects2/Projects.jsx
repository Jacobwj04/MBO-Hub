import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { usePage } from '@inertiajs/react';
import Project from '@/Components/project-component.jsx';
import Navigation from '@/Layouts/Navigation.jsx';
import '../../../scss/style.scss';

export default function Projects() {
    const { projects } = usePage().props;

    console.log('Projects:', projects);


    return (
        <>
            <Navigation />
            <AuthenticatedLayout>
                <a className="createButton" href={ route('projects.create') }>
                    <span>Create</span>
                </a>
            </AuthenticatedLayout>
            <main className="projects projects__page">
                <ul className="project-container">
                    { projects.map((project) => {
                            const date = new Date(project.created_at);

                            const formattedDate = date.toLocaleDateString('nl-NL', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                timeZone: 'UTC'
                            }).split('/').join('-');

                            return (
                                <li key={ project.id }>
                                    <Project
                                        title={ project.title }
                                        summary={ project.summary }
                                        text={ project.text }
                                        id={ project.id }
                                        image={ project.image_url }
                                        readMore={ 'lees meer' }
                                        date={ formattedDate }
                                    />
                                    { console.log('Project:', project) }
                                </li>
                            );
                        },
                    ) }
                </ul>
            </main>
        </>
    );
}
