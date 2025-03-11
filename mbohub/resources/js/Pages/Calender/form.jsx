import { addQuarters } from "date-fns";
import React from "react";
import { router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Navigation from "@/Layouts/Navigation";

export default function Form() {
    async function sendData(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch(`/calender`, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
            });

            console.log(await response.text());

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            router.get('/calender');
        }
    }

    return (
        <>
        <Navigation />
            <AuthenticatedLayout>
                <section className="calenderEdit">
                    <form action="" onSubmit={sendData} className="calenderEdit__form">
                        <input type="text" name="title" id="title" className="calenderEdit__input" placeholder="Titel"/>
                        <input type="date" name="date" id="date" className="calenderEdit__input" />
                        <textarea type="text" name="summary" id="summary" className="calenderEdit__textarea" placeholder="Kort Omschrijving" maxLength={255}></textarea>
                        <input type="text" name="location" id="location" className="calenderEdit__input" placeholder="Locatie" />
                        <input type="text" name="label" id="label" className="calenderEdit__input" placeholder="Label" />
                        <textarea name="hiddenText" id="hiddenText" className="calenderEdit__textarea" placeholder="Lang omschrijving"></textarea>
                        <input type="text" name="link" id="link" className="calenderEdit__input" placeholder="link om aan te melden" />
                        <input type="submit" value="Verstuur" className="calenderEdit__submit" />
                    </form>
                </section>
            </AuthenticatedLayout>
        </>
    )
}