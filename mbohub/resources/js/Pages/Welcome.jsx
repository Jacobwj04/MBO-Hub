import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Project from "@/Components/project-component";
import Modal from "@/Components/Modal";
import FooterComponent from "./Contact/footer";
import { Banner } from "@/Layouts/banner";
import Calender from "@/Components/calender/calender";
import InfoCard from "@/Components/infoCrad";

function Welcome() {
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

                    <Project title={"project"} labelText={"Dit is een label"} text={"lorem ipsum lorem ipsum"} />
                    <Project title={"project"} labelText={"Dit is een test"} text={"lorem ipsum lorem ipsum"} />

                    <Project title={"project"} date={"8 november 2023"} text={"lorem ipsum lorem ipsum"} readMore={"Lees meer"} />
                    <Project title={"project"} topLabelText={"Dit is een label"} text={"lorem ipsum lorem ipsum"} bottomLabelText={"Dit is een label"} />

                </ul>
            </section>

            {/* Toon Modal als een project is geselecteerd */}
            {selectedProject && (
                <Modal title={selectedProject.title} text={selectedProject.text} onClose={closeModal} button={false} />
            )}

            <Calender />

            <FooterComponent />

        </GuestLayout>
    );
}

export default Welcome;
