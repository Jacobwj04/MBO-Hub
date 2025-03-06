import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import React from 'react'
import Form from '@/Pages/Projects/Form.jsx';

function Edit() {
    const project = usePage().props.project;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const user = usePage().props.auth.user.name;


    const [form, setForm] = useState({
        title: project.title,
        summary: project.summary,
        location: project.location,
        text: project.text,
        highlights: project.highlights
    });

    const editInputs = (event) => {
        const { name, value } = event.target;
        setForm((old) => ({
            ...old,
            [name]: value
        }));
    }

    async function sendData(data){
        data.preventDefault()
        console.log(data.target);
        // console.log(this.fileInput);
        // fetch('/admin.update', {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        //     method: "POST",
        //     body: data,
        // }).then((response) => {
        //     console.log(response);
        // })
    }

    return (
        <AuthenticatedLayout>
            <section className="edit">
                <form className="edit__form">
                    <input type="hidden" name="_token" value={ csrf } />
                    <input type="text" name="title" placeholder="Titel" value={form.title} onChange={editInputs}/>
                    <textarea name="summary" placeholder="Sammenvatting" value={form.summary} onChange={editInputs}/>
                    <input type="text" name="location" placeholder="Locatie" value={form.location} onChange={editInputs}/>
                    <textarea name="text" placeholder="Text" value={form.text} onChange={editInputs}/>
                    <textarea name="highlights" placeholder="Uitgelicht" value={form.highlights} onChange={editInputs}/>
                    <input type="file" name="image" accept="image/*" onChange={editInputs}/>
                    <input type="submit" value="Submit"/>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Edit;
