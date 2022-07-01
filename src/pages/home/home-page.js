import Layout from "../../components/layout/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    LinearProgress,
    Stack,
    Typography
} from "@mui/material";
import Carousel from "nuka-carousel";

import picture1 from "./../../assets/images/picture1.jpg";
import picture2 from "./../../assets/images/Picture2.jpg";
import picture3 from "./../../assets/images/Picture333.jpg";
import picture4 from "./../../assets/images/picture4.jpg";
import minister from "./../../assets/images/image-2.jpg";
import ramses from "./../../assets/images/ramses.png";
import thomasMboba from "./../../assets/images/thomas-mboba.jpg";
import kwaku from "./../../assets/images/Hon.-Kwaku-Ampratwum-Sarpong.jpg";

import Banner from "../../components/shared/banner";
import {ChevronRight, Flag, Settings, Web, Work} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectNews} from "../../redux/features/news/news-slice";
import {selectEvent} from "../../redux/features/events/events-slice";
import NewsItem from "../../components/shared/news-item";
import Event from "../../components/shared/event";
import {DATA} from "../../utils/data";
import Mission from "../../components/shared/mission";

const HomePage = () => {

    const {news, newsLoading, newsError} = useSelector(selectNews);
    const {events, eventsLoading, eventsError} = useSelector(selectEvent);

    return (
        <Layout>
            <Box sx={{mt: 1.8}}>
                <Carousel
                    withoutControls={true}
                    wrapAround={true}
                    swiping={false}
                    cellAlign="center"
                    pauseOnHover={true}
                    dragging={true}
                    autoplay={true}
                    enableKeyboardControls={true}
                    slidesToShow={1}
                    animation="zoom">
                    <Box
                        sx={{
                            height: {xs: '90vh', md: '80vh', lg: '70vh'},
                            width: '100vw'
                        }}>
                        <Banner
                            image={
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    alt=""
                                    src={picture1}
                                />
                            }
                            children={
                                <Box>
                                    <Container maxWidth="xl">
                                        <Typography
                                            sx={{color: 'white'}}
                                            align="center"
                                            variant="h6">
                                            The first batch of 17 students arrived onboard Qatar Airways and many other
                                            are expected to arrive in the coming days
                                        </Typography>
                                    </Container>
                                </Box>
                            }/>
                    </Box>
                    <Box
                        sx={{
                            height: {xs: '90vh', md: '80vh', lg: '70vh'},
                            width: '100vw'
                        }}>
                        <Banner
                            image={
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    alt=""
                                    src={picture2}
                                />
                            }
                            children={
                                <Box>
                                    <Container maxWidth="xl">
                                        <Typography
                                            sx={{color: 'white'}}
                                            align="center"
                                            variant="h6">
                                            Dr. Kwaku Brobbey Asenso, a Psychiatrist with the Mental Health Association
                                            with Dr. Sandra Thompson-Assan, a Psychologist from the Mental Health
                                            Association engaging with the students
                                        </Typography>
                                    </Container>
                                </Box>
                            }/>
                    </Box>
                    <Box
                        sx={{
                            height: {xs: '90vh', md: '80vh', lg: '70vh'},
                            width: '100vw'
                        }}>
                        <Banner
                            image={
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    alt=""
                                    src={picture3}
                                />
                            }
                            children={
                                <Box>
                                    <Container maxWidth="xl">
                                        <Typography
                                            sx={{color: 'white'}}
                                            align="center"
                                            variant="h6">
                                            A parade of soldiers from the Ghana Armed Forces
                                        </Typography>
                                    </Container>
                                </Box>
                            }/>
                    </Box>
                    <Box
                        sx={{
                            height: {xs: '90vh', md: '80vh', lg: '70vh'},
                            width: '100vw'
                        }}>
                        <Banner
                            image={
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    alt=""
                                    src={picture4}
                                />
                            }
                            children={
                                <Box>
                                    <Container maxWidth="xl">
                                        <Typography
                                            sx={{color: 'white'}}
                                            align="center"
                                            variant="h6">
                                            Deputy Minister for Foreign Affairs and Regional Integration, Hon. Kwaku
                                            Ampratwum-Sarpong, welcoming our compatriots. On his right is the Deputy
                                            Minister for Information, Hon. Fatimatu Abubakar
                                        </Typography>
                                    </Container>
                                </Box>
                            }/>
                    </Box>
                </Carousel>
            </Box>
            <Box
                sx={{
                    minHeight: '30vh',
                    paddingY: 4,
                    backgroundColor: 'secondary.main',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Grid container={true} justifyContent="space-around" spacing={4}>
                    <Grid item={true} xs={12} md="auto">
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" justifyContent="center">
                                <Work sx={{color: 'white', fontSize: 36}}/>
                            </Stack>
                            <Typography align="center" sx={{color: 'white'}} variant="h6">Bureaux</Typography>
                            <Typography align="center" sx={{color: 'white'}} variant="h5">18</Typography>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" justifyContent="center">
                                <Settings sx={{color: 'white', fontSize: 36}}/>
                            </Stack>
                            <Typography align="center" sx={{color: 'white'}} variant="h6">Services</Typography>
                            <Typography align="center" sx={{color: 'white'}} variant="h5">4</Typography>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" justifyContent="center">
                                <Flag sx={{color: 'white', fontSize: 36}}/>
                            </Stack>
                            <Typography align="center" sx={{color: 'white'}} variant="h6">Ghana Missions
                                Abroad</Typography>
                            <Typography align="center" sx={{color: 'white'}} variant="h5">61</Typography>
                        </Stack>
                    </Grid>
                    <Grid item={true} xs={12} md="auto">
                        <Stack direction="column" spacing={2}>
                            <Stack direction="row" justifyContent="center">
                                <Web sx={{color: 'white', fontSize: 36}}/>
                            </Stack>
                            <Typography align="center" sx={{color: 'white'}} variant="h6">Foreign Missions in
                                Ghana</Typography>
                            <Typography align="center" sx={{color: 'white'}} variant="h5">65</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    minHeight: '50vh',
                    paddingY: 4,
                    backgroundColor: 'background.default',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Container>
                    <Typography
                        variant="h5"
                        sx={{color: 'text.primary', mb: 4, textTransform: 'uppercase', fontWeight: 700}}>
                        Leadership
                    </Typography>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Card elevation={0} sx={{height: '100%'}}>
                                <CardContent>
                                    <CardMedia component="img" src={minister}
                                               sx={{height: 200, borderRadius: 1, mb: 2}}/>
                                    <Stack direction="column" spacing={2}>
                                        <Typography align="center" gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary'}}>
                                            Hon. Shirley Ayorkor Botchwey
                                        </Typography>
                                        <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                                            Minister For Foreign Affairs And Regional Integration
                                        </Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Link to="/" style={{textDecoration: 'none'}}>
                                                <Button
                                                    size="small"
                                                    sx={{textTransform: 'capitalize'}}
                                                    variant="outlined"
                                                    endIcon={<ChevronRight/>}>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Card elevation={0} sx={{height: '100%'}}>
                                <CardContent>
                                    <CardMedia component="img" src={kwaku}
                                               sx={{
                                                   height: 200,
                                                   borderRadius: 1,
                                                   mb: 2,
                                                   objectPosition: 'top',
                                                   objectFit: 'cover'
                                               }}/>
                                    <Stack direction="column" spacing={2}>
                                        <Typography align="center" gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary'}}>
                                            Hon. Kwaku Ampratwum-Sarpong, MP
                                        </Typography>
                                        <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                                            Deputy Minister Political And Economic Of The Ministry Of Foreign Affairs
                                            And Regional Integration
                                        </Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Link to="/" style={{textDecoration: 'none'}}>
                                                <Button
                                                    size="small"
                                                    sx={{textTransform: 'capitalize'}}
                                                    variant="outlined"
                                                    endIcon={<ChevronRight/>}>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Card elevation={0} sx={{height: '100%'}}>
                                <CardContent>
                                    <CardMedia
                                        component="img" src={thomasMboba}
                                        sx={{
                                            height: 200,
                                            borderRadius: 1,
                                            mb: 2,
                                            objectPosition: 'top',
                                            objectFit: 'cover'
                                        }}/>
                                    <Stack direction="column" spacing={2}>
                                        <Typography align="center" gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary'}}>
                                            Hon. Thomas Mbomba ,MP
                                        </Typography>
                                        <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                                            Deputy Minister Administration And Finance Of The Ministry Of Foreign
                                            Affairs And Regional Integration
                                        </Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Link to="/" style={{textDecoration: 'none'}}>
                                                <Button
                                                    size="small"
                                                    sx={{textTransform: 'capitalize'}}
                                                    variant="outlined"
                                                    endIcon={<ChevronRight/>}>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={3}>
                            <Card elevation={0} sx={{height: '100%'}}>
                                <CardContent>
                                    <CardMedia component="img" src={ramses}
                                               sx={{
                                                   height: 200,
                                                   borderRadius: 1,
                                                   mb: 2,
                                                   objectPosition: 'top',
                                                   objectFit: 'cover'
                                               }}/>
                                    <Stack direction="column" spacing={2}>
                                        <Typography align="center" gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary'}}>
                                            Ambassador Ramses Joseph Cleland
                                        </Typography>
                                        <Typography align="center" variant="body2" sx={{color: 'text.secondary'}}>
                                            Ag. Chief Director Of The Ministry Of Foreign Affairs And Regional
                                            Integration
                                        </Typography>
                                        <Stack direction="row" justifyContent="flex-end">
                                            <Link to="/" style={{textDecoration: 'none'}}>
                                                <Button
                                                    size="small"
                                                    sx={{textTransform: 'capitalize'}}
                                                    variant="outlined"
                                                    endIcon={<ChevronRight/>}>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    minHeight: '50vh',
                    paddingY: 4,
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Container>
                    <Typography
                        variant="h5"
                        sx={{color: 'text.primary', mb: 4, textTransform: 'uppercase', fontWeight: 700}}>
                        Missions
                    </Typography>
                    <Grid container={true} spacing={2}>
                        {DATA.MISSIONS.map((mission, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={2.4}>
                                    <Mission mission={mission}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>

            <Box
                sx={{
                    minHeight: '50vh',
                    paddingY: 4,
                    backgroundColor: 'background.default',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                {newsLoading && <LinearProgress variant="query" color="secondary"/>}
                <Container>
                    <Typography
                        variant="h5"
                        sx={{color: 'text.primary', mb: 4, textTransform: 'uppercase', fontWeight: 700}}>
                        Latest News
                    </Typography>
                    {newsError && (
                        <Alert severity="error">
                            <AlertTitle>{newsError}</AlertTitle>
                        </Alert>
                    )}

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

                    {news && news.length > 0 && (
                        <Grid container={true} spacing={2}>
                            {news?.slice(6)?.map(newsItem => {
                                return (
                                    <Grid key={newsItem._id} item={true} xs={12} md={4} lg={3}>
                                        <NewsItem newsItem={newsItem}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )}
                </Container>
            </Box>

            <Box
                sx={{
                    minHeight: '50vh',
                    paddingY: 4,
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                {eventsLoading && <LinearProgress variant="query" color="secondary"/>}
                <Container>
                    <Typography
                        variant="h5"
                        sx={{color: 'text.primary', mb: 4, textTransform: 'uppercase', fontWeight: 700}}>
                        Upcoming Events
                    </Typography>
                    {eventsError && (
                        <Alert severity="error">
                            <AlertTitle>{eventsError}</AlertTitle>
                        </Alert>
                    )}
                    {events && events.length === 0 && (
                        <Box sx={{
                            backgroundColor: 'background.default',
                            minHeight: '30vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Typography
                                variant="h6"
                                sx={{color: 'text.secondary'}}>
                                No events available
                            </Typography>
                        </Box>
                    )}

                    {events?.events?.length > 0 && (
                        <Grid container={true} spacing={2}>
                            {events?.slice(6)?.map(event => {
                                return (
                                    <Grid key={event._id} item={true} xs={12} md={4} lg={3}>
                                        <Event event={event}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )}
                </Container>
            </Box>
            <Box
                sx={{
                    minHeight: '30vh',
                    paddingY: 4,
                    backgroundColor: 'background.default',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                <Container>
                    <Typography
                        variant="h5"
                        sx={{color: 'text.primary', mb: 4, textTransform: 'uppercase', fontWeight: 700}}>
                        Contact
                    </Typography>
                    <Grid container={true} spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item={true} xs={12} md="auto">
                            <Typography variant="body1" sx={{color: 'text.primary', textTransform: 's'}}>
                                Want to know more about the ministry and what it does?
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md="auto">
                            <Link to="/contact" style={{textDecoration: 'none'}}>
                                <Button
                                    disableElevation={true}
                                    color="primary"
                                    fullWidth={true}
                                    size="large"
                                    sx={{textTransform: 'capitalize'}}
                                    variant="contained">
                                    Learn More
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default HomePage;
