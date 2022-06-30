import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import passport from "./../../assets/images/passport2.jpg";
import protocol from "./../../assets/images/protocol.jpg";
import legal from "./../../assets/images/legal.jpg";
import diaspora from "./../../assets/images/diaspora1.jpg";
import aicc from "./../../assets/images/aicc.jpg";

const ServicesPage = () => {

    return (
        <Layout>

            <Box sx={{mt: 2, position: 'relative', height: '50vh'}}>
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
                            What we do
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'center',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="Passport"
                                src={passport}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary'}}>
                                PASSPORT
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                The Passports Office, a bureau of the Ministry is responsible for the issue of passports
                                and other travel documents of Ghana to Ghanaian Citizens. In accordance with the
                                Passports and Travel Certificate Decree 1967, (NLCD 155), the authority for the issue of
                                passports and other travel documents of Ghana is vested in the Ministry of Foreign
                                Affairs and Regional Integration.
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                The Passport Office is responsible for the issue of passports and other travel documents
                                to Ghanaians, whose applications have been approved. The office also provides files and
                                documents in respect of passports under investigation by the Interpol, the Bureau of
                                National Investigation (BNI), and the Police. Embassies and High Commissions accredited
                                to Ghana, also request this office for confirmation of the personal details of Ghanaians
                                who apply to these Missions for visas.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.default',
                minHeight: '50vh', py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={8}>
                            <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary'}}>
                                Protocol
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Facilitates the conduct of relations between the Government and the diplomatic and
                                consular missions located in and accredited to Ghana, ensures that members of the
                                diplomatic and consular corps understand and comply with local laws and regulations,
                                administers the extension of privileges to the diplomatic and consular corps, advises
                                the Office of the President, Ministries, Departments and Agencies (MDAs) and the
                                Diplomatic corps on matters relating to protocol, ceremony, privileges and immunities.
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="Protocol"
                                src={protocol}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="Legal"
                                src={legal}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary'}}>
                                LEGAL AND CONSULAR
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                Provides legal advice to the Ministry, advises the government, implements Ghana policy
                                and participates in the negotiation and interpretation of international agreements. They
                                also prepare instruments of ratification, co-ordinates issues arising from Ghana,
                                monitors the legislative proposals and administrative practice of the Ministry and
                                compiles the Ghana Treaty Series. They also provide Ghana’s citizens overseas with the
                                consular protection and assistance, advises the government, co-ordinates and directs the
                                activities of overseas posts, implements government policy and informs Ghanaians on
                                matters relating to consular protection overseas.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.default',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={8}>
                            <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary'}}>
                                ACCRA INTERNATIONAL CONFERENCE CENTRE (AICC)
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                The Accra International Conference Centre was built in 1991 to host the Tenth
                                Ministerial Meeting of the Non-Aligned Movement. It has since hosted major conferences
                                and summits by U.N. organisations, such as the World Health Organisation, the Food and
                                Agriculture Organisation, as well as regional organisations such as ECOWAS.
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                The Accra International Conference Centre, (AICC), has six conference halls. These are;
                                the Main Hall or Conference Auditorium, two committee Halls, three Meeting Rooms and a
                                Foyer
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                The main Auditorium provides seating or up to 1,800 people. The gallery has 132 seats,
                                whiles 182 seats have been reserved for the press. The multi-purpose hall can also be
                                used for musical shows, concerts, lectures, theatrical performances and other public
                                events.
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="AICC"
                                src={aicc}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="Diaspora"
                                src={diaspora}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary'}}>
                                DIASPORA
                            </Typography>
                            <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                The Diaspora Affairs Unit (DAU) was established pursuant to a Presidential directive and
                                it is responsible for the national diaspora engagement and migration matters within the
                                Ministry. They work to establish a comprehensive database of Ghanaians abroad which is
                                updated regularly and also, they encourage the active involvement of the Ghanaian
                                Diaspora in socio-economic activities of the country.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ServicesPage;
