import React, { useMemo } from 'react'
import { selectAlarms,triggerMute, toggleAlarm } from '../../features/alarm/alarmSlice'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/alarm-trigger.css'


const AlarmList = () => {
    const alarms = useSelector(selectAlarms);


    const sortedAlarms = useMemo(()=>{
        const triggeredAlarms = [];
        const activeAlarms = [];
        const inactiveAlarms = [];

        alarms.forEach(alarm=>{
            if(alarm.isTriggered) triggeredAlarms.push(alarm);
            else if(alarm.isActive) activeAlarms.push(alarm);
            else inactiveAlarms.push(alarm);
        })

        return [...triggeredAlarms, ...activeAlarms, ...inactiveAlarms];
    }, [alarms]);

    return (
        <ul className="list-container">
            {sortedAlarms.map((alarm) => <MemoizedAlarmListItem alarm={alarm} key={alarm.id} />)}
        </ul>
    )
}

const AlarmListItem = ({alarm}) => {
    const dispatch = useDispatch();

    const handleToggle = (e) => {
        e.stopPropagation();
        dispatch(toggleAlarm(alarm.id));
    }

    const handleMute = () => {
        if(alarm.isTriggered && !alarm.isMuted){
            dispatch(triggerMute(alarm.id));
        }
    }

    const time = formatTo12Hour(alarm.time);
    console.log('rendering list item', alarm);
    return (
        <li 
           className={`list-item ${alarm.isTriggered && !alarm.isMuted && alarm.isActive ? 'triggered' : ''}`} 
           onClick={handleMute}
        >
            <div className="list-item-time">{time}</div>
            <div 
                className={`enable-disable-button ${alarm.isActive ? 'enabled' : 'disabled'}`}
                onClick={handleToggle} 
                >
                   <span className='slider'></span>
            </div>
        </li>
    )
}

const MemoizedAlarmListItem = React.memo(AlarmListItem);

const formatTo12Hour = (time) => {
    const [hours, minutes] = time.split(':');
    const hour = hours % 12 || 12;
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${hour}:${minutes} ${period}`;
}

export default AlarmList