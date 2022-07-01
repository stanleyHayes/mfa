import {createSlice} from "@reduxjs/toolkit";
import {events} from "./events-data";

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        events: [...events],
        singleNews: null,
        eventsLoading: false,
        eventsError: null,
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectEvent = state => state.events;

export default eventsSlice.reducer;
