import React from "react";
import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../headers/header";
import DrawerContent from "../drawers/drawer-content";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{minHeight: '100vh', backgroundColor: 'background.default'}}>
            <Box sx={{pt: {xs: 13.5, lg: 13.5}}}>
                <Header/>
            </Box>
            <Box>
                {children}
            </Box>

            <SwipeableDrawer
                onOpen={() => dispatch(UI_ACTION_CREATORS.openDrawer())}
                open={drawerOpen}
                onClose={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}


export default Layout;