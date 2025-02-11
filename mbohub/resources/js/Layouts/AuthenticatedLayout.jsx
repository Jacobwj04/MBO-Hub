import { usePage } from "@inertiajs/react";
import Navigation from "./Navigation";

export default function AuthenticatedLayout({children}){

    const user = usePage().props.auth.user;

    return(

        <>
            <Navigation/>
            <main className="main">{children}</main>
        </>
    )
}