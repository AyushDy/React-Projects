import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false,
    startingTime: 0,
    elapsedTime : 0,
    laps : []
}


const stopwatchSlice = createSlice({
    name : 'stopwatch',
    initialState,
    reducers : {
        start(state){
            state.isActive = true;
            state.startingTime =  Date.now();
        },
        pause(state){
            if(state.isActive){
                state.elapsedTime +=  Date.now() - state.startingTime;
                state.isActive = false;
            }
        },
        reset(state){
            state.isActive = false;
            state.elapsedTime = 0;
            state.laps = [];
        },
        addLap(state){
            const currentTime = state.elapsedTime + (state.isActive ? Date.now()- state.startingTime : 0);
            state.laps = [...state.laps, currentTime];
        }
    }
})



export const selectStopwatchTime = state => state.stopwatch.elapsedTime;
export const selectLaps = state => state.stopwatch.laps;

export const { start, pause, reset, addLap } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;