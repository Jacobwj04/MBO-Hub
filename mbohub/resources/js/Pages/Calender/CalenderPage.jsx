import React from "react";
import Navigation from "@/Layouts/Navigation";
import Calender from "@/Components/calender/calender";
import FooterComponent from "../Contact/footer";

export default function CalenderPage() {
    return(
        <>
        <Navigation />
        <main className="calender__main">
            <Calender />
        </main>
        <FooterComponent />
        </>
    )
}