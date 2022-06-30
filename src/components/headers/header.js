import {AppBar} from "@mui/material";
import TopBar from "./top-bar/top-bar";
import NavBar from "./nav-bar/nav-bar";

const Header = () => {
    return (
        <AppBar variant="elevation" sx={{backgroundColor: 'colors.toolbar'}} elevation={0}>
            <TopBar/>
            <NavBar/>
        </AppBar>
    )
}

export default Header;
