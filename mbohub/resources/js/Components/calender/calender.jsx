import React, { useState, useEffect } from "react";
import { MonthYearSlider } from "./monthpicker";
import { parse, getMonth, getYear } from 'date-fns';
import { nl } from 'date-fns/locale';

export default function Calender({ isHomePage }) {
    const [hiddenTextVisibility, setHiddenTextVisibility] = useState({}); // Track visibility per activity

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

    const activities = [
        {
            date: "22 februari 2025",
            title: "Workshop UX/UI Design",
            label: "excursie",
            text: "zaterdag 22 februari 2025",
            location: "B.Amsterdam",
            subHeading: "Bezoek aan verschillende innovatieve startups in Amsterdam.",
        },
        {
            date: "23 februari 2025",
            title: "Workshop UX/UI Design",
            label: "excursie",
            text: "zaterdag 23 februari 2025",
            location: "B.Amsterdam",
            subHeading: "Bezoek aan verschillende innovatieve startups in Amsterdam.",
        },
        {
            date: "23 april 2025",
            title: "Another Workshop",
            label: "training",
            text: "Zondag 23 april 2025",
            location: "Online",
            subHeading: "Learn new skills.",
        },
        {
            date: "15 maart 2025",
            title: "March Workshop",
            label: "training",
            text: "Zaterdag 15 maart 2025",
            location: "Some Place",
            subHeading: "March event",
        },
        {
            date: "16 maart 2025",
            title: "Maart Workshop",
            label: "training",
            text: "Zaterdag 16 maart 2025",
            location: "Some Place",
            subHeading: "March event",
        },
        {
            date: "16 maart 2025",
            title: "Maart Workshop",
            label: "training",
            text: "Zaterdag 16 maart 2025",
            location: "Some Place",
            subHeading: "March event",
        },
    ];

    const filteredActivities = activities.filter((activity) => {
        try {
            const parsedDate = parse(activity.date, 'dd MMMM yyyy', new Date(), { locale: nl });
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
    console.log(filteredActivities);
    console.log(displayedActivities);


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
                                        <span id="date-of-activity">{activity.date}</span>
                                    </figure>
                                    <div></div>
                                    <section className="calender__activities" data-expanded={hiddenTextVisibility[activityKey] ? "true" : "false"}>
                                        <div className="calender__header">
                                            <h2 className="calender__title">{activity.title}</h2>
                                            <span className="calender__label">{activity.label}</span>
                                        </div>
                                        <p className="calender__text">{activity.text}</p>
                                        <p className="calender__text">Locatie: {activity.location}</p>
                                        <h3 className="calender__subHeading">{activity.subHeading}</h3>
                                        <section className={`calender__hiden calender__hiden--${hiddenTextVisibility[activityKey] ? 'show' : 'hidden'}`}>
                                            <p className={`calender__hidenText calender__hidenText--${hiddenTextVisibility[activityKey] ? 'show' : 'hidden'}`}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non eos amet aperiam accusantium quia delectus voluptatem voluptatum perferendis deleniti saepe eaque, laborum minus, pariatur placeat quidem dolorum voluptate quas!
                                            </p>
                                            <a href="" className={`calender__link calender__link--${hiddenTextVisibility[activityKey] ? 'show' : 'hidden'}`}>Schrijf je in</a>
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
                    <li className="calender__activity">
                        <div></div>
                        <section className="calender__activities">
                            <div className="calender__header">
                                <h2 className="calender__title">Geen activiteit op dit moment</h2>
                                <span className="calender__label"></span>
                            </div>
                            <p className="calender__text"></p>
                            <p className="calender__text">Locatie:</p>
                            <h3 className="calender__subHeading"></h3>
                        </section>
                    </li>
                )}
                {isHomePage && (
                    <a href={route('calender.calender')} className="calender__showMore">Meer activiteit</a>
                )}
            </ul>
        </article>
    );
}