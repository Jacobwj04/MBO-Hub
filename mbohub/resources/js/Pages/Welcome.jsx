import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Project, Modal } from "../Components/project-component";
import Project from "../Components/project-component";
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

            {/* Events Section */}
            <section className="section events">
                <h2>Welkom bij MBO-Hub!</h2>
                <p>MBO-Hub Amsterdam is van start! MBO-Hub Amsterdam is een samenwerking tussen ROC van Amsterdam, Mediacollege Amsterdam en HMC, opgericht in het kader van Amsterdam 750. Wij zijn dé plek waar mbo-studenten, bedrijven, de Gemeente Amsterdam en initiatieven samenkomen om te werken aan de toekomst van onze stad. De MBO-Hub biedt studenten een kans om hun talenten in de praktijk te brengen, door ze te betrekken bij projecten, evenementen en initiatieven rondom het 750-jarig jubileum van Amsterdam.

                    Wat doen we? We verbinden bedrijven en organisaties met mbo-studenten, die meewerken aan diverse opdrachten zoals evenementenorganisatie, videoproducties, groenprojecten en nog veel meer. Hierdoor doen de studenten waardevolle praktijkervaring op, door middel van stages, projecten en leerwerkopdrachten, en dragen ze bij aan de ontwikkeling van Amsterdam. Belang van de MBO-Hub Mbo-studenten vormen het kloppende hart van de stad. Door hen te betrekken bij belangrijke projecten zorgen we voor nieuwe ideeën, jonge energie en een sterkere verbinding tussen onderwijs en de maatschappij.</p>
                <div className="oberpop">
                    <img src="/img/poppetjeober-removebg-preview.png" alt="MBO Hub character" />
                </div>
            </section>

            {/* Projects Section */}

            <section className="projects">
                <h1 className="projects-h1"> Projects</h1>
                <ul className="project-container">

                    <Project title={"project"} labelText={"Dit is een label"} text={"lorem ipsum lorem ipsum"} />
                    <Project title={"project"} labelText={"Dit is een test"} text={"lorem ipsum lorem ipsum"} />

                    <Project title={"project"} date={"8 november 2023"} circle={true} text={"lorem ipsum lorem ipsum"} readMore={"Lees meer"} />
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
