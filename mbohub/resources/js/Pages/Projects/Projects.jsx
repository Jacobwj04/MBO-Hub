import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import Project from '@/Components/project-component.jsx';

function Projects() {
	const projects = usePage().props.projects;
	console.log(projects);

	const dataSets = projects?.map(project =>
		<article className="projects__project" key={ project.id }>
			<img src={ `/img/${ project.image }` } alt="" className="projects__project--image" />
			<div className="project__data">
				<a href={ `projects/${ project.id }` } className="projects__project--link">
					{ project.title }
				</a>
				<p className="project__date">{ project.datum }</p>
			</div>
		</article>,
	);

	return (
		<>
			<AuthenticatedLayout>
				<section className="projects-coll">
					<a href={ route('projects.create') } className="projects__new">Maak project ➤</a>
					<div className="projects__list">
						{ dataSets }
					</div>
				</section>
			</AuthenticatedLayout>
			<section>
				<Project/>
			</section>
		</>
	);
}

export default Projects;
