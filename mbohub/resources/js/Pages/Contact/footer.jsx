import React from "react";

function FooterComponent() {
    return (
    <footer className="footer">
                <div className="footer-container">
                    <div className="footer-contact">
                        <h2 className="footer-title">Contact</h2>
                        &#x1F4E7;<span className="footer-email">info@mbo-hub.amsterdam</span>
                        <p className="footer-text">Ben je benieuwd wat mbo-studenten voor jouw project kunnen betekenen? Neem contact met ons op!</p>
                    </div>
                    <div className="footer-links">
                    <h2 className="footer-title">Links</h2>
                        <ul className="links-container">
                            <li className="link">Over Ons</li>
                            <li className="link">Projecten</li>
                            <li className="link">Contact</li>
                            <li className="link">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <h2 className="footer-title">Volg ons</h2>
                        <ul className="socials-container">
                            <li className="social">
                                <a className="a" href="https://www.linkedin.com/company/mbo-hub-amsterdam/?">
                                    <i className="fab fa-linkedin">Linkedin</i>
                                </a>
                            </li>
                            <li className="social">
                                <a className="a" href="https://www.instagram.com/mbohub.amsterdam/">
                                    <i className="fab fa-instagram">Instagram</i>
                                </a>
                            </li>
                            <li className="social">
                                <a className="a" href="https://www.youtube.com/@MBO-Hub">
                                    <i className="fab fa-youtube">Youtube</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <figure className="line"></figure>
                <h2 className="footer-btm-title">© 2025 MBO-Hub Amsterdam. Alle rechten voorbehouden.</h2>
    </footer>
    )
}

export default FooterComponent;