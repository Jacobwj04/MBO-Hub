import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import Project from "../../Components/project-component.jsx";



function About() {
    return (
        <AuthenticatedLayout>
            <h1 className="about-us-h1">Ontmoet ons Team</h1>
            <section className="about-us-section">
                <Project circle={true} />
            </section>
        </AuthenticatedLayout>
    );
}

export default About;
