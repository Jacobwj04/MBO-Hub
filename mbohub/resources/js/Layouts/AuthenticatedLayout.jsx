import { usePage } from '@inertiajs/react';
import Navigation from './Navigation';

export default function AuthenticatedLayout({ children }) {

    const user = usePage().props.auth.user;
    return (
        <>
            { user &&
                <div className="auth">
                    { children }
                </div>
            }
        </>
    );
}
