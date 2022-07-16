import React from "react";
import {Button, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";
import {Link} from "react-router-dom";
import React from "react";

const ServiceList = ({service, alternate}) => {
    return (
        <Card>
            <CardContent>
                <Grid container={true}>
                    {alternate ? (
                        <React.Fragment>
                            <Grid item={true} xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    image={service.image}
                                    sx={{height: '100%', width: '100%', borderRadius: 8}}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    {service.description.splice(100)}
                                </Typography>
                                <Stack direction="row" justifyContent="flex-end">
                                    <Link to={`/services/${service.id}`} style={{textDecoration: 'none'}}>
                                        <Button
                                            endIcon={<KeyboardArrowRight/>}
                                            size="large"
                                            sx={{textTransform: 'capitalize'}}
                                            variant="text">
                                            Read More
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                        </React.Fragment>
                    ): (
                        <React.Fragment>
                            <Grid item={true} xs={12} md={8}>
                                <Typography variant="body1" sx={{color: 'text.primary'}}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                                    {service.description.splice(100)}
                                </Typography>
                                <Stack direction="row" justifyContent="flex-end">
                                    <Link to={`/services/${service.id}`} style={{textDecoration: 'none'}}>
                                        <Button
                                            endIcon={<KeyboardArrowRight/>}
                                            size="large"
                                            sx={{textTransform: 'capitalize'}}
                                            variant="text">
                                            Read More
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <CardMedia
                                    component="img"
                                    image={service.image}
                                    sx={{height: '100%', width: '100%', borderRadius: 8}}
                                />
                            </Grid>
                        </React.Fragment>
                    )}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ServiceList;
