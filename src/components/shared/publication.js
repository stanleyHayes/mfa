import React from "react";
import {Card, CardContent, CardMedia, Link, Typography} from "@mui/material";

const Publication = ({publication}) => {

    return (
        <Link target="_blank" underline="none" href={publication.file}>
            <Card elevation={0}>
                <CardMedia
                    component="img"
                    src={publication.image}
                           sx={{height: 200, borderRadius: 1, objectFit: 'cover', objectPosition: 'center'}}/>
                <CardContent>
                    <Typography variant="h6" sx={{fontWeight: 400, color: 'text.primary'}}>
                        {publication.title}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}
export default Publication;
