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
import {selectPressRelease} from "../../redux/features/press-releases/press-release-slice";
import {useLocation, useNavigate} from "react-router";
import qs from "query-string";
import PressRelease from "../../components/shared/press-release";

const PressReleasePage = () => {

    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);

    const navigate = useNavigate();
    const location = useLocation();

    const params = qs.parse(location.search);

    const {pressReleases, pressReleasesLoading, pressReleasesError, count} = useSelector(selectPressRelease);

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
                {pressReleasesLoading && <LinearProgress variant="query" color="secondary"/>}
                <Container sx={{minHeight: '60vh'}}>
                    {pressReleasesError && (
                        <Alert severity="error">
                            <AlertTitle>{pressReleasesError}</AlertTitle>
                        </Alert>
                    )}

                    <Box>
                        <Typography variant="h4" sx={{color: 'text.primary'}}>
                            Press Release
                        </Typography>
                    </Box>

                    <Divider sx={{my: 4}} variant="fullWidth"/>

                    {pressReleases && pressReleases.length === 0 && (
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
                                No press releases available
                            </Typography>
                        </Box>
                    )}


                    <Grid sx={{mb: 6}} container={true} spacing={4}>
                        {
                            pressReleases && pressReleases.map((pressRelease, index) => {
                                return (
                                    <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                        <PressRelease pressRelease={pressRelease}/>
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

export default PressReleasePage;
