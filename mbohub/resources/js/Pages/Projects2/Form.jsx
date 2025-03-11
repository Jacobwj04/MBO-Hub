import { router, usePage } from '@inertiajs/react';

export default function EditProject({ projectId }) {
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

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            router.get('/projects')

        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <div className="project-form-page">
            <form className="project-form-page__form" onSubmit={sendData} encType="multipart/form-data">

                <input className='project-form-page__input' type="hidden" name="_token" value={props.csrf_token || document.querySelector('meta[name="csrf-token"]').content} />
                <input className='project-form-page__input' type="text" name="title" placeholder="Titel" />


                <input className='project-form-page__input' type="file" name="image" accept="image/*" />
                <textarea className='project-form-page__textarea' name="summary" placeholder="Samenvatting" />

                <textarea className='project-form-page__textarea' name="text" placeholder="Tekst" />
                <div className="project-form-page__public">
                    <label className='project-form-page__public--label' htmlFor="public">Publiek</label>
                    <input className='project-form-page__checkbox' type="checkbox" name="public" />
                </div>
                <div className="project-form-page__highlighted">
                    <label className='project-form-page__highlighted--label' htmlFor="highlighted">Uitgelicht</label>
                    <input className='project-form-page__checkbox' type="checkbox" name="highlighted" />
                </div>
                <input className='project-form-page__submit' type="submit" value="Verzenden" />
            </form>
        </div>
    );
}
