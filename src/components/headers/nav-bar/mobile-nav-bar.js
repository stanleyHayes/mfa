import {Grid, Toolbar} from "@mui/material";
import {useDispatch} from "react-redux";
import {Menu} from "@mui/icons-material";
import {UI_ACTION_CREATORS} from "../../../redux/features/ui/ui-slice";
import logo from "../../../assets/images/logo.png";

const MobileNavBar = () => {

    const dispatch = useDispatch();

    return (
        <Toolbar
            variant="dense"
            sx={{backgroundColor: 'colors.toolbar'}}>
            <Grid container={true} justifyContent="space-between" alignItems="center">
                <Grid item={true}>
                    <Menu onClick={() => dispatch(UI_ACTION_CREATORS.openDrawer())} />
                </Grid>
                <Grid item={true}>
                    <img
                        src={logo}
                        alt="Ministry of foreign affairs logo"
                        style={{height: 70, objectFit: 'cover', objectPosition: 'center'}}
                    />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileNavBar;
