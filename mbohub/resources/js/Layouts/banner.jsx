import React from "react";

export function Banner () {
    return(
        <>
        <figure className="header__figure">
            <img
                src="/img/750slinger.png"
                alt="Logo"
                className="header__logo"
            />
        </figure>
        <section className="banner">
            <figure className="banner__figure">
                <img src="/img/banner-image.jpeg" alt="" className="banner__img" />
            </figure>
            <article className="banner__text">
                <h1 className="banner__title">
                    Samen bouwen we aan de toekomst van Amsterdam!
                </h1>
                <h2 className="banner__subTitle">
                    Verbinden van talent, innovatie en ondernemerschap in het hart van Amsterdam
                </h2>
                <div className="banner__buttonWrapper">
                    <button className="banner__button">
                        Bekijk projecten
                    </button>
                    <button className="banner__button">
                        Contact opnemen
                    </button>
                </div>
            </article>
        </section>
        </>
    )
}