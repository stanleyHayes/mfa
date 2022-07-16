import {createSlice} from "@reduxjs/toolkit";
import {announcements} from "./announcement-data";

const announcementSlice = createSlice({
    name: 'announcements',
    initialState: {
        announcements: [...announcements],
        announcementsLoading: false,
        announcementsError: null,
        singlePublication: null
    },
    reducers: {},
    extraReducers: builder => {}
});

export const selectAnnouncement = state => state.announcements;
export default announcementSlice.reducer;
