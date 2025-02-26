import React, { useState, useEffect } from 'react';

const months = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

export function MonthYearSlider({ onMonthYearChange }) { // Changed to named export
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [monthIndex, setMonthIndex] = useState(currentDate.getMonth());

  const handlePrevMonth = () => {
    if (monthIndex === 0) {
      setYear((prevYear) => prevYear - 1);
      setMonthIndex(11);
    } else {
      setMonthIndex((prevMonthIndex) => prevMonthIndex - 1);
    }
  };

  const handleNextMonth = () => {
    if (monthIndex === 11) {
      setYear(year + 1);
      setMonthIndex(0);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  };

  const handlePrevYear = () => {
    setYear(year - 1);
  };

  const handleNextYear = () => {
    setYear(year + 1);
  };

  useEffect(() => {
    notifyParent();
  }, [year, monthIndex]);

  const notifyParent = () => {
    if (onMonthYearChange) {
      onMonthYearChange({ year: year, month: monthIndex });
    }
  };

  return (
    <div className="month-year-slider">
      <div className="year-navigation">
        <button aria-label="Previous Year" onClick={handlePrevYear}>
          &lt;&lt;
        </button>
        <span>{year}</span>
        <button aria-label="Next Year" onClick={handleNextYear}>
          &gt;&gt;
        </button>
      </div>
      <div className="month-navigation">
        <button aria-label="Previous Month" onClick={handlePrevMonth}>
          &lt;
        </button>
        <span>{months[monthIndex]}</span>
        <button aria-label="Next Month" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
    </div>
  );
}