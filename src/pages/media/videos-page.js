import React, {useState} from "react";
import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Container,
    Divider,
    Grid,
    LinearProgress,
    MenuItem,
    Pagination,
    Select,
    Stack,
    Typography
} from "@mui/material";
import {useSelector} from "react-redux";
import {selectVideo} from "../../redux/features/videos/video-slice";
import {useLocation, useNavigate} from "react-router";
import qs from "query-string";
import Video from "../../components/shared/video";

const VideosPage = () => {

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);

    const navigate = useNavigate();
    const location = useLocation();

    const params = qs.parse(location.search);

    const {videos, videosLoading, videosError, count} = useSelector(selectVideo);

    const handlePageChange = (event, page) => {
        setPage(page);
        params['page'] = page;
        navigate({pathname: location.pathname, search: qs.stringify(params)});
    }

    const handleSizeChange = (event) => {
        setSize(event.target.value);
        params['size'] = event.target.value;
        navigate({pathname: location.pathname, search: qs.stringify(params)});
    }

    console.log(videos)
    return (
        <Layout>
            <Box sx={{py: 8}}>
                {videosLoading && <LinearProgress variant="query" color="secondary"/>}
                <Container sx={{minHeight: '60vh'}} maxWidth="md">
                    {videosError && (
                        <Alert severity="error">
                            <AlertTitle>{videosError}</AlertTitle>
                        </Alert>
                    )}

                    <Box>
                        <Typography variant="h4" sx={{color: 'text.primary'}}>
                            Videos
                        </Typography>
                    </Box>

                    <Divider sx={{my: 4}} variant="fullWidth"/>

                    {videos && videos.length === 0 && (
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
                                No videos available
                            </Typography>
                        </Box>
                    )}


                    <Grid sx={{mb: 6}} container={true} spacing={4}>
                        {
                            videos && videos.map((video, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12}>
                                        <Video video={video}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
                {parseInt(`${count / size}`) > 0 && (
                    <Container sx={{py: 2}}>
                        <Grid container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={12} md="auto">
                                <Pagination
                                    page={page}
                                    color="secondary"
                                    size="large"
                                    shape="circular"
                                    count={parseInt(`${count / size}`)}
                                    onChange={handlePageChange}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md="auto">
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>Show</Typography>
                                    <Select
                                        id="department"
                                        margin="dense"
                                        elevation={1}
                                        size="small"
                                        color="secondary"
                                        onChange={handleSizeChange}
                                        value={size}
                                        label="Select Department"
                                        variant="outlined">
                                        <MenuItem value={10} key={10}>10</MenuItem>
                                        <MenuItem value={20} key={20}>20</MenuItem>
                                        <MenuItem value={50} key={50}>50</MenuItem>
                                    </Select>
                                    <Typography variant="body2" sx={{color: 'text.secondary'}}>per page</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                )}
            </Box>
        </Layout>
    )
}

export default VideosPage;
