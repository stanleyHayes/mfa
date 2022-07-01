import {createSlice} from "@reduxjs/toolkit";

const pressReleaseSlice = createSlice({
    name: 'pressReleases',
    initialState: {
        pressReleases: [],
        pressReleasesLoading: false,
        pressReleasesError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectPressRelease = state => state.pressReleases;
export default pressReleaseSlice.reducer;
