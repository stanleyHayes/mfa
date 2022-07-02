import React from "react";
import Layout from "../../components/layout/layout";
import {Box, Chip, Container, Grid, Stack, Typography} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";
import mfaJapan from "../../assets/images/mfa-japan.jpg";
import mfabuilding from "../../assets/images/mfabuilding.jpg";
import {DATA} from "../../utils/data";

const AboutPage = () => {

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
                            Who we are
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
                    <Stack spacing={2} direction="column">
                        <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                            BRIEF HISTORY OF THE MINISTRY
                        </Typography>
                        <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                            The Ministry of Foreign Affairs was established in 1957 with Dr. Kwame Nkrumah, then leader
                            of
                            Government Business, as the first Foreign Minister. A Permanent Secretary was the head of
                            administration, aided by Principal Assistant Secretaries who headed the various departments.
                        </Typography>
                        <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                            On 6th March, 1957, when Ghana became independent, Dr. Kwame Nkrumah made a historic foreign
                            policy pronouncement. The concept of free, proud, confident Africa was to dominate the
                            foreign
                            policy of Ghana. The independent state of Ghana had at its disposal, competent diplomats who
                            had
                            been selected and trained in 1955 to implement her foreign policy. Three very senior civil
                            servants were also drafted into the Foreign Ministry to occupy higher posts.
                        </Typography>
                        <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                            Dr. Nkrumah established an autonomous African Affairs Secretariat under his personal
                            direction
                            primarily to promote and effect his vision of African Unity – a foreign policy issue which
                            normally should have fallen within the purview of the Foreign Ministry. After his overthrow
                            in
                            February 1966, the Secretariat was incorporated into the Ministry.
                        </Typography>
                        <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                            The Ministry and its diplomatic missions abroad constitute the Ghana Foreign Service charged
                            with the control, direction and coordination of Ghana’s external relations. In addition to
                            diplomatic missions, honorary consulates are established to complement the work of the
                            former in
                            the promotion of investment, trade and tourism as well as the discharge of consular
                            functions in
                            areas with significant Ghanaian communities.
                        </Typography>
                        <Typography variant="body1" sx={{color: 'text.secondary'}}>
                            The name of the Ministry has undergone various changes in Ghana’s recent history. Its
                            current
                            name, Ministry of Foreign Affairs and Regional Integration, was designated in 2009 to
                            emphasise
                            the importance of regional integration as a foreign policy objective.
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            <Box sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Stack spacing={2} direction="column">
                        <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                            INTRODUCTION
                        </Typography>
                        <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                            The Ministry of Foreign Affairs and Regional Integration is the principal organ of state
                            responsible administratively and executively for the initiation, formulation, co-ordination
                            and
                            management of Ghana’s Foreign Policy.
                        </Typography>
                        <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                            It comprises the Headquarters, fifty (50) Diplomatic and Five (5) Consulate
                            Generals/Consular
                            Missions as well as three (3) Subvented Organizations, viz, The Legon Centre for
                            International
                            Affairs and Diplomacy (LECIAD), the National African Peer Review Mechanism Governing Council
                            (NAPRM-GC) and the All African Students Union (AASU).
                        </Typography>
                    </Stack>
                </Container>
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
                                alt="MFA Building"
                                src={mfabuilding}
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
                            <Stack spacing={2} direction="column">
                                <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                                    HEADQUARTERS
                                </Typography>
                                <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                                    The Ministry operates at the Headquarters through the Offices of the Hon. Minister
                                    and
                                    Hon. Deputy Minister as well as the Directorate and Staff of the various Bureaux. At
                                    the
                                    apex of the Ministry is the Office of the Minister for Foreign Affairs and Regional
                                    Integration and her Deputies, with their respective secretariats. Next, is the
                                    Office of
                                    the Chief Director, to whom the following line Bureaux headed by Directors report
                                    and
                                    whose competences are defined by their geographical, institutional or functional
                                    areas
                                    of coverage:
                                </Typography>
                                <Grid container={true} spacing={2} alignItems="center">
                                    {DATA.FUNCTIONAL_AREAS.map((area, index) => {
                                        return (
                                            <Grid item={true} key={index}>
                                                <Chip label={area} size="medium"/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <img
                                alt="MFA Japan"
                                src={mfaJapan}
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
                            <Stack spacing={2} direction="column">
                                <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                                    GHANA MISSIONS ABROAD AND GEOGRAPHICAL DISTRIBUTION
                                </Typography>
                                <Typography gutterBottom={true} variant="body1" sx={{color: 'text.secondary'}}>
                                    Ghana currently maintains fifty-five (55) Embassies, High Commissions and
                                    Consulates-General (please see Appendix A). To complement the work of the Missions,
                                    fifty-nine (59) Honorary Consulates have also been established. Several of the
                                    Missions
                                    are also concurrently accredited to countries where Ghana does not have resident
                                    diplomatic presence. The global distribution of Ghana’s Diplomatic Missions is as
                                    follows:
                                </Typography>
                                <Grid container={true} spacing={2} alignItems="center">
                                    {DATA.GLOBAL_AREAS.map((area, index) => {
                                        return (
                                            <Grid item={true} key={index}>
                                                <Chip label={area} size="medium"/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Layout>
    )
}

export default AboutPage;
