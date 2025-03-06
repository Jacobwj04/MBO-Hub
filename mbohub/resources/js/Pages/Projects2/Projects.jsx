import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { usePage } from '@inertiajs/react';
import project from '@/Pages/Projects/Project.jsx';

export default function Projects() {
    const projects = usePage().props.projects;

    return (
        <>
            <AuthenticatedLayout>
                <a className="createButton" href={ route('projects.create') }><span>Create</span></a>
            </AuthenticatedLayout>
            <main className="projects">
                { projects.map((project) => {
                    return (
                        <div>
                            { console.log(project) }
                        </div>
                    );
                }) }
            </main>
        </>
    );
}
