import { usePage } from "@inertiajs/react";
import Navlink from '../Components/NavLink';
import React, { useState } from 'react';

function Navigation() {
    const { auth } = usePage().props;
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <a href="#">
                <figure className="header__hubLogo">
                    <img
                        src="/img/MBO-Hub-logo.webp"
                        alt="Logo"
                        className="header__logo"
                    />
                </figure>
            </a>
            <nav className="nav">
                <div>
                    <Navlink href={route('projects.projects')}>Projects</Navlink>
                    <Navlink href={route('about.about')}>About</Navlink>
                    <Navlink href={route('partners.partners')}>Partners</Navlink>
                    <Navlink href={route('contact.contact')}>Contact</Navlink>
                    <Navlink href={route('login')}>Login</Navlink>
                </div>

                {/* <div className="user-info">
                    {auth.user ? (
                        <div className="login-user">
                            <div>Welkom</div>
                            <span className="user-name">{auth.user.name}!</span>
                        </div>
                    ) : (

                        <span className="guest-name">Guest</span>
                    )}
                </div> */}
                <button className="menu__button" onClick={handleNavToggle}>
                    {isNavOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    )}
                </button>
                <section className={`menu menu--${isNavOpen ? "show" : "hide"}`}>
                    <div className="menu__container">
                        <a className="menu__link" href={route('projects.projects')}>Projects</a>
                        <a className="menu__link" href={route('about.about')}>About</a>
                        <a className="menu__link" href={route('partners.partners')}>Partners</a>
                        <a className="menu__link" href={route('contact.contact')}>Contact</a>
                        <a className="menu__link" href={route('login')}>Login</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Navigation;