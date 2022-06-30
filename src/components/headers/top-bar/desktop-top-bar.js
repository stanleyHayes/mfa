import {Toolbar} from "@mui/material";

const DesktopTopBar = () => {

    return (
        <Toolbar variant="dense" sx={{
            backgroundColor: 'secondary.main',
            borderBottomStyle: 'solid',
            borderBottomWidth: 2,
            borderBottomColor: 'accent.main'
        }}>

        </Toolbar>
    )
}

export default DesktopTopBar;
