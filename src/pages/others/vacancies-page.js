import React from "react";
import Layout from "../../components/layout/layout";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import Vacancies from "../../components/shared/vacancy";
import {DATA} from "../../utils/data";

const VacanciesPage = () => {

    return (
        <Layout>
            <Box
                sx={{py: 8}}>
                <Container sx={{minHeight: '60vh'}}>
                    <Box>
                        <Typography variant="h4" sx={{color: 'text.primary'}}>
                           International Vacancies
                        </Typography>
                    </Box>

                    <Divider sx={{my: 4}} variant="fullWidth"/>

                    <Grid sx={{mb: 6}} container={true} spacing={4}>
                        {
                            DATA.VACANCIES.map((vacancy, index) => {
                                return (
                                    <Grid key={vacancy._id} item={true} xs={12} md={4} lg={3}>
                                        <Vacancies vacancy={vacancy}/>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default VacanciesPage;
