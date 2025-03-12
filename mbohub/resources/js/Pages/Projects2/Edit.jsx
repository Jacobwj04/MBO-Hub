import { router, usePage } from '@inertiajs/react';

export default function EditProject() {
    const { props } = usePage();
    const project = props.project || {};

    async function sendData(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        console.log('Title from FormData:', formData.get('title')); // Should log correctly

        try {
            const response = await fetch(`/projects/${project.id}`, {
                method: 'PUT',
                body: formData, // Correct key for sending FormData
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Accept': 'application/json', // Ensure JSON response
                },
            });

            const text = await response.text();
            console.log('Raw response:', text);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                router.get('/projects'); // Redirect only on success
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <form onSubmit={sendData} encType="multipart/form-data">
            <input
                type="hidden"
                name="_token"
                value={props.csrf_token || document.querySelector('meta[name="csrf-token"]').content}
            />
            <input type="text" name="title" placeholder="Title" defaultValue={project.title || ''} />
            <input type="text" name="summary" placeholder="Summary" defaultValue={project.summary || ''} />
            <input type="text" name="text" placeholder="Text" defaultValue={project.text || ''} />
            {project.image_path && (
                <div>
                    <p>Current Image:</p>
                    <img
                        src={`/storage/${project.image_path}`} // Consistent with Storage::url()
                        alt="Current project image"
                        style={{ maxWidth: '200px' }}
                    />
                </div>
            )}
            <input type="file" name="image" accept="image/*" placeholder="new file" />
            <div>
                <input
                    type="checkbox"
                    name="public"
                    defaultChecked={project.public === 1}
                />
                <label htmlFor="public">Publiek</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    name="highlighted"
                    defaultChecked={project.highlighted === 1} // Added defaultChecked
                />
                <label htmlFor="highlighted">Uitgelicht</label>
            </div>
            <input type="submit" value="Submit" />
        </form>
    );
}
