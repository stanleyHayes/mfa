import React from "react";
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const NavLink = ({path, label, active}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    return (
        <Box sx={{
            backgroundColor: active ? 'light.secondary' : false,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            borderBottomLeftRadius: 4,
            borderTopLeftRadius: 4,
            padding: 0.5,
            '&:hover': {
                transition: 'all 300ms 100ms ease-out',
                backgroundColor: 'light.accent',
                borderRadius: 12
            }
        }}>
            <Link onClick={handleClick} to={path} style={{textDecoration: 'none'}}>
                <Button
                    fullWidth={true}
                    variant="text"
                    sx={{
                        textTransform: 'uppercase',
                        color: active ? 'text.primary' : 'text.secondary',
                    }}
                    size="small">
                    {label}
                </Button>
            </Link>
        </Box>
    )
}

export default NavLink;
