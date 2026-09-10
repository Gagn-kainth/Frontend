import { useState } from "react";
import "./DateSelector.css";

function DateSelector({ selectedDate, setSelectedDate }) {
  const [startDate, setStartDate] = useState(new Date());

  // Generate 7 dates
  const getDates = () => {
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      dates.push(date);
    }

    return dates;
  };

  const dates = getDates();

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const compareDate = new Date(date);
    compareDate.setHours(0, 0, 0, 0);

    return compareDate < today;
  };

  // Next 7 days
  const nextDates = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + 7);

    setStartDate(newDate);
  };

  // Previous 7 days
  const previousDates = () => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() - 7);

    setStartDate(newDate);
  };

  const formatDay = (date) => {
    return date
      .toLocaleDateString("en-US", {
        weekday: "short",
      })
      .toUpperCase();
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
    });
  };

  return (
    <section className="date-section">
      <p className="date-title">SELECT DATE</p>

      <div className="date-selector">
        <button className="arrow-btn" onClick={previousDates}>
          ‹
        </button>

        <div className="date-list">
          {dates.map((date) => {
            const isSelected =
              selectedDate?.toDateString() === date.toDateString();
            const disabled = isPastDate(date);

            return (
              <button
                key={date.toISOString()}
                className={`date-card ${isSelected ? "selected" : ""} ${
                  disabled ? "disabled" : ""
                }`}
                onClick={() => !disabled && setSelectedDate(date)}
                disabled={disabled}
              >
                <span className="day">{formatDay(date)}</span>

                <span className="date-number">{date.getDate()}</span>

                <span className="month">{formatMonth(date)}</span>
              </button>
            );
          })}
        </div>

        <button className="arrow-btn" onClick={nextDates}>
          ›
        </button>
      </div>
    </section>
  );
}

export default DateSelector;