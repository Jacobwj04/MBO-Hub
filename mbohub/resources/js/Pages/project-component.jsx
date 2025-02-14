import React from "react";

function Project({ labelText }) {
    return (
        <article className="project">
            <figure className="image-container">
                <img className="image" src="https://placehold.co/600x400" alt="image from projects" />
            </figure>
            <div className="project-content">
                {labelText && <label className="project-label">{labelText}</label>}
                <h2 className="project-h2">Project</h2>
                <p className="project-summary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos enim quia error! 
                </p>
            </div>
        </article>
    );
}

export default Project;
