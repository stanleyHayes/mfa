import {createSlice} from "@reduxjs/toolkit";
import {videos} from "./videos-data";

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [...videos],
        videosLoading: false,
        videosError: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectVideo = state => state.videos;
export default videoSlice.reducer;
