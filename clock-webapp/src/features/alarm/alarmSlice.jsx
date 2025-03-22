import { nanoid , createSlice} from "@reduxjs/toolkit";


const initialState = [
    {
        time: '01:54',
        id: '1',
        isActive: true,
        audio : 'https://www.soundjay.com/buttons/beep-01a.mp3',
        isTriggered: false,
        isMuted : false,
    },
]


const alarmSlice = createSlice({
    name: 'alarm',
    initialState,
    reducers : {
        addAlarm: {
            reducer(state, action){
                const existingAlarm = state.find(alarm => alarm.time === action.payload.time);
                if(existingAlarm){
                    existingAlarm.isActive = true;
                }
                else{
                    state.push(action.payload);
                }
            },
            prepare(time){
                return { 
                    payload : {
                        time,
                        id: nanoid(),
                        isActive: true,
                        audio : 'https://www.soundjay.com/buttons/beep-01a.mp3',
                        isTriggered: false,
                        isMuted : false
                    }
                }
            }
        },
        toggleAlarm(state, action){
            const alarm = state.find(alarm => alarm.id === action.payload);
            if(alarm){
                alarm.isActive = !alarm.isActive;
            }
        },
        triggerAlarm(state, action){
            const alarm = state.find(alarm => alarm.id === action.payload);
            if(alarm){
                const wasTriggered = alarm.isTriggered;
                alarm.isTriggered = !wasTriggered;
            }
        },
        deleteAlarm(state, action){
            state.filter(alarm => alarm.id !== action.payload);
        },
        updateAlarm(state, action){
            const alarm = state.find(alarm => alarm.id === action.payload.id);
            alarm.time = action.payload.time;
        },
        triggerMute(state, action){
            const alarm = state.find(alarm => alarm.id === action.payload);
            if(alarm){
                alarm.isMuted = true;
            }
            console.log('muted');
        },
        triggerUnMute(state, action){
            const alarm = state.find(alarm => alarm.id === action.payload);
            if(alarm){
                alarm.isMuted = false;
            }
            console.log('unmuted');
        }
    }
})

export const selectAlarms = state => state.alarms;

export const {addAlarm,triggerMute,triggerUnMute, toggleAlarm,triggerAlarm, deleteAlarm, updateAlarm} = alarmSlice.actions;

export default alarmSlice.reducer;