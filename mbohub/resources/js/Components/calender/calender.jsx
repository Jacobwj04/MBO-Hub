import React, { useState, useEffect } from "react";
import { MonthYearSlider } from "./monthpicker";
import { parse, getMonth, getYear, format, isValid } from 'date-fns';
import { nl } from 'date-fns/locale';

export default function Calender({ isHomePage, calenders }) {
    console.log(calenders);

    function formatDate(dateString) {
        try {
            const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
            if (isValid(parsedDate)) {
                return format(parsedDate, 'dd MMMM yyyy', { locale: nl });
            } else {
                console.error("Invalid parsed date:", dateString);
                return "Invalid date";
            }
        } catch (error) {
            console.error("Error formatting date:", error);
            return "Invalid date";
        }
    }

    const [hiddenTextVisibility, setHiddenTextVisibility] = useState({});

    const [selectedMonthYear, setSelectedMonthYear] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
    });

    const handleMonthYearChange = (monthYear) => {
        setSelectedMonthYear(monthYear);
    };

    const showHiddenText = (activityKey) => {
        setHiddenTextVisibility((prevVisibility) => ({
            ...prevVisibility,
            [activityKey]: !prevVisibility[activityKey],
        }));
    };

    const sortedCalenders = [...calenders].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    const filteredActivities = sortedCalenders.filter((activity) => {
        try {
            const parsedDate = parse(activity.date, 'yyyy-MM-dd', new Date());
            const activityMonthIndex = getMonth(parsedDate);
            const activityYear = getYear(parsedDate);

            const isMatch = (
                activityMonthIndex === selectedMonthYear.month &&
                activityYear === selectedMonthYear.year
            );

            return isMatch;
        } catch (error) {
            console.error(`Error parsing date for activity: ${activity.title}`, error);
            return false;
        }
    });

    const displayedActivities = isHomePage ? filteredActivities.slice(0, 3) : filteredActivities;

    return (
        <article className="calender">
            <h2 className="calender__mainTitle" >Evenementenkalender</h2>
            <MonthYearSlider onMonthYearChange={handleMonthYearChange} />
            <ul className="calender__dates">
                {displayedActivities.length > 0 ? (
                    displayedActivities.map((activity, index) => {
                        const activityKey = index;
                        return (
                            <li className="calender__activity" key={activityKey}>
                                <section className="calender__container">
                                    <figure className="calender__date">
                                        <span id="date-of-activity">{formatDate(activity.date)}</span>
                                    </figure>
                                    <div></div>
                                    <section className="calender__activities" data-expanded={hiddenTextVisibility[activityKey] ? "true" : "false"}>
                                        <div className="calender__header">
                                            <h2 className="calender__title">{activity.title}</h2>
                                            <span className="calender__label">{activity.label}</span>
                                        </div>
                                        <p className="calender__text">{formatDate(activity.date)}</p>
                                        <p className="calender__text">Locatie: {activity.location}</p>
                                        <h3 className="calender__subHeading">{activity.summary}</h3>
                                        <section className={`calender__hiden calender__hiden--${hiddenTextVisibility[activityKey] ? 'show' : 'hidden'}`}>
                                            <p className={`calender__hidenText calender__hidenText--${hiddenTextVisibility[activityKey] ? 'show' : 'hidden'}`}>
                                                {activity.hiddenText}
                                            </p>
                                            <a href={activity.link} className={`calender__link calender__link--${hiddenTextVisibility[activityKey] ? 'show' : 'hidden'}`}>Schrijf je in</a>
                                        </section>
                                        <button className="calender__toggle" onClick={() => showHiddenText(activityKey)}>
                                            {hiddenTextVisibility[activityKey] ?
                                                (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                                    </svg>
                                                ) : (

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                    </svg>
                                                )
                                            }
                                        </button>
                                    </section>
                                </section>
                            </li>
                        );
                    })
                ) : (
                    <li className="calender__activity calender__activity--empty">
                        <div></div>
                        <section className="calender__activities calender__activities--empty">
                            <div className="calender__header">
                                <h2 className="calender__title">Geen activiteit op dit moment</h2>
                            </div>
                            <p className="calender__text"></p>
                            <h3 className="calender__subHeading"></h3>
                        </section>
                    </li>
                )}
                {isHomePage && (
                    <a href={route('calender.index')} className="calender__showMore">Meer activiteit</a>
                )}
            </ul>
        </article>
    );
}