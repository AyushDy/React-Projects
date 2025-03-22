import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLaps, start, pause, reset, addLap } from '../../features/stopwatch/stopwatchSlice'


const StopwatchPage = () => {
  const laps = useSelector(selectLaps);
  const dispatch = useDispatch();
  const {isActive, elapsedTime, startingTime} = useSelector(state=>state.stopwatch);

  const [displayTime, setDisplayTime] = useState('00:00:00:000');

  useEffect(()=>{
    let interval;
    if(isActive){
      interval = setInterval(()=>{
         const currentTime =  elapsedTime + (Date.now() - startingTime); 
         setDisplayTime(formatTime(currentTime));
      },10)
    }
    return ()=>clearInterval(interval);
  }, [elapsedTime, startingTime,isActive])

  return (
    <div className='page-container' >
      <div className="stopwatch-display">
        <h1>{displayTime}</h1>
      </div>
      <div className="stopwatch-controls">
        <button className='stopwatch-button' onClick={()=>{isActive ? dispatch(pause()):dispatch(start())}}>
          {isActive ? 'Pause': 'Start'}
        </button>
        <button className='stopwatch-button' onClick={()=>{dispatch(reset()); setDisplayTime('00:00:00:000')}}>Reset</button>
        <button className='stopwatch-button' onClick={()=>{dispatch(addLap())}} disabled={!isActive} >Lap</button>
      </div>

      <div className="laps-container">
        {laps && laps.map((lap,index)=>(
          <div key={index} className="lap-item">{index+1}: {formatTime(lap)}</div>
        ))}
      </div>
    </div>
  )
}

const formatTime = (t)=>{
  const hours = Math.floor(t/3600000).toString().padStart(2,'0');
  const minutes = Math.floor((t%3600000)/60000).toString().padStart(2,'0');
  const seconds = Math.floor((t%60000)/1000).toString().padStart(2,'0');
  const milliseconds = (t%1000).toString().padStart(3,'0');

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export default StopwatchPage