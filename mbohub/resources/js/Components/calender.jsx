import React from "react";

export default function Calender(){
    return(
        <>
            <article className="calender">
            <h2>Evenementenkalender</h2>
                <ul className="calender__dates">
                    <li className="calender__activity">
                        <figure className="calender__date">
                            <span>10 Maart</span>
                        </figure>
                        <div></div>
                        <section className="calender__activities">
                            <div className="calender__header">
                                <h2 className="calender__title">Workshop UX/UI Design</h2>
                                <span className="calender__label">
                                    excursie
                                </span>
                            </div>
                            <p className="calender__text">zaterdag 22 februari 2025</p>
                            <p className="calender__text">Locatie: B.Amsterdam</p>
                            <h3 className="calender__subHeading">Bezoek aan verschillende innovatieve startups in Amsterdam.</h3>
                        </section>
                    </li>
                    <li className="calender__activity">
                        <figure className="calender__date">
                            <span>10 Maart</span>
                        </figure>
                        <div></div>
                        <section className="calender__activities">
                            <div className="calender__header">
                                <h2 className="calender__title">Workshop UX/UI Design</h2>
                                <span className="calender__label">
                                    excursie
                                </span>
                            </div>
                            <p className="calender__text">zaterdag 22 februari 2025</p>
                            <p className="calender__text">Locatie: B.Amsterdam</p>
                            <h3 className="calender__subHeading">Bezoek aan verschillende innovatieve startups in Amsterdam.</h3>
                        </section>
                    </li>
                </ul>
            </article>
        </>
    )
}