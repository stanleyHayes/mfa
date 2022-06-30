import {Box, Typography} from "@mui/material";

const Copyright = () => {

    return (
        <Box sx={{padding: 4, backgroundColor: 'background.default'}}>
            <Typography variant="body2" align="center" sx={{color: 'text.secondary'}}>
                &copy; 2022 Ministry Of Foreign Affairs and Regional Integration. Proudly powered by Sydney
            </Typography>
        </Box>
    )
}

export default Copyright;
