import { useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Project, Modal } from "../Components/project-component";
import { Banner } from "@/Layouts/banner";

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
                <p>
                    MBO-Hub Amsterdam is van start! MBO-Hub Amsterdam is een samenwerking tussen ROC van Amsterdam,
                    Mediacollege Amsterdam en HMC, opgericht in het kader van Amsterdam 750. Wij zijn dé plek waar
                    mbo-studenten, bedrijven, de Gemeente Amsterdam en initiatieven samenkomen om te werken aan de
                    toekomst van onze stad. De MBO-Hub biedt studenten een kans om hun talenten in de praktijk te
                    brengen, door ze te betrekken bij projecten, evenementen en initiatieven rondom het 750-jarig jubileum
                    van Amsterdam.
                </p>
                <div className="oberpop">
                    <img src="/img/poppetjeober-removebg-preview.png" alt="MBO Hub character" />
                </div>
            </section>

            {/* Projects Section */}
            <section className="section projects">
                <h2>Projecten</h2>
                <div className="project-container">
                    <Project
                        title={"title"}
                        date="8 november 2023"
                        circle={true}
                        readMore="Lees meer"
                        onClick={() => openModal({ title: "Project 1", text: "Dit is project 1." })}
                        button={true}
                    />
                    <Project
                        title={"title 2"}
                        date="4 mei 2024"
                        topLabelText="Dit is een label"
                        bottomLabelText="Dit is een label"
                        onClick={() => openModal({ title: "Project 2", text: "Dit is project 2." })}
                        button={true}
                    />
                </div>
            </section>

            {/* Toon Modal als een project is geselecteerd */}
            {selectedProject && (
                <Modal title={selectedProject.title} text={selectedProject.text} onClose={closeModal} button={false} />
            )}

            {/* Footer Section */}
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6>About Us</h6>
                            <p>
                                The MBO Hub is a platform that connects education, businesses, and the community.
                                We aim to empower students and professionals through events, projects, and news updates.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Contact Us</h6>
                            <p>Email: info@mbo-hub.amsterdam</p>
                            <p>Phone: +31 20 123 4567</p>
                            <p>Address: Amsterdam, Netherlands</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2025 MBO Hub. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul className="social-icons">
                                <li>
                                    <a className="youtube" href="https://www.youtube.com/@MBO-Hub">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="linkedin" href="https://www.linkedin.com/company/mbo-hub-amsterdam">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="instagram" href="https://www.instagram.com/mbohub.amsterdam">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </GuestLayout>
    );
}

export default Welcome;
