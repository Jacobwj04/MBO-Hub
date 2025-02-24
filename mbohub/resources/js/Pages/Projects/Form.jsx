import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Form() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    console.log(csrf);

    const user = usePage().props.auth.user.name;
    console.log(user)

    return (
        <AuthenticatedLayout>
            <form action={route('projects.store')} method="post">
                <input type="hidden" name="_token" value={csrf} />
                <input type="hidden" name="naam" value={user} />
                <input type="text" name="image" placeholder="image" />
                <input type="text" name="kermerk1" placeholder="kermerk1" />
                <input type="text" name="kenmerk2" placeholder="kenmerk2" />
                <input type="text" name="kenmerk3" placeholder="kenmerk3" />
                <input type="text" name="datum" placeholder="datum" />
                <input type="text" name="locatie" placeholder="locatie" />
                <input type="text" name="info" placeholder="info" />
                <input type="submit" />
            </form>
        </AuthenticatedLayout>
    );
}

export default Form;
