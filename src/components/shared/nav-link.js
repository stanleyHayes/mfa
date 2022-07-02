import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const NavLink = ({path, label, active}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    return (
        <Link onClick={handleClick} to={path} style={{textDecoration: 'none'}}>
            <Button
                fullWidth={true}
                variant="text"
                sx={{
                    borderTopRightRadius: 32,
                    borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 0,
                    borderTopLeftRadius: 32,
                    backgroundColor: active ? 'light.secondary' : false,
                    textTransform: 'uppercase',
                    color: active ? 'text.primary' : 'text.secondary',
                    justifyContent: 'flex-start'
                }}
                size="small">
                {label}
            </Button>
        </Link>
    )
}

export default NavLink;
