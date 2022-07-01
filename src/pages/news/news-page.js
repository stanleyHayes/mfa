import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Container,
    Divider,
    Grid,
    LinearProgress, MenuItem, Pagination, Select,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectNews} from "../../redux/features/news/news-slice";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {GridOn, ListSharp} from "@mui/icons-material";
import NewsItem from "../../components/shared/news-item";
import NewsItemList from "../../components/shared/news-item-list";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router";
import qs from "query-string";

const NewsPage = () => {

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);

    const navigate = useNavigate();
    const location = useLocation();

    const params = qs.parse(location.search);

    const {news, newsLoading, newsError, count} = useSelector(selectNews);
    const {viewMode} = useSelector(selectUI);

    const dispatch = useDispatch();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('sm'));

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
    return (
        <Layout>
            <Box sx={{py: 8}}>
                {newsLoading && <LinearProgress variant="query" color="secondary"/>}
                <Container sx={{minHeight: '70vh'}}>
                    {newsError && (
                        <Alert severity="error">
                            <AlertTitle>{newsError}</AlertTitle>
                        </Alert>
                    )}

                    <Box>
                        <Grid container={true} justifyContent="space-between" alignItems="center">
                            <Grid item={true} xs={6}>
                                <Typography variant="h4" sx={{color: 'text.primary'}}>
                                    News
                                </Typography>
                            </Grid>
                            <Grid item={true}>
                                <Stack spacing={2} direction="row" alignItems="center">
                                    <GridOn
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleViewMode())}
                                        sx={{
                                            backgroundColor: viewMode === 'grid' ? 'light.secondary' : false,
                                            fontSize: 32,
                                            cursor: 'pointer',
                                            padding: 0.5,
                                            borderRadius: 0.2
                                        }}
                                        color={viewMode === 'grid' ? 'secondary' : 'primary'}
                                    />
                                    <ListSharp
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleViewMode())}
                                        sx={{
                                            backgroundColor: viewMode === 'list' ? 'light.secondary' : false,
                                            fontSize: 32,
                                            cursor: 'pointer',
                                            padding: 0.5,
                                            borderRadius: 0.2
                                        }}
                                        color={viewMode === 'list' ? 'secondary' : 'primary'}/>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider sx={{my: 4}} variant="fullWidth"/>

                    {news && news.length === 0 && (
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


                    {viewMode === 'grid' && (
                        news && news.length > 0 && (
                            <Grid sx={{mb: 6}} container={true} spacing={4}>
                                {news && news.map(newsItem => {
                                    return (
                                        <Grid key={newsItem._id} item={true} xs={12} md={6} lg={4}>
                                            <NewsItem newsItem={newsItem}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )
                    )}

                    <Grid sx={{mb: 6}} container={true} spacing={4}>
                        {viewMode === 'list' && (
                            matches ? (
                                news && news.map(newsItem => {
                                    return (
                                        <Grid key={newsItem._id} item={true} xs={12} md={6} lg={4}>
                                            <NewsItem newsItem={newsItem}/>
                                        </Grid>
                                    )
                                })
                            ) : (
                                news && news.length > 0 && (

                                    news && news.map(newsItem => {
                                        return (
                                            <Grid key={newsItem._id} item={true} xs={12}>
                                                <NewsItemList newsItem={newsItem}/>
                                            </Grid>
                                        )
                                    })

                                )
                            )

                        )}
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

export default NewsPage;
