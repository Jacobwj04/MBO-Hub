import React, { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Project from "@/Components/project-component";
import Modal from "@/Components/Modal";
import FooterComponent from "./Contact/footer";
import { Banner } from "@/Layouts/banner";
import Calender from "@/Components/calender/calender";
import InfoCard from "@/Components/infoCrad";
import { usePage } from "@inertiajs/react";

function Welcome() {
    const { calenders } = usePage().props;
     const { projects } = usePage().props;

    console.log('Projects:', projects);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (projectData) => {
        setSelectedProject(projectData);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <GuestLayout hideNavigation={false}>
            <Banner />

            <section className="info">
                <h2 className="info__title">MBO-Hub Amsterdam</h2>
                <p className="info__paragraph">MBO-Hub Amsterdam is een samenwerking tussen ROC van Amsterdam, Mediacollege Amsterdam en HMC, opgericht in het kader van Amsterdam 750.</p>
                <InfoCard />
            </section>

            <section className="projects">
                <h1 className="projects-h1"> Projects</h1>
                <ul className="project-container">
                    { projects.map((project) => (
                        <li key={ project.id }>
                            <Project
                                title={ project.title }
                                text={ project.text }
                                summary={ project.summary }
                                id={ project.id }
                                image={ project.image_url }
                                readMore={ 'lees meer' }
                            />
                        </li>
                    )) }
                </ul>
            </section>

            {/* Toon Modal als een project is geselecteerd */ }
            { selectedProject && (
                <Modal title={ selectedProject.title } text={ selectedProject.text } onClose={ closeModal } button={ false } />
            ) }

            <Calender isHomePage={ true } calenders={ calenders } />

            <FooterComponent />

        </GuestLayout>
    );
}

export default Welcome;
