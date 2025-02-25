import GuestLayout from "@/Layouts/GuestLayout";
import Project from "./project-component";
import Contact from "./Contact/Contact";
import { Banner } from "@/Layouts/banner";

function Welcome() {
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

                    <Project labelText={"Dit is een label"}/>
                    <Project labelText={"Dit is een test"}/>

                    <Project date={"8 november 2023"} circle={true} readMore={"Lees meer"} />
                    <Project topLabelText={"Dit is een label"} bottomLabelText={"Dit is een label"} />

                </ul>
            </section>

            {/* Footer Section */}
            <Contact />

        </GuestLayout>
    );
}



export default Welcome;
