import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import Project from "../../Components/project-component.jsx";
import FooterComponent from "../Contact/footer.jsx";
import MultiCarousel from "@/Components/Carousel.jsx";


function About() {
    
    return (

        <AuthenticatedLayout>
            <h1 className="about-us-h1">Ontmoet ons Team</h1>
            <section className="about-us-section">
                <Project title={"Sarah de Vries"} text={"Project leider"} circle={true} textcentered={true} />
                <Project title={"Mark Jansen"} text={"Coördinator Bedrijfsrelaties"} circle={true} textcentered={true} />
            </section>
            <section className="about-us-devs">
                <h2 className="about-us-h2-devs">Developers</h2>
                <div className="about-us-developer">
                    <Project title={"Jacob Wassall-jamieson"} text={"Project leider, Frontend Developer"} circle={true} textcentered={true} />
                    <Project title={"Luc Zuidema"} text={"Project leider, Backend Developer"} circle={true} textcentered={true} />
                    <Project title={"Milou Geervliet"} text={"Project leider, Frontend Developer"} circle={true} textcentered={true} />
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
