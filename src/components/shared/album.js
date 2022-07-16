import React from "react";
import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Album = ({album}) => {

    return (
        <Link style={{textDecoration: 'none'}} to={`/media/photos/${album._id}`}>
            <Card elevation={0} sx={{height: '100%'}}>
                <CardMedia
                    component="img"
                    src={album.image} sx={{
                    height: 300, borderRadius: 1,
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}/>
                <CardContent>
                    <Stack direction="column" spacing={2}>
                        <Typography
                            variant="body1"
                            align="center"
                            sx={{textTransform: 'uppercase', color: 'text.primary', fontWeight: 500}}>
                            {album.title}
                        </Typography>
                        <Typography
                            align="center"
                            variant="body2"
                            sx={{textTransform: 'uppercase', color: 'text.secondary', fontWeight: 400}}>
                            {`${album.photos.length} ${album.photos.length === 1 ? 'Photo': 'Photos'}`}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    )
}
export default Album;
