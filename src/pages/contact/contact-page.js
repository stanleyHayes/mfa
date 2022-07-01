import Layout from "../../components/layout/layout";
import {Box, Card, CardContent, Container, Grid, Link, Stack, Typography} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";
import {Call, Mail, Web} from "@mui/icons-material";

const ContactPage = () => {

    return (
        <Layout>
            <Box sx={{mt: 1.8, position: 'relative', height: '50vh'}}>
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
                        src={aicc}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectPosition: 'center',
                            objectFit: 'cover'
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
                            Contact
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: 'background.default',
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                py: {xs: 4, lg: 0}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper', height: '100%'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography
                                            gutterBottom={true}
                                            variant="body1"
                                            sx={{color: 'text.primary', fontWeight: 700}}>
                                            ADDRESS
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Ministry of Foreign Affairs and Regional Integration
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Post Office Box M53,
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Accra – Ghana
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper', height: '100%'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 700}}>
                                            CONTACT
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Call/>

                                            <Link href="tel://+233 30 299 9604" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +233 30 299 9604
                                                </Typography>
                                            </Link>
                                            <Typography
                                                gutterBottom={true} variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                /
                                            </Typography>
                                            <Link href="tel://+233 30 2738 473" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +233 30 2738 473
                                                </Typography>
                                            </Link>

                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Web/>
                                            <Link
                                                target="_blank"
                                                href="https://https://www.mfa.gov.gh"
                                                underline="none">
                                                <Typography
                                                    gutterBottom={true}
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    https://www.mfa.gov.gh
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Mail/>
                                            <Link href="mailto://info@mfa.gov.gh" underline="none">
                                                <Typography
                                                    gutterBottom={true}
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    info@mfa.gov.gh
                                                </Typography>
                                            </Link>
                                            <Typography
                                                gutterBottom={true} variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                /
                                            </Typography>
                                            <Link href="mailto://ipab@mfa.gov.gh" underline="none">
                                                <Typography
                                                    gutterBottom={true}
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    ipab@mfa.gov.gh
                                                </Typography>
                                            </Link>

                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper', height: '100%'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 700}}>
                                            PHYSICAL ADDRESS
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            No. 5 Agostinho Neto Rd. Liberation Avenue
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Airport Residential AreaAirport Residential Area, Accra
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            GPS Address: GA-057-0036
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.default'}}>
                <Container>
                </Container>
            </Box>

        </Layout>
    )
}

export default ContactPage;
