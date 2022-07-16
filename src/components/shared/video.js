import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import YouTube from "react-youtube";

const Video = ({video}) => {

    return (
        <Card elevation={0}>
            <YouTube style={{width: '100%', height: '100%'}} videoId={video.link}/>
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{
                        color: 'text.secondary',
                        textTransform: 'uppercase'
                    }}>
                    {video.caption}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Video;
