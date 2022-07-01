import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import moment from "moment";

const NewsItem = ({newsItem}) => {
    return (
        <Card elevation={0}>
            <CardContent>
                <CardMedia
                    src={newsItem.image} component="img"
                    sx={{height: 200, objectFit: 'cover', objectPosition: 'center'}}/>

                <Stack direction="column" spacing={2}>
                    <Link to={`/news/newsItem.slug`} style={{textDecoration: 'none'}}>
                        <Typography sx={{color: 'text.primary'}} variant="body1">
                            {newsItem.title}
                        </Typography>
                    </Link>
                    <Typography sx={{color: 'text.secondary'}} variant="body2">
                        {newsItem.detail.splice(100)}
                    </Typography>
                </Stack>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {moment(newsItem.createdAt).fromNow()}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NewsItem;
