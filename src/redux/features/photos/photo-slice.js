import {createSlice} from "@reduxjs/toolkit";

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
        photosLoading: false,
        photosError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectPhoto = state => state.photos;
export default photoSlice.reducer;
