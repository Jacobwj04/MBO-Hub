import { router, usePage } from '@inertiajs/react';

export default function CreateProject() {
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
        <section className="calenderEdit">
            <form onSubmit={sendData} encType="multipart/form-data" className="calenderEdit__form">
                <input type="hidden" name="_token" value={props.csrf_token || document.querySelector('meta[name="csrf-token"]').content} className="calenderEdit__input" />
                <input type="text" name="title" placeholder="Title"  className="calenderEdit__input"/>
                <input type="text" name="summary" placeholder="Summary"  className="calenderEdit__input"/>
                <input type="text" name="text" placeholder="Text" className="calenderEdit__input" />
                <input type="file" name="image" accept="image/*" className="calenderEdit__input" />
                <input type="checkbox" name="public" className="calenderEdit__input" />
                <label htmlFor="public">Publiek</label>
                <input type="checkbox" name="highlighted" className="calenderEdit__input" />
                <label htmlFor="highlighted">Uitgelicht</label>
                <input type="submit" value="Submit" className="calenderEdit__input" />
            </form>
        </section>
    );
}
