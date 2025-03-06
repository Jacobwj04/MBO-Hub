import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { usePage } from '@inertiajs/react';
import project from '@/Pages/Projects/Project.jsx';
import Project from '@/Components/project-component.jsx';
import '../../../scss/style.scss'
import Navigation from '@/Layouts/Navigation.jsx';


export default function Projects() {
	const projects = usePage().props.projects;

	return (
		<>
			<Navigation />
			<AuthenticatedLayout>
				<a className="createButton" href={ route('projects.create') }><span>Create</span></a>
			</AuthenticatedLayout>
			<main className="projects projects__page">
				<ul className="project-container">
					{ projects.map((project) => {
						return (
							<>
								<Project title={ project.title } text={ project.text } id={project.id} />
								{ console.log(project) }
							</>
						);
					}) }
				</ul>
			</main>
		</>
	);
}
