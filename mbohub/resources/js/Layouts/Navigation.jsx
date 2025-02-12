import { usePage } from "@inertiajs/react";
import './Navigation.css';
import Navlink from '../Components/NavLink';

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src="/img/750slinger.png"
                    alt="Logo"
                    className="header-logo"
                />
            </div>
            <nav className="nav">
                <Navlink href={route('projects.projects')}>Projects</Navlink>
                <Navlink href={route('about.about')}>About</Navlink>
                <Navlink href={route('partners.partners')}>Partners</Navlink>
                <Navlink href={route('contact.contact')}>Contact</Navlink>
                <Navlink href={route('login')}>Login</Navlink>

                <div className="user-info">
                    {auth.user ? (
                        <div className="login-user">
                            <div>Welkom</div>
                            <span className="user-name">{auth.user.name}!</span>
                        </div>
                    ) : (

                        <span className="guest-name">Guest</span>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navigation;