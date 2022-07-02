import React from "react";
import {Box, Card, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import moment from "moment";

const NewsItem = ({newsItem}) => {
    return (
        <Card elevation={0} sx={{height: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardMedia
                    src={newsItem.banner} component="img"
                    sx={{height: 200, objectFit: 'cover', objectPosition: 'center', borderRadius: 1}}/>
                <CardContent sx={{flex: 1}}>
                    <Stack direction="column" spacing={2}>
                        <Link to={`/news/${newsItem.slug}`} style={{textDecoration: 'none'}}>
                            <Typography sx={{color: 'text.primary', fontWeight: 500}} variant="body1">
                                {newsItem.title}
                            </Typography>
                        </Link>
                        <Typography sx={{color: 'text.secondary'}} variant="body2">
                            {newsItem.details[0].substring(0, 100)}
                        </Typography>
                    </Stack>
                </CardContent>
                <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            {moment(newsItem.createdAt).format('MMMM, DD YYYY')}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{color: 'text.secondary'}}>
                            &#8226;
                        </Typography>

                        <Chip sx={{fontWeight: 'bold'}} label={newsItem.category.toUpperCase()} variant="filled"/>
                    </Stack>
                </CardContent>
            </Box>
        </Card>
    )
}

export default NewsItem;
