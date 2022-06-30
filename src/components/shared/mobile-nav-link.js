import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const MobileNavLink = ({path, label, active, icon}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    return (
        <Link onClick={handleClick} to={path} style={{textDecoration: 'none'}}>
            <Button
                startIcon={icon}
                fullWidth={true}
                variant="text"
                sx={{
                    backgroundColor: active ? 'light.secondary' : false,
                    textTransform: 'uppercase',
                    color: active ? 'text.primary' : 'text.secondary',
                    justifyContent: 'flex-start',
                }}
                size="large">
                {label}
            </Button>
        </Link>
    )
}

export default MobileNavLink;
