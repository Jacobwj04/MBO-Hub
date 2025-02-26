import React, { useState, useEffect } from "react";
import { MonthYearSlider } from "./monthpicker";
import { parse, getMonth, getYear } from 'date-fns';
import { nl } from 'date-fns/locale';

export default function Calender() {
    const [selectedMonthYear, setSelectedMonthYear] = useState({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
    });

    const handleMonthYearChange = (monthYear) => {
        console.log("MonthYear changed to:", monthYear);
        setSelectedMonthYear(monthYear);
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

            console.log(`Activity: ${activity.title}, Date: ${activity.date}, Parsed Month: ${activityMonthIndex}, Parsed Year: ${activityYear}, Selected Month: ${selectedMonthYear.month}, Selected Year: ${selectedMonthYear.year}, Match: ${isMatch}`);

            return isMatch;
        } catch (error) {
            console.error(`Error parsing date for activity: ${activity.title}`, error);
            return false;
        }
    });

    return (
        <>
            <MonthYearSlider onMonthYearChange={handleMonthYearChange} />
            <article className="calender">
                <h2>Evenementenkalender</h2>
                <ul className="calender__dates">
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((activity, index) => (
                            <li className="calender__activity" key={activity.title + activity.date}>
                                <figure className="calender__date">
                                    <span id="date-of-activity">{activity.date}</span>
                                </figure>
                                <div></div>
                                <section className="calender__activities">
                                    <div className="calender__header">
                                        <h2 className="calender__title">{activity.title}</h2>
                                        <span className="calender__label">{activity.label}</span>
                                    </div>
                                    <p className="calender__text">{activity.text}</p>
                                    <p className="calender__text">Locatie: {activity.location}</p>
                                    <h3 className="calender__subHeading">{activity.subHeading}</h3>
                                </section>
                            </li>
                        ))
                    ) : (
                        <></>
                    )}
                </ul>
            </article>
        </>
    );
}