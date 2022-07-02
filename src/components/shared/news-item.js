import React from "react";
import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import moment from "moment";

const NewsItem = ({newsItem}) => {
    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <CardMedia
                src={newsItem.banner} component="img"
                sx={{height: 200, objectFit: 'cover', objectPosition: 'center', borderRadius: 1}}/>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Link to={`/news/${newsItem.slug}`} style={{textDecoration: 'none'}}>
                        <Typography sx={{color: 'text.primary', fontWeight: 500}} variant="body1">
                            {newsItem.title}
                        </Typography>
                    </Link>
                    <Typography sx={{color: 'text.secondary'}} variant="body2">
                        {newsItem.details[0].substring(0, 100)}
                    </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                        {moment(newsItem.createdAt).fromNow()}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default NewsItem;
