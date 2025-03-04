import React from "react";
import Navigation from "@/Layouts/Navigation";
import "../../../scss/components/contact/contact.scss"
import FooterComponent from "./footer";

function contactPage() {
    return (
        <>
            <Navigation />
            <article className="contact">
                <h1 className="contact-header">Contact</h1>
                <p className="contact-summary">Heb je een vraag of wil je een project aandragen? Neem contact met ons op!</p>
                <div className="contact-content-container">
                    <article className="left">
                        <h1 className="left-h1">Stuur ons een bericht</h1>
                        <p className="left-p">Vul het formulier in en we nemen zo snel mogelijk contact met je op.</p>
                        <input className="input" type="text" placeholder="name" />
                        <input className="input" type="text" placeholder="email" />
                        <input className="input" type="text" placeholder="onderwerp" />
                        <textarea className="textarea" placeholder="Uw bericht"></textarea>
                        <input className="submit" type="submit" />

                    </article>
                    <article className="right">
                        <section className="right-contact">
                            <h1 className="right-h1">Contact</h1>
                            <p className="right-summary">Je kunt ons ook direct bereiken via:</p>
                            <ul className="right-infos">
                                <li className="right-info">info@mbo-hub.nl</li>
                                <li className="right-info">020 - XXX XXXX</li>
                                <li className="right-info">Amsterdam, Nederland</li>
                            </ul>
                        </section>
                        <section className="right-follow">
                            <h1 className="right-h1">Volg ons</h1>
                            <p className="right-summary">Blijf op de hoogte via onze social media</p>
                            <ul className="right-follow-us">

                                <li className="right-follow-link">
                                    <a className="contact-linkedin" href="https://www.linkedin.com/company/mbo-hub-amsterdam/?">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="right-follow-link">
                                    <a className="contact-instagram" href="https://www.instagram.com/mbohub.amsterdam/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </section>
                        <section className="right-project">
                            <h1 className="right-h1">Project aandragen?</h1>
                            <p className="right-summary">Heb je een interessant project voor onze studenten?</p>
                            <button className="right-button">Draag een project aan</button>
                        </section>
                    </article>
                </div>
            </article>
            <FooterComponent />
        </>
    )
}

export default contactPage