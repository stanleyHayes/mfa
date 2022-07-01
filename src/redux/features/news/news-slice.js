import {createSlice} from "@reduxjs/toolkit";
import {news} from "./news-data";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [...news],
        singleNews: null,
        newsLoading: false,
        newsError: null,
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectNews = state => state.news;

export default newsSlice.reducer;
