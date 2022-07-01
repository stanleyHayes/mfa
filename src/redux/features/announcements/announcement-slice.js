import {createSlice} from "@reduxjs/toolkit";

const announcementSlice = createSlice({
    name: 'announcements',
    initialState: {
        announcements: [],
        announcementsLoading: false,
        announcementsError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectAnnouncement = state => state.announcements;
export default announcementSlice.reducer;
