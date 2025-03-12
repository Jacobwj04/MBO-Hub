import { router, usePage } from '@inertiajs/react';

export default function CreateProject( ) {
    const { props } = usePage();

    async function sendData(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch(`/projects`, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
            });

            let text = await response.text();
            console.log(text)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                router.get('/projects');
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <form onSubmit={ sendData } encType="multipart/form-data">
            <input type="hidden" name="_token" value={ props.csrf_token || document.querySelector('meta[name="csrf-token"]').content } />
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="summary" placeholder="Summary" />
            <input type="text" name="text" placeholder="Text" />
            <input type="file" name="image" accept="image/*" />
            <div>
                <input type="checkbox" name="public" />
                <label htmlFor="public">Publiek</label>
            </div>
            <div>
                <input type="checkbox" name="highlighted" />
                <label htmlFor="highlighted">Uitgelicht</label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}
