import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";
import eventsReducer from "./../features/events/events-slice";
import newsReducer from "./../features/news/news-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        events: eventsReducer,
        news: newsReducer
    },
    preloadedState: {
        ui: {
            themeVariant: 'light',
            drawerOpen: false,
            viewMode: 'grid'
        }
    }
});

export default store;
