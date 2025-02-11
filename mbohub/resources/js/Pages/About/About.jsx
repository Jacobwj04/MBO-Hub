import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import "./about.css";

function About() {
    return (
        <AuthenticatedLayout>
            <div className="about--text">
                <h1>About Us</h1>
                <p>Welkom op MBO-HUB, het platform voor en door MBO leerlingen uit Amsterdam!</p>
                <p>
                    MBO-HUB is opgericht met de missie om MBO-studenten een centrale plek te bieden waar ze kunnen leren, delen en groeien.
                    Ons platform is een gemeenschap gedreven door samenwerking, innovatie en inclusiviteit. Of je nu op zoek bent
                    naar ondersteuning, inspiratie, of gewoon een plek om je ideeën te delen, MBO-HUB is er voor jou.
                </p>
            </div>

            <div className="about--text">
                <h2 className="header--color1">Our Vision</h2>
                <p>
                    Bij MBO-HUB geloven we dat iedereen de kans verdient om zijn of haar potentieel te bereiken. We willen een brug
                    slaan tussen studenten, docenten, en het bedrijfsleven om samen te bouwen aan een betere toekomst.
                </p>
            </div>

            <div className="about--text">
                <h2 className="header--color2">Our Mission</h2>
                <p>
                    Onze missie is om een veilige en inspirerende ruimte te creëren waar studenten kunnen leren en groeien. We bieden
                    tools, workshops, en evenementen aan die gericht zijn op persoonlijke en professionele ontwikkeling.
                </p>
            </div>

            <div className="about--text">
                <h2 className="header--color3">Our Core Values</h2>
                <ul>
                    <li><strong className="point--1">Inclusiviteit:</strong> We verwelkomen iedereen en waarderen diversiteit in alle vormen.</li>
                    <li><strong className="point--2">Innovatie:</strong> We streven ernaar om voortdurend te vernieuwen en verbeteren.</li>
                    <li><strong className="point--3">Samenwerking:</strong> We geloven dat samenwerking de sleutel is tot succes.</li>
                    <li><strong className="point--4">Toegankelijkheid:</strong> We maken onze middelen beschikbaar voor iedereen.</li>
                </ul>
            </div>

            <div className="team-section">
                <h2>Meet the Team</h2>
                <div className="team--container">
                    <div className="team-member">
                        <img src="/img/mosalah.webp" alt="Foto van teamlid 1" />
                        <h3>Mohamed Salah</h3>
                        <p>Oprichter & CEO</p>
                        <p>Jan heeft MBO-HUB opgericht met een passie voor onderwijs en technologie. Hij brengt jarenlange ervaring in leidinggeven en innovatie met zich mee.</p>
                    </div>
                    <div className="team-member">
                        <img src="/img/dazwizzy.webp" alt="Foto van teamlid 2" />
                        <h3>Darwin Nunez</h3>
                        <p>Hoofd Ontwikkeling</p>
                        <p>Sophie is verantwoordelijk voor de technische kant van MBO-HUB. Ze zorgt ervoor dat het platform betrouwbaar en gebruiksvriendelijk is.</p>
                    </div>
                    <div className="team-member">
                        <img src="/img/goatbreg.webp" alt="Foto van teamlid 3" />
                        <h3>Ryan Gravenberg</h3>
                        <p>Community Manager</p>
                        <p>Ali bouwt bruggen tussen onze leden en zorgt voor een inclusieve en betrokken gemeenschap.</p>
                    </div>
                    <div className="team-member">
                        <img src="/img/joeneverscoregomaez.webp" alt="Foto van teamlid 4" />
                        <h3>Joe Gomez</h3>
                        <p>Marketing Specialist</p>
                        <p>Lisa zorgt voor creatieve campagnes en communicatie om MBO-HUB op de kaart te zetten.</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default About;
