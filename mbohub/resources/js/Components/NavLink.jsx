import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {

    const activeClasses = 'nav__link nav__link--active';
    const inactiveClasses = 'nav__link';

    return (
        <Link
            {...props}
            className={`${active ? activeClasses : inactiveClasses} ${className}`} // Template literal for cleaner class merging
        >
            {children}
        </Link>
    );
}