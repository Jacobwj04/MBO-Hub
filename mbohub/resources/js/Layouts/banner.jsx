import React from "react";

export function Banner () {
    return(
        <>
        <div className="banner">
            <figure className="banner__color"></figure>
            <article className="banner__container">
                <figure className="banner__figure">
                    <img src="/img/banner-image.jpeg" alt="" className="banner__img" />
                </figure>
                <section className="banner__text">
                    <h1 className="banner__title">
                        Samen bouwen we aan de toekomst van Amsterdam!
                    </h1>
                    <h2 className="banner__subTitle">
                        Verbinden van talent, innovatie en ondernemerschap in het hart van Amsterdam
                    </h2>
                    <div className="banner__buttonWrapper">
                        <a className="banner__button" href="#">
                            Bekijk projecten
                        </a>
                        <a className="banner__button" href="#">
                            Contact opnemen
                        </a>
                    </div>
                </section>
            </article>
        </div>
        </>
    )
}