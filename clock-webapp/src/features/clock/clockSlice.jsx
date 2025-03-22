import { createSlice} from '@reduxjs/toolkit';
// import { updateAlarm } from '../alarm/alarmSlice';

const initialState = {
    value: new Date().toLocaleTimeString(),
    alarmsTrigered : false
}

const clockSlice = createSlice({
    name: 'clocksssssss',
    initialState,
    reducers: {
        updateTime(state){
            state.value = new Date().toLocaleTimeString();
        },
        updateAlarmTriggered(state, action){
            state.alarmsTrigered = action.payload;
        }
    }
})

export const selectTime = state => state.clock.value;
export const {updateTime} = clockSlice.actions;
export default clockSlice.reducer;