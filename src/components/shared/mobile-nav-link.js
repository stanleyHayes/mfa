import {Link} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {ChevronRight} from "@mui/icons-material";

const MobileNavLink = ({path, label, active}) => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(UI_ACTION_CREATORS.closeDrawer());
    }

    return (
        <Link onClick={handleClick} to={path} style={{textDecoration: 'none',}}>
            <Stack
                sx={{
                    paddingRight: 2,
                    backgroundColor: active ? 'light.primary' : false,
                    borderRadius: 1
                }}
                direction="row"
                alignItems="center"
                justifyContent="space-between">
                <Button
                    fullWidth={true}
                    variant="text"
                    sx={{
                        textTransform: 'capitalize',
                        color: active ? 'text.primary' : 'text.primary',
                        justifyContent: 'flex-start',
                        padding: 1.2,
                        fontWeight: 'bold'
                    }}
                    size="small">
                    {label}
                </Button>
                <ChevronRight color="primary"/>
            </Stack>

        </Link>
    )
}

export default MobileNavLink;
