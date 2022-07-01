import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Typography} from "@mui/material";
import image from "../../assets/images/ramses.png";

const ChiefDirectorProfilePage = () => {


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
                                alt="AMBASSADOR RAMSES JOSEPH CLELAND"
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
                            <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                                AMBASSADOR RAMSES JOSEPH CLELAND (AG. CHIEF DIRECTOR)
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                Ambassador Ramses Joseph Cleland is currently the Acting Chief Director of the Ministry
                                of Foreign Affairs and Regional Integration of the Republic of Ghana. He was appointed
                                in December 2021.
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                Before his appointment Ambassador Cleland served as the Ambassador of Ghana to
                                Switzerland and Permanent Representative to the United Nations in Geneva from 2017 to
                                2021, he was also Ghana’s Ambassador to Austria and Permanent Representative to the UN
                                Agencies in Vienna from 2017 until 2019. He was recruited into the Foreign Service 1989,
                                and has held various positions in the Ghana Foreign Ministry and successively served in
                                Ghana Missions in France, Brazil, Cote D’Ivoire, Ireland, United Kingdom and Togo.
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                Ambassador Cleland received a Law Degree (LLB) from the University of London, UK and
                                continued his law studies at BPP School of Law in London, 2011. He was called to the
                                Ghana Bar as a Barrister and Solicitor of the Supreme Court of Ghana in 2017. He holds a
                                Bachelor of Arts and Masters Degrees in Public Administration from the University of
                                Bordeaux, (France) an MA in International Affairs from the Legon Centre for
                                International Affairs (LECIA) Legon, as well as a Diploma in International Relations
                                from the University of Yaoundé in Cameroon. He also holds an MA Degree in International
                                Human Rights and Humanitarian Law from the Graduate Institute of Geneva.
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                Mr. Ramses J. Cleland was born on 25th August, 1963 in Cairo, Egypt. He is Married with
                                four adult children. He loves reading, tennis, music (Piano, Guitar), and mountain
                                climbing.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ChiefDirectorProfilePage;
