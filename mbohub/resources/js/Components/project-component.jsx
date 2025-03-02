import React from "react";

function Project({title, text, topLabelText, bottomLabelText, date, readMore, circle, textcentered }) {
    return (
        <article className="project-component">
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
                {textcentered ? (
                    <>
                        <h2 className="project-h2-center">{title}</h2>
                        <p className="project-summary-center"> {text} </p>
                    </>
                ) : (
                    <>
                        <h2 className="project-h2">{title}</h2>
                        <p className="project-summary"> {text} </p>
                    </>
                )}
                {readMore && <a className="project-read" href="">{readMore}</a>}
            </div>
        </article>
    );
}

export default Project;
