import { usePage } from "@inertiajs/react";
import Navlink from '../Components/NavLink';

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <nav className="nav">
                <Navlink href={route('projects.projects')}>Projects</Navlink>
                <Navlink href={route('about.about')}>About</Navlink>
                <Navlink href={route('partners.partners')}>Partners</Navlink>
                <Navlink href={route('contact.contact')}>Contact</Navlink>
                <Navlink href={route('login')}>Login</Navlink>

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
            </nav>
            <figure className="header__hubLogo">
                <img
                    src="/img/MBO-Hub-logo.webp"
                    alt="Logo"
                    className="header__logo"
                />
            </figure>
        </header>
    );
}

export default Navigation;