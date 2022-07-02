import React from "react";
import {Button, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {KeyboardArrowRight} from "@mui/icons-material";
import {Link} from "react-router-dom";

const Service = ({service}) => {
    return (
        <Card>
            <CardContent>
                <CardMedia component="img" image={service.image} sx={{height: 150}} />
                <Typography variant="body1" sx={{color: 'text.primary'}}>
                    {service.title}
                </Typography>
                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    {service.description.splice(100)}
                </Typography>
                <Stack direction="row" justifyContent="flex-end">
                    <Link to={`/services/${service.id}`} style={{textDecoration: 'none'}}>
                        <Button
                            endIcon={<KeyboardArrowRight />}
                            size="large"
                            sx={{textTransform: 'capitalize'}}
                            variant="text">
                            Read More
                        </Button>
                    </Link>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Service;
