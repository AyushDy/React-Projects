import React, { useEffect, useState } from "react";
import {
  selectTimer,
  complete,
  reset,
  pause,
  resume,
} from "../../features/timer/timerSlice";
import { useDispatch, useSelector } from "react-redux";
import Timerinput from "./Timerinput";

const TimerPage = () => {
  const {
    startTime,
    elapsedTime,
    targetTime,
    isActive,
    isRunning,
    isTimerCompleted,
  } = useSelector(selectTimer);
  const dispatch = useDispatch();

  const [timetoDisplay, setTimetoDisplay] = useState("00:00:00");

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        const currentTime = elapsedTime + (Date.now() - startTime);
        let timetoDisplay2 = targetTime - currentTime;
        if (timetoDisplay2 <= 0) {
          dispatch(complete());
          clearInterval(interval);
        }
      }, 100);
    }
    return () => clearInterval(interval);
  }, [elapsedTime, startTime, targetTime, isActive, dispatch]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        const currentTime = elapsedTime + (Date.now() - startTime);
        setTimetoDisplay(formatTime(targetTime - currentTime));
      }, 100);
    }
    if (isTimerCompleted) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [
    elapsedTime,
    startTime,
    targetTime,
    isTimerCompleted,
    timetoDisplay,
    isActive,
  ]);

  return (
    <div className="page-container">
      <div className="timer-display-container">
        <h1 style={{ textAlign: "center" }}>TIMER</h1>
        {!isRunning && <Timerinput timetoDisplay={timetoDisplay} />}
        <div
          className={`timer-display ${isTimerCompleted ? "triggered" : ""}`}
          onClick={() => {
            if (isTimerCompleted) dispatch(reset());
          }}
        >
          <h1>{timetoDisplay}</h1>
        </div>
        {isRunning && (
          <div className="button-container">
          <button
            className="timer-buttons"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            className="timer-buttons"
            onClick={() => {
              isActive ? dispatch(pause()) : dispatch(resume());
            }}
          >
            {isActive ? "Pause" : "Resume"}
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

const formatTime = (t) => {
  if (t <= 0) return "00:00:00";

  const hours = Math.floor(t / 3600000)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((t % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((t % 60000) / 1000)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export default TimerPage;
