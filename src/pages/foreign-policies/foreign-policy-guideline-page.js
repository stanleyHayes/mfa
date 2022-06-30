import Layout from "../../components/layout/layout";
import {Box, Container, Typography} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";

const ForeignPoliciesObjectivesPage = () => {

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
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        The Ministry of Foreign Affairs in concert with its Diplomatic Missions abroad, has the
                        responsibility for the conduct of Ghana’s foreign policy. To that end, the Ministry is the chief
                        advisor to the Government in the formulation of Ghana’s foreign policy. In order to carry out
                        its
                        Mission, the Ministry makes recommendations to the Government on appropriate initiatives,
                        options
                        and responses in the light of unfolding domestic and international events and situations.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        The fundamental principles that guide Ghana’s foreign policy are contained in Ghana’s 1992
                        Constitution. Article 40 of the Constitution provides the broad principles underpinning her
                        foreign
                        policy as follows:
                    </Typography>
                    <ol>
                        <li>Promotion and protection of the interest of Ghana;</li>
                        <li> Establishment of a just and equitable international, economic, political and social order;
                        </li>
                        <li> Promotion of respect for international law and treaty obligations;</li>
                        <li> Promotion of the settlement of international disputes through peaceful means;</li>
                        <li> Adherence to the principles enshrined in the Charter and aims or ideals of the United
                            Nations, the
                        </li>
                        <li>African Union, the ECOWAS, the Commonwealth and the Non-Aligned Movement.
                        </li>
                    </ol>

                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        In fashioning Ghana’s foreign policy, the Ministry takes into account all the factors that
                        impinge
                        directly or indirectly on the national interest. This involves the protection and defence of the
                        territorial integrity of Ghana, ensuring peace and stability for Ghana and the sub-region,
                        contributing to wider international peace and security, cultivating a favourable image of Ghana
                        abroad and defending that image.
                    </Typography>

                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        A nation’s foreign policy has been variously defined in terms of a sovereign state’s interaction
                        with other states. While some analysts prefer, perhaps, a rather simplistic interpretation of
                        foreign policy as the external manifestation of the domestic factors and objectives of the
                        nation,
                        others see foreign policy, indeed, as an extension of domestic policy. Irrespective of one’s
                        perception of foreign policy, the common denominator is, the evolution of a set of objectives
                        employed by a nation in advancing its own interest including its survival and prosperity within
                        a
                        common global security system and development. National interests inevitably provide that
                        bedrock of
                        the foreign policy of any given state.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        Perhaps to better appreciate Ghana’s foreign policy as it pertains today, it will be appropriate
                        to
                        give a brief historical appraisal of the nation’s foreign policy objectives since independence.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        Ghana’s foreign policy from independence in 1957 to the present, and spanning ten different
                        administrations, has remained largely unchanged in its basic tenets. The foundation of this
                        policy,
                        which derived from the nation’s historical, geographical and economic perspective, was laid
                        during
                        the First Republic.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        Over the years, there have been critical reappraisals of foreign policy, particularly in 1982
                        and in
                        2001 with a view to making Ghana’s foreign policy more positive, more relevant to changes on the
                        international climate and more proactive.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        Ghana’s foreign policy involved the call for a United Africa which would culminate in political,
                        social and economic integration of African countries. It can be said with pride that the
                        launching
                        of the African Union in 2001 only marked a return to the Pan-Africanist project of Ghana’s
                        visionary
                        leader and first President, Dr. Kwame Nkrumah. To demonstrate her support for these ideals of
                        unity,
                        Ghana’s Republican Constitution was amended under President Nkrumah, to prepare the grounds for
                        surrendering part of the country’s sovereignty, for a union between Ghana, Guinea and Mali. The
                        Government’s objective was based on the recognition that Africa, divided into a collection of
                        small
                        states, would not have the economies of scale required for the advancement of its peoples.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        However, a number of African countries then did not share Ghana’s fervour for a united Africa
                        and as
                        such the Organisation of African Unity as it came to be constituted, fell short of what was
                        perceived by the late President.
                    </Typography>
                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        Irrespective of her strong stand against the colonial powers, Ghana adopted a pragmatic outlook
                        in
                        seeking economic cooperation with a number of countries, both in the East and West. Fruitful and
                        mutually beneficial cooperation with the industrialised countries was pursued to procure the
                        much
                        needed financial and technical assistance for the young nation’s economic programmes. In this
                        regard, the policy of Non-Alignment to which Ghana adhered served a useful purpose. This policy
                        meant the Ghana was neither affiliated to the East or West, the two major world blocs and could,
                        though sometimes with difficulty, solicit support from either bloc. Nkrumah was, however, quick
                        to
                        distinguish between neutrality and what he perceived as negative neutrality. Positive neutrality
                        unlike the other did not imply an apathetic attitude but a necessity to formulate opinions on
                        issues
                        of global concern on their own merit.
                    </Typography>

                    <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                        The foundation laid for the nation’s foreign policy during the First Republic helps to outline
                        and
                        make better understanding of Ghana’s foreign policy direction as it exists today. Today, Ghana’s
                        foreign policy constitutes of a mixed bag of progressive views on topical events, pragmatic
                        management and pursuit of economic programmes, and vigorous yet objective dedication to West
                        African
                        and African causes and those of developing countries. Traditional political and topical issues
                        of
                        concern are also considered on their own merit.
                    </Typography>
                </Container>
            </Box>
        </Layout>
    )
}

export default ForeignPoliciesObjectivesPage;
