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
    <section className="date">
      <div className="date__wrapper">
        <button aria-label="Previous Month" onClick={handlePrevMonth} className='date__button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <span>{months[monthIndex]}</span>
        <button aria-label="Next Month" onClick={handleNextMonth} className='date__button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
      <div className="date__wrapper">
        <button aria-label="Previous Year" onClick={handlePrevYear} className='date__button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <span>{year}</span>
        <button aria-label="Next Year" onClick={handleNextYear} className='date__button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
    </section>
  );
}