import {createSlice} from "@reduxjs/toolkit";

const publicationSlice = createSlice({
    name: 'publications',
    initialState: {
        publications: [],
        publicationsLoading: false,
        publicationsError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectPublication = state => state.publications;
export default publicationSlice.reducer;
