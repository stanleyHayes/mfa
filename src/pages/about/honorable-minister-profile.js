import Layout from "../../components/layout/layout";
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";
import minster from "../../assets/images/image-2.jpg";

const HonorableMinisterProfile = () => {

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
                            THE MINISTER
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                minHeight: '50vh',
                py: {xs: 8}
            }}>
                <Container>

                    <Typography variant="h5" sx={{color: 'text.primary'}}>
                        PROFILE OF THE HONOURABLE MINISTER
                    </Typography>

                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="Minister of foreign affairs"
                                src={minster}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 32,
                                    objectFit: 'cover',
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Hon. Shirley Ayorkor Botchwey has served as Minister for Foreign Affairs and
                                    Regional
                                    Integration of Ghana since 10th January 2017. As Foreign Minister, she has led
                                    the Council
                                    of Ministers of the 15-member Economic Community of West African States (ECOWAS)
                                    for two
                                    successive terms since July 2020 to the present. Under her leadership, the
                                    Council has
                                    advised the Authority of Heads of State and Government of ECOWAS on the response
                                    to the
                                    security situation in the Sahel, including four military takeovers, one
                                    attempted coup and a
                                    failed coup; the review of the Supplementary Protocol on Democracy and
                                    Governance; the
                                    reform of the ECOWAS Commission; and ECOWAS budget reforms to ensure efficiency
                                    and more
                                    funding for Community Programmes. In that role, she has led the process of
                                    negotiations
                                    towards transitions to democracy with the military regimes that have seized
                                    power in the
                                    ECOWAS region since 2020, including as leader of the ECOWAS delegations to
                                    Guinea and
                                    Burkina Faso and as a member of the ECOWAS Mediation Mission to Mali.
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    Hon. Botchwey has extensive experience in diplomacy having served as a Deputy
                                    Minister for
                                    Foreign Affairs in the last term of President John Agyekum Kufuor, from
                                    2006-2007 and
                                    2008-2009. She oversaw an extensive transformation in both human resource
                                    development and
                                    conditions of service for Foreign Service Officers while streamlining and
                                    improving consular
                                    and passport services both at home and at Ghana’s missions abroad, introducing
                                    digitization
                                    and enhanced online services. Ghana’s foreign policy successes under her
                                    leadership include
                                    the high visibility and positive image Ghana enjoys under the Presidency of
                                    President Nana
                                    Addo Dankwa Akufo-Addo. She led Ghana’s successful campaign for membership of
                                    the United
                                    Nations Security Council for the term 2022-2023. Foreign Minister Botchwey is a
                                    member of
                                    Ghana’s National Security Council.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack direction="column" spacing={2}>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Hon. Botchwey previously served as Deputy Minister for Information (2005-2006), and
                            subsequently as the Deputy Minister for Trade and Industry (2007-2008) in the first term of
                            President Kufuor from 2000-2004. Hon. Botchwey was her party’s spokesperson on Foreign
                            Affairs between the year 2009 and 2013, while in opposition. During the same period, she was
                            Ranking Member for the Parliamentary Select Committee on Foreign Affairs and subsequently,
                            the Appointments, Defence and Interior Committees of Parliament.
                        </Typography>


                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            A member of the ECOWAS Parliament from 2013 – 2017, Hon. Shirley Ayorkor Botchwey worked
                            with her colleagues to assist the Community Parliament in its advisory role in considering
                            matters concerning the region, particularly on issues relating to fundamental human rights
                            and freedom, while making recommendations to institutions and organs of ECOWAS. The Hon
                            Minister also served as Vice-Chair on the NEPAD & APRM Committees.
                        </Typography>


                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            In the immediate past Parliament (2017 – 2021), she sat on the Communication as well as the
                            Gender and Children Committees of Parliament, where she worked with colleague members on
                            matters relating to communications generally as well as examining all issues related to
                            gender and children to ensure their inclusion in all appropriate legislation.
                        </Typography>


                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            As a four-term legislator, Hon. Botchwey represented the most populous constituency in the
                            country, Weija, in the Greater Accra Region for two terms until it was redemarcated. She
                            subsequently represented the Anyaa/Sowutuom constituency for two terms.
                        </Typography>


                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Before entering frontline politics, Hon. Shirley Ayorkor Botchwey ran a successful Marketing
                            and Communications Company and served as a consultant for the Ministry of Tourism. She
                            worked in various capacities with organizations such as Worldspace Ghana, the Divestiture
                            Implementation Committee, Glaxo Group Research and Hodge Recruitment.
                        </Typography>

                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Hon. Minister Botchwey holds an Executive MBA, (Project Management option), MA in Public
                            Communication, Bachelor of Laws Degree (LLB), a Diploma in Public Relations and Advertising
                            as well as a certificate in Marketing Management from the following institutions
                            respectively: the University of Ghana Business School (UGBS), the Ghana Institute of
                            Journalism (GIJ), Ghana Institute of Management and Public Administration (GIMPA) as well as
                            the Pitman’s Central College and the Universities of London and Westminster in the United
                            Kingdom (UK).
                        </Typography>

                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Hon. Botchwey is a member of the Ghana National Association of Alternative Dispute (ADR)
                            Practitioners. She has participated in numerous capacity-building programmes on leadership,
                            marketing, driving government performance and parliament and the rule of law, including at
                            the Institute of Paralegal Training and Leadership Studies, Harvard Kennedy School, Casa
                            Africa, Parliament of Spain, The African Leadership Initiative/The Aspen Institute, and the
                            Ghana Institute of Management and Public Administration.
                        </Typography>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            Hon. Shirley Ayorkor Botchwey is a mother of two.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default HonorableMinisterProfile;
