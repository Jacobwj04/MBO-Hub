import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';

function Form() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    console.log(csrf);

    const user = usePage().props.auth.user.name;
    console.log(user)

    async function sendProject(){
        const { data } = await ajax({

        });
    }

    return (
        <AuthenticatedLayout>
            <form encType="multipart/form-data" action={ route('projects.store') }>
                <input type="hidden" name="_token" value={csrf} />
                <input type="hidden" name="naam" value={ user } />
                <input type="text" name="title" placeholder="Titel"/>
                <textarea name="summary" placeholder="Sammenvatting"/>
                <input type="text" name="location" placeholder="Locatie"/>
                <textarea name="text" placeholder="Text"/>
                <textarea name="highlights" placeholder="Uitgelicht"/>
                <input type="file" name="image" accept="image/*"/>
                <input type="submit"/>
            </form>
        </AuthenticatedLayout>
    );
}

export default Form;
