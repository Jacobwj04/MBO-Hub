import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Edit() {
    const project = usePage().props.project;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const user = usePage().props.auth.user.name;

    const [form, setForm] = useState({
        title: project.title,
        summary: project.summary,
        location: project.location,
        text: project.text,
        highlights: project.highlights,
        image: project.image
    });

    const editInputs = (event) => {
        const { name, value } = event.target;
        setForm((old) => ({
            ...old,
            [name]: value
        }));
    }

    return (
        <AuthenticatedLayout>
            <section className="edit">
                <form action={route('admin.update', [project.id])} className="edit__form" method="post">
                    <input type="hidden" name="_method" value="PUT" />
                    <input type="hidden" name="_token" value={ csrf } />
                    <input type="text" name="title" placeholder="Titel" value={form.title} onChange={editInputs}/>
                    <textarea name="summary" placeholder="Sammenvatting" value={form.summary} onChange={editInputs}/>
                    <input type="text" name="location" placeholder="Locatie" value={form.location} onChange={editInputs}/>
                    <textarea name="text" placeholder="Text" value={form.text} onChange={editInputs}/>
                    <textarea name="highlights" placeholder="Uitgelicht" value={form.highlights} onChange={editInputs}/>
                    {/*<input type="file" name="image" accept="image/*" onChange={editInputs}/>*/}
                    <input type="submit" />
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Edit;
