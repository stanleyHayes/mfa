import React from "react";
import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Chip,
    Container,
    Grid,
    LinearProgress,
    Skeleton,
    Stack,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectNews} from "../../redux/features/news/news-slice";
import image from "../../assets/images/ramses.png";
import moment from "moment";
import NewsItem from "../../components/shared/news-item";

const NewsDetailPage = () => {

    const {singleNews, newsLoading, newsError} = useSelector(selectNews);

    return (
        <Layout>
            <Box sx={{backgroundColor: 'background.default', py: 8}}>
                {newsLoading && <LinearProgress variant="query" color="secondary"/>}
                <Container>
                    {newsError && (
                        <Alert severity="error">
                            <AlertTitle>{newsError}</AlertTitle>
                        </Alert>
                    )}

                    <Box>
                        <img
                            alt="AMBASSADOR RAMSES JOSEPH CLELAND"
                            src={image}
                            style={{
                                width: '100%',
                                height: '70vh',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                borderTopRightRadius: 32,
                                borderBottomRightRadius: 32,
                                borderBottomLeftRadius: 32,
                                borderTopLeftRadius: 32,
                                marginBottom: 8
                            }}/>

                        <Stack direction="column" spacing={2}>
                            {newsLoading ? (
                                <Skeleton variant="text" animation="pulse"/>
                            ) : (
                                <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 200}}>
                                    {singleNews && singleNews.title}
                                </Typography>
                            )}
                            {newsLoading ? (
                                <Skeleton variant="text" animation="pulse"/>
                            ) : (
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                        {singleNews && moment(singleNews.createdAt).format('MMMM, DD YYYY')}
                                    </Typography>
                                    {singleNews &&
                                        (
                                            <Typography
                                                variant="body1"
                                                sx={{color: 'text.secondary'}}>
                                                &#8226;
                                            </Typography>
                                        )
                                    }

                                    <Chip label={singleNews && singleNews.category} variant="filled"/>
                                </Stack>
                            )}

                            {newsLoading ? (
                                <Stack direction="column" spacing={2}>
                                    <Skeleton variant="rectangular" width="100%" height={100} animation="pulse"/>
                                    <Skeleton variant="rectangular" width="100%" height={100} animation="pulse"/>
                                    <Skeleton variant="rectangular" width="100%" height={100} animation="pulse"/>
                                </Stack>
                            ) : (
                                <Stack direction="column" spacing={2}>
                                    {singleNews && singleNews.details && singleNews.details.map((paragraph, index) => {
                                        return (
                                            <Typography key={index} variant="body2" sx={{color: 'text.secondary'}}>
                                                {paragraph}
                                            </Typography>
                                        )
                                    })}
                                </Stack>
                            )}
                        </Stack>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 200, mb: 8}}>
                            Related News
                        </Typography>

                        {singleNews && singleNews && singleNews.relatedNews.length === 0 && (
                            <Box sx={{
                                backgroundColor: 'background.paper',
                                minHeight: '30vh',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography
                                    variant="h6"
                                    sx={{color: 'text.secondary'}}>
                                    No news available
                                </Typography>
                            </Box>
                        )}


                        {
                            singleNews && singleNews.relatedNews && singleNews.relatedNews.length > 0 && (
                                <Grid sx={{mb: 6}} container={true} spacing={4}>
                                    {singleNews && singleNews.relatedNews.map(newsItem => {
                                        return (
                                            <Grid key={newsItem._id} item={true} xs={12} md={6} lg={4}>
                                                <NewsItem newsItem={newsItem}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            )
                        }

                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default NewsDetailPage;
