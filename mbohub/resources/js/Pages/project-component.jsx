import React from "react";

function Project({ topLabelText, bottomLabelText, date, readMore, circle }) {
    return (
        <article className="project">
            <figure className="image-container">
            {topLabelText && <label className="project-top-label">{topLabelText}</label>}
                {circle ? (
                    <img className="circle-image" src="https://placehold.co/600x400" alt="image from projects" />
                ) : (
                    <img className="square-image" src="https://placehold.co/600x400" alt="image from projects" />
                )}
            </figure>
            <div className="project-content">
                {bottomLabelText && <label className="project-bottom-label">{bottomLabelText}</label>}
                {date && <time className="project-date">{date}</time>}
                <h2 className="project-h2">Project</h2>
                <p className="project-summary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos enim quia error! 
                </p>
                {readMore && <a className="project-read" href="">{readMore}</a>}
            </div>
        </article>
    );
}

export default Project;
