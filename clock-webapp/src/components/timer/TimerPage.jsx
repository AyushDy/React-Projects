import React, { useEffect, useState } from "react";
import { selectTimer, complete, reset, pause, resume } from "../../features/timer/timerSlice";
import { useDispatch, useSelector } from "react-redux";
import Timerinput from "./Timerinput";

const TimerPage = () => {
  const { startTime, elapsedTime, targetTime, isActive, isTimerCompleted } = useSelector(selectTimer);
  const dispatch = useDispatch();

  const [timetoDisplay, setTimetoDisplay] = useState(targetTime); 

  useEffect(()=>{
    let interval;
    if(isActive){
      interval = setInterval(()=>{
        const currentTime = elapsedTime + (Date.now()-startTime);
        let timetoDisplay = targetTime - currentTime;
        if(timetoDisplay <= 0){
          dispatch(complete());
          clearInterval(interval);
        }
      },100)
    }
    return ()=>clearInterval(interval);
  }, [elapsedTime, startTime, targetTime, isActive, dispatch]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTimetoDisplay(targetTime - elapsedTime - (Date.now()-startTime));
    },100)
    if(isTimerCompleted){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  },[elapsedTime, startTime, targetTime, isTimerCompleted])

  return (
    <div className="page-container">
      <div className="timer-display-container">
        <h1 style={{textAlign:"center"}}>TIMER</h1>
        {!isActive && <Timerinput />}
        <div className={`timer-display ${isTimerCompleted ? 'triggered' : ''}`}>
          <h1>{formatTime(startTime + targetTime - Date.now())}</h1>
        </div>
        <button className="stopwatch-button" onClick={()=>dispatch(reset())}>Reset</button>
        <button className="stopwatch-button" onClick={()=>{isActive? dispatch(pause()):dispatch(resume())}} >{isActive? 'Pause':'Resume'}</button>
      </div>
    </div>
  );
};

const formatTime = (t) => {
  if(t<=0) return '00:00:00';

  const hours = Math.floor(t / 3600000).toString().padStart(2, "0");
  const minutes = Math.floor((t % 3600000) / 60000).toString().padStart(2, "0");
  const seconds = Math.floor((t % 60000) / 1000).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

export default TimerPage;
