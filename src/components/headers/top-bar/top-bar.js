import React from "react";
import {Box} from "@mui/material";
import MobileTopBar from "./mobile-top-bar";
import DesktopTopBar from "./desktop-top-bar";

const TopBar = () => {

    return (
        <Box>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopTopBar />
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileTopBar />
            </Box>
        </Box>
    )
}

export default TopBar;
