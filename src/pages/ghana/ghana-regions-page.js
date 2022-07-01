import Layout from "../../components/layout/layout";
import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import mapOfGhana from "../../assets/images/new_map_of_ghana1.jpg";

const GhanaRegionsPage = () => {

    return (
        <Layout>
            <Box sx={{mt: 1.7, position: 'relative', height: '50vh'}}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}>
                    <img
                        alt=""
                        src={mapOfGhana}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectPosition: 'center',
                            objectFit: 'cover',
                            maxWidth: '100%'
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        padding: 2,
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    }}>
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography
                            mb={2}
                            sx={{color: 'white'}}
                            variant="h3">
                            Regions
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{py: 4, backgroundColor: 'default.default'}}>
                <Container>
                    <Stack mb={4} direction="column" spacing={2}>
                        <Typography align="center" variant="h5" sx={{color: 'text.primary'}}>
                            Various Regions in Ghana
                        </Typography>
                        <Typography align="center" variant="body1" sx={{color: 'text.primary'}}>
                            Ghana is divided into 10 administrative regions, subdivided into a total of 170 districts.
                            The regions are:
                        </Typography>
                    </Stack>
                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={7}>
                            <img
                                alt=""
                                src={mapOfGhana}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '100%',
                                    objectPosition: 'center',
                                    objectFit: 'cover',
                                    borderRadius: 32
                                }}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={5}>
                            <TableContainer sx={{maxWidth: '100%'}} component={Paper} elevation={0}>
                                <Table size="medium">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Region</TableCell>
                                            <TableCell>Capital City</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Ashanti</TableCell>
                                            <TableCell>Kumasi</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Brong Ahafo</TableCell>
                                            <TableCell>Sunyani</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Central</TableCell>
                                            <TableCell>Cape Coast</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Eastern</TableCell>
                                            <TableCell>Koforidua</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Greater Accra</TableCell>
                                            <TableCell>Accra</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Northern</TableCell>
                                            <TableCell>Tamale</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Upper East</TableCell>
                                            <TableCell>Bolgatanga</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Upper West</TableCell>
                                            <TableCell>Wa</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Volta</TableCell>
                                            <TableCell>Ho</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Western</TableCell>
                                            <TableCell>Sekondi-Takoradi</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Savannah</TableCell>
                                            <TableCell>Damongo</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Bono East</TableCell>
                                            <TableCell>Techiman</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Oti</TableCell>
                                            <TableCell>Dambai</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Ahafo</TableCell>
                                            <TableCell>Goaso</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Western North</TableCell>
                                            <TableCell>Sefwi Wiawso</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>North East</TableCell>
                                            <TableCell>Nalerigu</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Layout>
    )
}

export default GhanaRegionsPage;
