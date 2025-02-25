import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import Project from "../project-component.jsx";



function About() {
    return (
        <AuthenticatedLayout>
            <h1 className="about-us-h1">Ontmoet ons Team</h1>
            <section className="about-us-section">
            </section>
        </AuthenticatedLayout>
    );
}

export default About;
