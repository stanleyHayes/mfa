import React from "react";
import {Card, CardContent, CardMedia, Link, Typography} from "@mui/material";

const Vacancy = ({vacancy}) => {
    return (
        <Link target="_blank" underline="none" href={vacancy.link}>
            <Card elevation={0} sx={{height: '100%'}}>
                <CardMedia
                    component="img"
                    src={vacancy.image}
                    sx={{height: 200, objectFit: 'contain', objectPosition: 'center'}}/>
                <CardContent>
                    <Typography
                        align="center"
                        variant="h6"
                                sx={{fontWeight: 400, color: 'text.primary', textTransform: 'uppercase'}}>
                        {vacancy.name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Vacancy;