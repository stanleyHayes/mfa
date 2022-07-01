import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";

const ForeignPoliciesObjectivesPage = () => {

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
                backgroundColor: 'background.default',
                display: 'flex',
                alignItems: 'center',
                minHeight: '50vh',
                py: {xs: 8, lg: 4}
            }}>
                <Container maxWidth="md">
                    <Stack direction="column" spacing={2}>
                        <Typography
                            gutterBottom={true}
                            variant="h5" sx={{color: 'text.primary'}}>
                            FOREIGN POLICY OBJECTIVES
                        </Typography>
                        <Box>
                            <Typography
                                gutterBottom={true}
                                variant="body1"
                                sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Good Neighbourliness
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To sustain the climate of peace and stability in the West African sub-region and to
                                maintain
                                cordial relations between Ghana and her neighbours as a means to addressing common
                                challenges to development across national frontiers.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography
                                gutterBottom={true}
                                variant="body1"
                                sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Promoting Regional Integration
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To give substance to Government’s declaration to make regional integration the flagship
                                of
                                Ghana’s foreign policy and to derive maximum benefit from Ghana’s membership of ECOWAS
                                and
                                other regional economic communities for Ghana’s socio-economic advancement.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Support for the African Union
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To play a leading role in collective efforts to promote peace, stability and economic
                                development on the African continent and ensure Ghana’s active participation in
                                deliberations of the African Union.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Developing and Sustaining International Goodwill, Solidarity and Support for National
                                Development
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To maintain a reasonably high profile diplomatic presence abroad and thereby, seek to
                                attract appreciable levels of foreign direct investments, political goodwill and
                                international solidarity as well as a sustained positive image.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Economic Diplomacy
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To support the national objective of diversifying and increasing Ghana’s export base by
                                actively seeking markets for Ghanaian products abroad and taking advantage of
                                preferential
                                arrangements and multilateral trade agreements. The Ministry also supports the
                                diversification and expansion of the tourism industry for job creation and revenue
                                generation by marketing Ghana abroad as a competitive tourist destination and attracting
                                investment into the hospitality industry.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Participation in the Deliberations of Multilateral Organisations
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To help seek solutions to the challenges confronting international peace, stability and
                                development and to articulate Ghana’s views in major international conferences and
                                deliberations of multilateral institutions.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Promoting Cooperation in Scientific and Technical Research
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To facilitate the negotiation and signing of bilateral cooperation agreements with other
                                developing countries in the field of scientific and technical research.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Promoting Cooperation in Human Resource Development
                            </Typography>

                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To facilitate the award of scholarships to Ghanaian students to study abroad under
                                existing
                                frameworks for bilateral cooperation.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Promoting Cooperation in the Health Sector
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                As part of Government’s efforts to boost healthcare delivery in Ghana, the Ministry
                                through
                                the instrumentality of various Joint Commissions for Cooperation and other bilateral and
                                multilateral arrangements negotiates for additional resources including medical
                                personnel,
                                equipment and other technical assistance for the health sector.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Promoting and Protecting the Welfare of Ghanaian Nationals Abroad
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                The Ministry seeks to minimise the negative impact and optimise the potential benefits
                                of
                                migration on Ghana’s development by promoting and protecting the welfare of Ghanaian
                                nationals abroad and ensuring that they participate actively in national development.
                            </Typography>
                        </Box>

                        <Box>
                            <Typography gutterBottom={true} variant="body1"
                                        sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Biometric Passports
                            </Typography>
                            <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                To comply with directives of ICAO and ECOWAS and improve the security and integrity of
                                the
                                Ghanaian passport, the Ministry completed the installation of hardware and software at
                                the
                                Passport Office and has since 23rd March, 2010, commenced the issuance of biometric
                                passports. Passport Application Centres have been established at five (5) regional
                                levels to
                                enhance service delivery to the public.
                            </Typography>
                        </Box>
                    </Stack>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        The Ministry of Foreign Affairs in concert with its Diplomatic Missions abroad, has the
                        responsibility for the conduct of Ghana’s foreign policy. To that end, the Ministry is the chief
                        advisor to the Government in the formulation of Ghana’s foreign policy. In order to carry out
                        its Mission, the Ministry makes recommendations to the Government on appropriate initiatives,
                        options and responses in the light of unfolding domestic and international events and
                        situations.
                    </Typography>
                </Container>
            </Box>
        </Layout>
    )
}

export default ForeignPoliciesObjectivesPage;
