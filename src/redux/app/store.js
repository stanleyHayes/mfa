import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "./../features/ui/ui-slice";
import eventsReducer from "./../features/events/events-slice";
import newsReducer from "./../features/news/news-slice";

import publicationsReducer from "./../features/publications/publication-slice";
import photosReducer from "./../features/photos/photo-slice";
import pressReleasesReducer from "./../features/press-releases/press-release-slice";
import videosReducer from "./../features/videos/video-slice";
import announcementsReducer from "./../features/announcements/announcement-slice";
import {MFA_CONSTANTS} from "../../utils/constants";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        events: eventsReducer,
        news: newsReducer,
        videos: videosReducer,
        announcements: announcementsReducer,
        pressReleases: pressReleasesReducer,
        photos: photosReducer,
        publications: publicationsReducer
    },
    preloadedState: {
        ui: {
            themeVariant: localStorage.getItem(MFA_CONSTANTS.MFA_THEME_VARIANT) ? JSON.parse(localStorage.getItem(MFA_CONSTANTS.MFA_THEME_VARIANT)): 'light',
            drawerOpen: false,
            viewMode: localStorage.getItem(MFA_CONSTANTS.MFA_VIEW_MODE) ? JSON.parse(localStorage.getItem(MFA_CONSTANTS.MFA_VIEW_MODE)): 'grid'
        }
    }
});

export default store;
