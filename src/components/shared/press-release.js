import React from "react";
import {Card, CardContent, CardMedia, Chip, Stack, Typography, Link} from "@mui/material";

import moment from "moment";

const PressRelease = ({pressRelease}) => {
    return (
        <Link target="_blank" underline="none" href={pressRelease.file}>
            <Card elevation={0} sx={{height: '100%'}}>
                <CardMedia
                    component="img"
                    src={pressRelease.image}
                    sx={{height: 200, borderRadius: 1, objectFit: 'cover', objectPosition: 'center'}}/>
                <CardContent>
                    <Stack mb={2} direction="row" spacing={2} alignItems="center">
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            {moment(pressRelease.createdAt).format('MMMM, DD YYYY')}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{color: 'text.secondary'}}>
                            &#8226;
                        </Typography>
                        <Chip sx={{fontWeight: 500}} label={pressRelease.category.toUpperCase()} variant="filled"/>
                    </Stack>
                    <Typography variant="h6" sx={{fontWeight: 400, color: 'text.primary', textTransform: 'uppercase'}}>
                        {pressRelease.title}
                    </Typography>
                </CardContent>
            </Card>
         </Link>
    )
}
export default PressRelease;
