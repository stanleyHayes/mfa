import {Card, CardContent, CardMedia, Link, Typography} from "@mui/material";
import React from "react";

const Country = ({country}) => {

    return (
        <Link target="_blank" underline="none" href={country.link}>
            <Card elevation={0} sx={{height: '100%'}}>
                <CardMedia
                    src={country.image} component="img"
                    sx={{height: 200, objectFit: 'cover', objectPosition: 'center', borderRadius: 1}}/>
                <CardContent>
                    <Typography variant="h6" align="center" sx={{color: 'text.primary'}}>
                        {country.name}
                    </Typography>
                </CardContent>
            </Card>
        </Link>)
}

export default Country;