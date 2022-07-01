import {createSlice} from "@reduxjs/toolkit";
import {news} from "./news-data";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [...news],
        singleNews: news[0],
        newsLoading: false,
        newsError: null,
        count: news.length
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectNews = state => state.news;

export default newsSlice.reducer;
