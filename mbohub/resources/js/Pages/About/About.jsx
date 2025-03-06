import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { Project } from "@/Components/project-component.jsx";
import FooterComponent from "../Contact/footer.jsx";
import MultiCarousel from "@/Components/Carousel.jsx";


export function About() {
    
    return (

        <AuthenticatedLayout>
            <section className="about-us-amsterdam750">
                <figure className="about-us-figure">
                    <img src="/img/750slinger.png" alt="Logo" className="about-us-slinger"/>
                </figure>
                <div className="about-us-amsterdam-text-container">
                    <h1 className="about-us-amsterdam-h1">Amsterdam 750</h1>
                    <p className="about-us-amsterdam-text">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                </div>
            </section>
            <section className="about-us-section">
                <h1 className="about-us-h1">Ontmoet ons Team</h1>
                <div className="about-us-team">
                <Project title={"Sarah de Vries"} text={"Project leider"} circle={true} textcentered={true} />
                <Project title={"Mark Jansen"} text={"Coördinator Bedrijfsrelaties"} circle={true} textcentered={true} />
                </div>
            </section>
            <section className="about-us-devs">
                <h2 className="about-us-h2-devs">Developers</h2>
                <div className="about-us-developer">
                    <Project title={"Jacob Wassall-jamieson"} text={"Project leider, Eindejaars Frontend Developer"} circle={true} textcentered={true} />
                    <Project title={"Luc Zuidema"} text={"Project leider, Eindejaars Backend Developer"} circle={true} textcentered={true} />
                    <Project title={"Milou Geervliet"} text={"Project leider, Eindejaars Frontend Developer"} circle={true} textcentered={true} />
                </div>
            </section>
            <section className="about-us-partners">
                <h2 className="about-us-h2-partner">Onze Partners</h2>
                    <MultiCarousel />
            </section>

            <FooterComponent />
        </AuthenticatedLayout>
    );
}

export default About;
