import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { start } from "../../features/timer/timerSlice";

const Timerinput = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.id]: e.target.value
        });
    };

    const handleStart = () => {
        dispatch(start(input));
    }

  return (
    <div className="timer-input-container">
      <div className="timer-input">
        <label htmlFor="hours">Hours</label>
        <input id="hours" type="number" value={handleHours(input.hours)} placeholder="0" onChange={handleChange} />

        <label htmlFor="minutes">Minutes</label>
        <input id="minutes" type="number" value={handleNonHour(input.minutes)} placeholder="0" onChange={handleChange} />

        <label htmlFor="seconds">Seconds</label>
        <input id="seconds" type="number" value={handleNonHour(input.seconds)} placeholder="0" onChange={handleChange} />
      </div>
        <div className="">
            <button 
               className="timer-start-button"
               disabled = {input.hours === 0 && input.minutes === 0 && input.seconds === 0}
                onClick={handleStart}
                >Start
            </button>
        </div>
    </div>
  );
};

const handleHours = (hours) => {
    if(hours >= 24) return 23;
    if(hours < 0) return 0;
    return hours;
}

const handleNonHour = (units) => {
    if(units >= 60)   return 59
    if(units<0) return 0;
    return units;
}

export default Timerinput;
