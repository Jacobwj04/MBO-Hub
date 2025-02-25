import React from "react";
import Navigation from "@/Layouts/Navigation";
import "../../../scss/components/contact/contact.scss"
import FooterComponent from "./footer";

function contactPage() {
    return (
        <>
            <Navigation />
            <article className="contact">
                <h1 className="header">Contact</h1>
                <p className="summary">Heb je een vraag of wil je een project aandragen? Neem contact met ons op!</p>
                <div className="content-container">
                    <article className="left">
                        <h1 className="left-h1">Stuur ons een bericht</h1>
                        <p className="left-p">Vul het formulier in en we nemen zo snel mogelijk contact met je op.</p>
                        <input className="input" type="text" placeholder="name" />
                        <input className="input" type="text" placeholder="email" />
                        <input className="input" type="text" placeholder="onderwerp" />
                        <textarea className="textarea" placeholder="Uw bericht"></textarea>
                        <input className="submit" type="submit"  />

                    </article>
                    <article className="right">
                        <section className="right-contact">
                            <h1 className="right-h1">Contact</h1>
                            <p className="right-summary">Je kunt ons ook direct bereiken via:</p>
                            <ul className="right-infos">
                                <li className="info">info@mbo-hub.nl</li>
                                <li className="info">020 - XXX XXXX</li>
                                <li className="info">Amsterdam, Nederland</li>
                            </ul>
                        </section>
                        <section className="right-follow">
                            <h1 className="right-h1">Volg ons</h1>
                            <p className="right-summary">Blijf op de hoogte via onze social media</p>
                            <ul className="right-follow-us">
                                <li className="right-follow-link">Linkedin</li>
                                <li className="right-follow-link">Instagram</li>
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