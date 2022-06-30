import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";

const GrowthAndDevelopmentAgendaPage = () => {

    return (
        <Layout>
            <Box sx={{backgroundColor: 'background.default'}}>
                <Container>
                    <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                        GROWTH & DEVELOPMENT AGENDA
                    </Typography>
                    <Box>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            Specific Broad Sector Activities of the Ministry
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            International Relations for Development
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            (Under Ghana’s Shared Growth and Development Agenda 2014-2017)
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            The current foreign policy goal of Government is to achieve good neighbourliness and pursue
                            economic diplomacy. To this end the policy interventions to be implemented over the medium-
                            term is aimed at achieving the following broad objectives: accelerate economic and social
                            integration with regional and sub-regional states; promote international peace and
                            sustainable development; and leverage the economic and technological opportunities for
                            sustainable development.
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            Accelerate economic and social integration with regional and sub-regional states:
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            The main issue identified under this policy objective is bottlenecks in the free movement of
                            goods and services among ECOWAS member states. To address the issue and accelerate economic
                            and social integration efforts will be made at: establishing a common customs union;
                            ensuring that national trade policies incorporate ECOWAS protocols, WTO and ACP/EU accords;
                            and strengthening links between industrial and trade policies.
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            Promote international peace and sustainable development:
                        </Typography>
                        Issues identified under this objective are: threats to international peace and security as well
                        as low compliance with international protocols and conventions. Strategies identified to address
                        these issues are: review international obligations and domesticate all ratified international
                        treaties; strengthen sub- regional, regional and global collaboration for the promotion of
                        international peace, security and sustainable development; act in concert with other countries
                        to address threats to international peace and security; and strengthen Ghana’s bilateral and
                        multilateral diplomacy.
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            Leverage economic and technological opportunities for sustainable development:
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            The low utilisation of opportunities to promote Ghana’s interests abroad has been identified
                            as the main issue under the focus area. The strategies to be pursued to address this issue
                            are: leverage economic and technological opportunities for sustainable development; leverage
                            Ghana’s democratic and governance credentials to promote its political and economic
                            interests abroad; review diplomatic representation and alignments in pursuit of Ghana’s
                            national interests; and strengthen Ghana’s bilateral and multilateral diplomacy.
                        </Typography>

                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default GrowthAndDevelopmentAgendaPage;
