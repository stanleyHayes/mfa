import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import image from "../../assets/images/thomas-mboba.jpg";

const ThomasMbombaProfilePage = () => {

    return (
        <Layout>
            <Box sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                minHeight: '50vh',
                py: {xs: 8}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="Thomas Mbomba"
                                src={image}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 32,
                                    objectFit: 'cover'
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Stack direction="column" spacing={2}>
                                <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                                    PROFILE OF DEPUTY MINISTER FOR FOREIGN AFFAIRS AND REGIONAL INTEGRATION
                                    (ADMINISTRATION & FINANCE)
                                </Typography>
                                <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                                    Honourable Thomas Mbomba is an astute politician with varied experiences. He is
                                    currently a Deputy Minister at the Ministry of Foreign Affairs and Regional
                                    Integration in charge of Administration and Finance and the Member of Parliament for
                                    Tatale-Sanguli Constituency, Northern Region. In Parliament, he is a member of a
                                    number of committees, including Committees on Youth, Sports and Culture; House,
                                    Works & Housing and Committee on people Holding Office of profit.

                                </Typography>
                                <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                                    Before his appointment, he served as the District Chief Executive of the Tatale
                                    District Assembly from 2017-2020. Hon. Mbomba has worked in different capacities at
                                    the Ghana Post Company Limited as the Manager Transhipment Centre, Airport Accra
                                    from 2013-2015; Regional Human Resource Manager, Accra and Tamale from 2011-2012 and
                                    2007-2010, respectively, and as the District Manager, Tema from 2004-2005.

                                </Typography>

                                <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                                    He holds a certificate on Human Resource Management from the Institute of Human
                                    Resource Management Practitioners (2012-2013) Accra; a Master of Business
                                    Administration in Human Resource Management from the University of Ghana, Legon
                                    (2010-2012), a Bachelor of Arts in Sociology and Political Science (2003-2006) from
                                    the same University. He obtained his secondary education from Opoku Ware Secondary
                                    School in Kumasi. He is married with four (4) children.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ThomasMbombaProfilePage;
