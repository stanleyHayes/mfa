import {createSlice} from "@reduxjs/toolkit";
import {MFA_CONSTANTS} from "../../../utils/constants";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        themeVariant: 'light',
        drawerOpen: false,
        viewMode: 'grid'
    },
    reducers: {
        toggleTheme: (state) => {
            localStorage.setItem(MFA_CONSTANTS.MFA_THEME_VARIANT, JSON.stringify(state.themeVariant === 'light' ? 'dark' : 'light'));
            state.themeVariant = state.themeVariant === 'light' ? 'dark' : 'light'
        },
        openDrawer: (state) => {
            state.drawerOpen = true;
        },
        closeDrawer: (state) => {
            state.drawerOpen = false;
        },
        toggleViewMode: (state) => {
            localStorage.setItem(MFA_CONSTANTS.MFA_VIEW_MODE, JSON.stringify(state.viewMode === 'grid' ? 'list' : 'grid'));
            state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid'
        },
    }
});

export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {...uiSlice.actions};
export default uiSlice.reducer;
