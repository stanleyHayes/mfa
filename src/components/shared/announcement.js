import React from "react";
import {Avatar, Box, Button, Card, CardContent, CardHeader, Link, Typography} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";

const Announcement = ({announcement}) => {

    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardHeader avatar={<Avatar src={announcement.image}/>}/>
                <Box sx={{flex: 1}}>
                    <CardContent>
                        <Typography variant="body2" sx={{color: 'text.primary', textTransform: 'lowercase'}}>
                            {announcement.title}
                        </Typography>
                    </CardContent>
                </Box>
                <CardContent>
                    <Link href={announcement.file} underline="none" target="_blank">
                        <Button
                            endIcon={<KeyboardArrowRight/>}
                            size="large"
                            sx={{textTransform: 'capitalize'}}
                            variant="contained"
                            disableElevation={true}>
                            View File
                        </Button>
                    </Link>
                </CardContent>
            </Box>
        </Card>
    )
}
export default Announcement;
