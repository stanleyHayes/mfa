import Layout from "../../components/layout/layout";
import {useParams} from "react-router";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {useState} from "react";
import {DATA} from "../../utils/data";
import Country from "../../components/shared/country";

const MissionsPage = () => {
    const {continent} = useParams();
    const [selectedContinent] = useState(() => {
        return DATA.MISSIONS.find(mission => mission.area.toLowerCase() === continent);
    });

    return (
        <Layout>
            <Box sx={{backgroundColor: 'background.default', py: 8}}>
                <Container>
                    <Typography mb={4} variant="h4" sx={{color: 'text.primary'}}>
                        {selectedContinent && selectedContinent.area}
                    </Typography>
                    <Divider variant="fullWidth" sx={{my: 4}} light={true}/>
                    <Grid container={true} spacing={4}>
                        {selectedContinent.countries.map((country, index) => {
                            return (
                                <Grid item={true} key={index} xs={12} md={4} lg={3}>
                                    <Country country={country}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default MissionsPage;