import GuestLayout from "@/Layouts/GuestLayout";
import Project from "./project-component";
import { Banner } from "@/Layouts/banner";
import Calender from "@/Components/calender";

function Welcome() {
    return (
        <GuestLayout hideNavigation={false}>
            <Banner />

            {/* Projects Section */}

            <section className="projects">
                <h1 className="projects-h1"> Projects</h1>
                <ul className="project-container">
                    <Project date={"8 november 2023"} circle={true} readMore={"Lees meer"} />
                    <Project topLabelText={"Dit is een label"} bottomLabelText={"Dit is een label"} />
                </ul>
            </section>

            <Calender />

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
