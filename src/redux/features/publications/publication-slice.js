import {createSlice} from "@reduxjs/toolkit";
import {publications} from "./publications-data";

const publicationSlice = createSlice({
    name: 'publications',
    initialState: {
        publications: [...publications],
        publicationsLoading: false,
        publicationsError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectPublication = state => state.publications;
export default publicationSlice.reducer;
