import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        themeVariant: 'dark',
        drawerOpen: false,
        viewMode: 'grid'
    },
    reducers: {
        toggleTheme: (state) => {
            state.themeVariant = state.themeVariant === 'light' ? 'dark': 'light'
        },
        openDrawer: (state) => {
            state.drawerOpen = true;
        },
        closeDrawer: (state) => {
            state.drawerOpen = false;
        },
        toggleViewMode: (state) => {
            state.viewMode = state.viewMode === 'grid' ? 'list': 'grid'
        },
    }
});

export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {...uiSlice.actions};
export default uiSlice.reducer;
