import { usePage } from '@inertiajs/react';
import Navigation from './Navigation';

export default function AuthenticatedLayout({ children }) {

    const user = usePage().props.auth.user;
    console.log(user);


    return (
        <>
            <Navigation />
            { user &&
                <>
                    <main className="auth">{ children }</main>
                </>
            }
        </>
    );
}
