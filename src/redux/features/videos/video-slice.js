import {createSlice} from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        videos: [],
        videosLoading: false,
        videosError: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectVideo = state => state.videos;
export default videoSlice.reducer;
