import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Mission = ({mission}) => {

    return (
        <Link to={mission.link} style={{textDecoration: 'none'}}>
            <Box
                sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    height: 200,
                    width: '100%',
                    borderRadius: 32
                }}>

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}>
                    <img
                        alt={mission.area}
                        src={mission.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectPosition: 'center',
                            objectFit: 'contain'
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        borderRadius: 1,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        padding: 2,
                        color: 'rgba(255, 255, 255, 0)',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.55)',
                            color: 'rgba(255, 255, 255, 0.85)',
                        }
                    }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{height: '100%'}}>
                        <Box>
                            <Typography
                                mb={2}
                                sx={{color: 'white'}}
                                align="center"
                                variant="h5">
                                {mission.area}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Link>
    )
}

export default Mission;
