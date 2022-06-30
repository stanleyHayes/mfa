import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import image from "../../assets/images/image-2.jpg";

const KwakuAmpratrumSarpongPage = () => {


    return (
        <Layout>
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
                                alt="MFA Building"
                                src={image}
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
                                PROFILE OF DEPUTY MINISTER FOR FOREIGN AFFAIRS AND REGIONAL INTEGRATION (POLITICAL &
                                ECONOMIC)
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                Honourable Kwaku Ampratwum-Sarpong, MP, Deputy Minister for Foreign Affairs and Regional
                                Integration in charge of Political and Economic matters, is a Member of Parliament for
                                Asante Mampong in the Ashanti Region. He is a graduate from the University of Ghana and
                                a post graduate of University of Westminister, London with a background in Housing
                                Management.
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                He is a member of the Chartered Institute of Housing (UK), the Chartered Management
                                Institute (UK), the Chartered Institute of Directors (UK) and an Affiliate member,
                                Institute of Consulting (UK).
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                Hon. Ampratwum-Sarpong has an impressive employment history principally in the Housing
                                and Property Industry and has worked with a number of reputable organisations in the UK.
                                He is a complete housing professional.
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                From 2006 to 2009, he was Ghana’s Deputy High Commissioner to India. Whilst in India, he
                                was the Lead Diplomat for Trade, Investment and Business. After his diplomatic service,
                                he established Ghana-India Business Network, an institution that facilitates and
                                promotes business investment and trade between Ghana and India. He is also an Investment
                                and Business Consultant and a financial engineer.
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                In the Seventh Parliament, he served as the Vice Chairman of the Foreign Affairs
                                Committee. He is presently a Member of Parliament Committee for Trade, Industry and
                                Tourism and the Special Budget Committee.
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                His hobbies are reading, fishing, listening to classical music and watching football.
                                Mr. Kwaku Ampratwum-Sarpong is a Christian and is married with three children.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default KwakuAmpratrumSarpongPage;
