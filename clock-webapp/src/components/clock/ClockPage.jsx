import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTime } from '../../features/clock/clockSlice'
import { updateTime } from '../../features/clock/clockSlice'


const ClockPage = () => {
    const time = useSelector(selectTime);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        const interval = setInterval(()=>{
            dispatch(updateTime());
        }, 1000);

        return ()=>clearInterval(interval);
    }, [dispatch])

  return (
    <div className='page-container'>
        <div className="clock-container">
           <h1 className='clock-display'>{time}</h1>
        </div>
    </div>
  )
}

export default ClockPage