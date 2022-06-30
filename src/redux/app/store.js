import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer
    },
    preloadedState: {
        ui: {
            themeVariant: 'light',
            drawerOpen: false
        }
    }
});

export default store;
