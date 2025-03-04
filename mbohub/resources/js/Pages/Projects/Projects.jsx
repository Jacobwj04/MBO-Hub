import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { Project } from "@/Components/project-component";
import GuestLayout from "@/Layouts/GuestLayout";
import FooterComponent from "../Contact/footer";

function Projects() {
    const projects = usePage().props.projects;
    console.log(projects);

    const dataSets = projects?.map(project =>
        <article className="projects__project" key={project.id}>
            <img src={`/img/${project.image}`} alt="" className="projects__project--image" />
            <div className="project__data">
                <a href={`project/${project.id}`} className="projects__project--link">
                    {project.naam}
                </a>
                <p className="project__date">{project.datum}</p>
            </div>
        </article>
    );

    return (
        <>
            <AuthenticatedLayout>
            <section className="projects-coll">
                <a href={route('projects.create')} className="projects__new">Maak project ➤</a>
                <div className="projects__list">
                    {dataSets}

                </div>
            </section>
        </AuthenticatedLayout>

            <GuestLayout>
            <section className="projects">
                <h1 className="projects-h1"> Projects</h1>
                <ul className="project-container">

                    <Project title={"project"} labelText={"Dit is een label"} text={"lorem ipsum lorem ipsum"} />
                    <Project title={"project"} labelText={"Dit is een test"} text={"lorem ipsum lorem ipsum"} />

                    <Project title={"project"} date={"8 november 2023"} circle={true} text={"lorem ipsum lorem ipsum"} readMore={"Lees meer"} />
                    <Project title={"project"} topLabelText={"Dit is een label"} text={"lorem ipsum lorem ipsum"} bottomLabelText={"Dit is een label"} />

                </ul>
                </section>
                
                <FooterComponent />
        </GuestLayout>
        </>
    );
}

export default Projects;
