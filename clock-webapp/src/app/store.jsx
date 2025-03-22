import {configureStore} from '@reduxjs/toolkit';
import clockReducer from '../features/clock/clockSlice';
import alarmsReducer from '../features/alarm/alarmSlice';
import stopwatchReducer from '../features/stopwatch/stopwatchSlice';
import timerReducer from '../features/timer/timerSlice';




export const store = configureStore({
    reducer : {
        clock: clockReducer,
        alarms: alarmsReducer,
        stopwatch : stopwatchReducer,
        timer : timerReducer
    }
})


