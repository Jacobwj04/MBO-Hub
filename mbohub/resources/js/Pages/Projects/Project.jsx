import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Project() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const project = usePage().props.project;
    console.log(project)
    return (
        <AuthenticatedLayout>
            <section className="project">
                <section className="project__admin">
                    <a href={route('projects.edit', [project.id])} className="project__edit">Edit</a>
                    <form action={route('projects.destroy', [project.id])} className="project__delete" method="post">
                        <input type="hidden" name="_method" value="delete" />
                        <input type="hidden" name="_token" value={csrf} />
                        <input type="submit" value="Delete" />
                    </form>
                </section>

                <section className="project__view">

                    <section className="project__left">
                        <h2 className="project__name">{project.naam}</h2>
                        <p className="project__info">{project.info}</p>
                        <section className="kenmerken">
                            <h5 className="kenmerk">{project.kermerk1}</h5>
                            <h5 className="kenmerk">{project.kenmerk2}</h5>
                            <h5 className="kenmerk">{project.kenmerk3}</h5>
                        </section>
                    </section>

                    <section className="project__right">

                        <img src={`/img/${project.image}`} alt="" className="project__image" />

                        <section className="project__date">
                            <p>{project.datum}</p>
                            <p>{project.locatie}</p>
                        </section>
                    </section>


                </section>





            </section>
        </AuthenticatedLayout>
    );
}

import '../css/Project.css';
export default Project;