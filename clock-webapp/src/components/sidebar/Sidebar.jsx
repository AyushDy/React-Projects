import React from 'react'
import SideOption from './SideOption'
import { useSelector } from 'react-redux';
import { selectAlarms } from '../../features/alarm/alarmSlice';

const Sidebar = ({tab,setTab}) => {

  const alarms = useSelector(selectAlarms);
  const triggeredAlarms = alarms.filter(alarm => alarm.isTriggered && !alarm.isMuted && alarm.isActive);

  const tabs = ['clock', 'alarm', 'stopwatch', 'timer'];

  const triggeredMap = {
    'clock': false,
    'alarm': triggeredAlarms.length > 0,
    'stopwatch': false,
    'timer': false
  }

  return (
    <aside className='sidebar'>
        <h2 className='sidebar-header'>Clock WebApp</h2>
        {tabs.map(ele=>( <SideOption key={ele} value={ele} tab={tab} setTab={setTab} triggered={triggeredMap[ele]}/> ))}
        {triggeredAlarms.length > 0 &&  <audio loop autoPlay src={triggeredAlarms[0].audio}></audio>}
    </aside>
  )
}

export default Sidebar;