import { useDispatch } from 'react-redux';
import {addAlarm} from '../../features/alarm/alarmSlice';
import { useState } from 'react';

const AddAlarm = ({setIsModal}) => {
  const [time, setTime] = useState('00:00');
  const dispatch = useDispatch();

  return (
    <div className="add-alarm-container">
      <div className="add-alarm-header">
        <h2>SET ALARM</h2>
        <div onClick={()=>{setIsModal(false)}} className="close-btn">✕</div>
      </div>
      
      <div className="time-picker-container">
        <label className="input-label">SELECT TIME:</label>
        <div className="pixel-input-wrapper">
          <input 
            type="time" 
            className="pixel-time-input"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
      </div>

      <div className="button-container">
        <button 
          className="pixel-button"
          onClick={() => {
            dispatch(addAlarm(time))
            
            }}
        >
          <span className="button-glare"></span>
          CONFIRM
        </button>
      </div>
    </div>
  )
}
export default AddAlarm