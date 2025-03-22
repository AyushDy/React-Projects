import {useState} from 'react';
import AddAlarm from './AddAlarm';
import AlarmList from './AlarmList';


const AlarmPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='page-container'>
      <div className="page-contents">
      <div className="alarm-container">
      
      {!isModalOpen && <button className='add-alarm-btn' onClick={() => setIsModalOpen(true)}>Add Alarm +</button>}
      {isModalOpen && <AddAlarm setIsModal = {setIsModalOpen} />}
      <AlarmList />
      </div>
      </div>
    </div>
  )
}



export default AlarmPage