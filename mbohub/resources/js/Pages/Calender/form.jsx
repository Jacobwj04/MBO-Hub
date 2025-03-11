import { addQuarters } from "date-fns";
import React from "react";

export default function Form () {
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
                throw new Error(`HTTP error! status: ${ response.status }`);
            }
            router.get('/calender')

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return(
        <form action="" onSubmit={sendData}>
            <input type="text" name="title" id="title" />
            <input type="date" name="date" id="date" />
            <input type="text" name="summary" id="summary" />
            <input type="text" name="location" id="location" />
            <input type="text" name="label" id="label" />
            <textarea name="hiddenText" id="hiddenText"></textarea>
            <input type="text" name="link" id="link" />
            <input type="submit" value="submit" />
        </form>
    )
}