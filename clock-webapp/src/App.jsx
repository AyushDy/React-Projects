import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ClockPage from './components/clock/ClockPage';
import AlarmPage from './components/alarm/AlarmPage';
import StopwatchPage from './components/stopwatch/StopwatchPage';
import TimerPage from './components/timer/TimerPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlarms,triggerAlarm , triggerUnMute} from './features/alarm/alarmSlice';



function App() {
  const [tab, setTab] = useState('clock');
  const dispatch = useDispatch();
  const alarms = useSelector(selectAlarms);

  useEffect(()=>{
    let interval = setInterval(()=>{

      const activeAlarms = alarms.filter(alarm=>alarm.isActive);
      // console.log('active alarms', activeAlarms);
        activeAlarms.forEach(alarm=>{
          const match = isTimeMatch(alarm.time);

          if(alarm.isMuted && !match){
            dispatch(triggerUnMute(alarm.id));
          }
          else if(!alarm.isTriggered && !alarm.isMuted && match){
            console.log('triggering alarm', alarm);
            dispatch(triggerAlarm(alarm.id));
          }
          else if(alarm.isTriggered && !match){
            dispatch(triggerAlarm(alarm.id));
          }

        })
      }, 1000);
      
    return ()=>clearInterval(interval);
  }, [alarms, dispatch]);    

  return (
    <div className="container"> 
      <Sidebar tab={tab} setTab={setTab} /> 
      {tab === 'clock' && <ClockPage  />} 
      {tab === 'alarm' && <AlarmPage />} 
      {tab === 'stopwatch' && <StopwatchPage />}
      {tab === 'timer' && <TimerPage />}
    </div>
  )
}

function isTimeMatch(alarmTime, current= new Date().toLocaleTimeString().split(':')){
  const alarm= alarmTime.split(':');
  const meridian = current[2].split(' ')[1];
  if(meridian === 'PM' && current[0] !== '12') current[0] = String(Number(current[0]) + 12);
  if(meridian === 'AM' && current[0] === '12') current[0] = '00';
  return Number(alarm[0]) === Number(current[0]) && Number(alarm[1]) === Number(current[1]);
}

export default App;
