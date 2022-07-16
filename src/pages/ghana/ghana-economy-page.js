import React from "react";
import Layout from "../../components/layout/layout";
import {Box, Container, Stack, Typography} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";
import coins from "../../assets/images/coins-768x512.jpg";

const GhanaEconomyPage = () => {

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
                            align="center"
                            mb={2}
                            sx={{color: 'white'}}
                            variant="h3">
                            GHANA’S ECONOMY
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
                    <Stack spacing={4} direction="column">
                        <img
                            alt="Economy of Ghana"
                            src={coins}
                            style={{
                                width: '100%',
                                height: '50vh',
                                borderRadius: 32,
                                objectFit: 'cover',
                            }}/>
                        <Typography gutterBottom={true} variant="h4" sx={{color: 'text.primary'}}>
                            OVERVIEW
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            Ghana’s economy has been strengthened by a quarter century of relatively sound management, a
                            competitive business environment, and sustained reductions in poverty levels. Ghana is well
                            endowed with natural resources and agriculture accounts for roughly one-quarter of GDP and
                            employs more than half of the workforce, mainly small landholders. The services sector
                            accounts for 50% of GDP.
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            According to the 2018 Budget Statement and Economic Policy, the summary of Ghana’s
                            Macroeconomic performance, under the theme “Putting Ghana Back to Work”, is as follows:
                        </Typography>
                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                            Overall real GDP grew at an estimated 7.8 percent in the first half of 2017 (6.6% in quarter
                            one and 9.0% in quarter two) against 2.7 percent in same period in 2016. Overall GDP growth
                            is provisionally estimated at 7.9 percent at the end of 2017, up from the original forecast
                            of 6.3 percent; ?
                            Non-Oil real GDP grew at an estimated 4.0 percent in the first half year of 2017 (4.0% in
                            quarter one and 3.9% in quarter two) compared to 5.9 percent in the same period in 2016.
                            Non-oil GDP growth is provisionally estimated at 4.8 percent at the end of 2017; ?
                            End-period inflation was 11.6 percent in October, 2017 compared to 15.8 percent at the same
                            period in 2016; ?
                            The overall budget deficit on cash basis was 4.5 percent of GDP in September, 2017 against a
                            target of 4.8 percent of GDP and an outturn of 6.4 percent in the same period in 2016; ?
                            The primary balance posted a surplus of 0.3 percent of GDP in September, 2017, as targeted
                            and is a significant improvement over a deficit of 1.6 percent realized during the same
                            period in 2016; ?
                            The current account balance registered a deficit estimated at 0.2 percent of GDP in August,
                            2017 compared with 2.6 percent in August, 2016; and ?
                            The country’s Gross International Reserves (including petroleum funds and encumbered
                            assets), which stood at US$6.9 billion by end-September 2017, could cover 3.9 months of
                            imports compared to the US$4.8 billion or 2.5 months import cover recorded in the same
                            period of 2016.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default GhanaEconomyPage;
