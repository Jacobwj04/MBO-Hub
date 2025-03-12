import React from "react";
import Navigation from "@/Layouts/Navigation";
import Calender from "@/Components/calender/calender";
import FooterComponent from "../Contact/footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

export default function CalenderPage() {
    const {props} = usePage();
    const calender = props.calenders || [];
    console.log(calender);
    return (
        <>
            <Navigation />
            <AuthenticatedLayout>
                <a className="createButton" href={route('calender.create')}>
                    <span>Create</span>
                </a>
            </AuthenticatedLayout>
            <main className="calender__main">
                <Calender />
            </main>
            <FooterComponent />
        </>
    )
}