import {createSlice} from "@reduxjs/toolkit";
import {pressReleases} from "./press-releases-data";

const pressReleaseSlice = createSlice({
    name: 'pressReleases',
    initialState: {
        pressReleases: [...pressReleases],
        pressReleasesLoading: false,
        pressReleasesError: null,
        singlePublication: null,
        count: pressReleases.length
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectPressRelease = state => state.pressReleases;
export default pressReleaseSlice.reducer;
