import {Box} from "@mui/material";
import DesktopNavBar from "./desktop-nav-bar";
import MobileNavBar from "./mobile-nav-bar";

const NavBar = () => {

    return (
        <Box>
            <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DesktopNavBar />
            </Box>
            <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <MobileNavBar />
            </Box>
        </Box>
    )
}

export default NavBar;
