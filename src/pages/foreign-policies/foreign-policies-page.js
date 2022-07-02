import React from "react";
import Layout from "../../components/layout/layout";
import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import foreignPolicy from "../../assets/images/foreign-policy.jpg";
import aicc from "../../assets/images/aicc.jpg";
import policyObjective from "../../assets/images/policy-objective.jpg";
import growth from "../../assets/images/growth.jpg";
import {ChevronRight} from "@mui/icons-material";
import {Link} from "react-router-dom";

const ForeignPoliciesPage = () => {

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
                            What we do
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
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <img
                                alt="Foreign Policy"
                                src={foreignPolicy}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                    GHANA’S FOREIGN POLICY GUIDELINE
                                </Typography>
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    The Ministry of Foreign Affairs in concert with its Diplomatic Missions abroad, has
                                    the
                                    responsibility for the conduct of Ghana’s foreign policy. To that end, the Ministry
                                    is
                                    the chief advisor to the Government in the formulation of Ghana’s foreign policy. In
                                    order to carry out its Mission, the Ministry makes recommendations to the Government
                                    on
                                    appropriate initiatives, options and responses in the light of unfolding domestic
                                    and
                                    international events and situations.
                                </Typography>
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        sx={{textTransform: 'capitalize'}}
                                        endIcon={<ChevronRight/>}>
                                        Read More
                                    </Button>
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'background.paper',
                minHeight: '50vh', py: {xs: 8}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h5" sx={{color: 'text.primary'}}>
                                    POLICY OBJECTIVE
                                </Typography>
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    Ghana's foreign policy objectives continue to be directed towards the promotion and
                                    protection of the interests of Ghana, establishment of a just and equitable
                                    international economic policy and social order. The rest are the promotion of
                                    respect
                                    for international law and treaty obligations and settlement of international
                                    disputes by
                                    peaceful means as well as adherence to the principles enshrined in the Charter of
                                    the
                                    United Nations, the African Union, the Commonwealth, the ECOWAS Treaty and other
                                    organisations of which Ghana is a member.
                                </Typography>
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        sx={{textTransform: 'capitalize'}}
                                        endIcon={<ChevronRight/>}>
                                        Read More
                                    </Button>
                                </Link>
                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <img
                                alt="Policy Objective"
                                src={policyObjective}
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
                backgroundColor: 'background.default',
                minHeight: '50vh',
                py: {xs: 8}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <img
                                alt="Legal"
                                src={growth}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                }}/>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Stack direction="column" spacing={2}>
                                <Typography gutterBottom={true} variant="h5" sx={{color: 'text.primary'}}>
                                    GROWTH AND DEVELOPMENT AGENDA
                                </Typography>
                                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                                    The current foreign policy goal of Government is to achieve good neighbourliness and
                                    pursue economic diplomacy. To this end the policy interventions to be implemented
                                    over
                                    the medium- term is aimed at achieving the following broad objectives: accelerate
                                    economic and social integration with regional and sub-regional states; promote
                                    international peace and sustainable development; and leverage the economic and
                                    technological opportunities for sustainable development.
                                </Typography>
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        sx={{textTransform: 'capitalize'}}
                                        endIcon={<ChevronRight/>}>
                                        Read More
                                    </Button>
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ForeignPoliciesPage;
