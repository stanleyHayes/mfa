import {createSlice} from "@reduxjs/toolkit";
import {photos} from "./photos-data";

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [...photos],
        photosLoading: false,
        photosError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectPhoto = state => state.photos;
export default photoSlice.reducer;
