import GuestLayout from "@/Layouts/GuestLayout";

function Welcome() {
    return (
        <GuestLayout hideNavigation={false}>
            {/* Heading Section */}
            <section className="heading">
                <img
                    src="https://mbo-hub.amsterdam/images/mbo-hub-home.png"
                    alt="mbo-hub banner"
                    className="heading__banner"
                />
            </section>

            {/* Events Section */}
            <section className="section events">
                <h2>Welkom bij MBO-Hub!</h2>
                <p>MBO-Hub Amsterdam is van start! MBO-Hub Amsterdam is een samenwerking tussen ROC van Amsterdam, Mediacollege Amsterdam en HMC, opgericht in het kader van Amsterdam 750. Wij zijn dé plek waar mbo-studenten, bedrijven, de Gemeente Amsterdam en initiatieven samenkomen om te werken aan de toekomst van onze stad. De MBO-Hub biedt studenten een kans om hun talenten in de praktijk te brengen, door ze te betrekken bij projecten, evenementen en initiatieven rondom het 750-jarig jubileum van Amsterdam.

Wat doen we? We verbinden bedrijven en organisaties met mbo-studenten, die meewerken aan diverse opdrachten zoals evenementenorganisatie, videoproducties, groenprojecten en nog veel meer. Hierdoor doen de studenten waardevolle praktijkervaring op, door middel van stages, projecten en leerwerkopdrachten, en dragen ze bij aan de ontwikkeling van Amsterdam. Belang van de MBO-Hub Mbo-studenten vormen het kloppende hart van de stad. Door hen te betrekken bij belangrijke projecten zorgen we voor nieuwe ideeën, jonge energie en een sterkere verbinding tussen onderwijs en de maatschappij.</p>
            <div className="oberpop">
            <img src="/img/poppetjeober-removebg-preview.png" alt="MBO Hub character" />
            </div>
            </section>

            {/* Nieuws Section */}
            <section className="section nieuws">
                <div className="nieuws-container">
                    <a href="/nieuws1" className="nieuws-block">
                        <div className="nieuws-image">
                            <img src="/img/750dinner.jpg" alt="Nieuws 1" />
                        </div>
                        <div className="nieuws-content">
                            <h3>Nieuws</h3>
                            <p><div className=""></div>Bekijk alle nieuws over het MBO-Hub</p>
                        </div>
                    </a>
                    <a href="/nieuws2" className="nieuws-block">
                        <div className="nieuws-image">
                            <img src="/img/projects.jpg" alt="Project" />
                        </div>
                        <div className="nieuws-content">
                            <h3>Project</h3>
                            <p>Bekijk alle Projecten over het MBO-hub</p>
                        </div>
                    </a>
                    <a href="/nieuws3" className="nieuws-block">
                        <div className="nieuws-image">
                            <img src="/img/750dinner.jpg" alt="Event" />
                        </div>
                        <div className="nieuws-content">
                            <h3>Event</h3>
                            <p>Bekijk alle evenementen die het MBO-hub host</p>
                        </div>
                    </a>
                
                </div>
            </section>

            {/* Projects Section */}
            <section className="section">
                <div className="projects-container">
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/watch?v=kwZH1llzlCM"
                                title="Project Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">This is a project about creating engaging user interfaces.</p>
                    </div>
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/watch?v=kwZH1llzlCM"
                                title="Project Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">This project explores the power of API integrations.</p>
                    </div>
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/watch?v=kwZH1llzlCM"
                                title="Project Video 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">Learn how to build responsive web applications.</p>
                    </div>
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/watch?v=kwZH1llzlCM"
                                title="Project Video 4"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">Explore advanced JavaScript techniques and their applications.</p>
                    </div>
                </div>
            </section>

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
