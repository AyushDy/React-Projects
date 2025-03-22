import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startTime: 0,
    elapsedTime: 0,
    targetTime : 0,
    isActive: false,
    isRunning: false,
    isTimerCompleted: false,
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        start : {
            reducer(state,action){
                state.startTime = Date.now();
                state.isActive = true;
                state.isRunning = true;
                state.targetTime = action.payload;
            },
            prepare({hours,minutes,seconds}){
                return {
                    payload : (hours*3600 + minutes*60 + seconds)*1000
                }
            }
        },
        pause(state){
            if(state.isActive && state.isRunning){
                state.elapsedTime += Date.now() - state.startTime;
                state.isActive = false;
            }
        },
        resume(state){
            if(!state.isActive && state.isRunning){
                state.startTime = Date.now();
                state.isActive = true;
            }
        },
        complete(state){
            state.isTimerCompleted = true;
            state.isActive = false;
        },
        reset(state){
            state.elapsedTime = 0;
            state.isActive = false;
            state.isTimerCompleted = false;
            state.isRunning = false;
            console.log('reset',state);
        }
    }
})

export const selectTimer = state => {
    return state.timer;
};

export const {start, pause,resume, complete, reset} = timerSlice.actions;

export default timerSlice.reducer;
