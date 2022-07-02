import React from "react";
import {Link, Stack, Typography} from "@mui/material";

const ContactLink = ({icon, value, link, label}) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {icon}
            <Stack direction="column" justifyContent="center">
                {label ? (
                    <Typography
                        sx={{color: 'white', fontSize: 14}}>
                        {label}
                    </Typography>
                ): null}
                <Link underline="none" href={link}>
                    <Typography
                        sx={{color: 'white', fontSize: 14, fontWeight: 700}}>
                        {value}
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}

export default ContactLink;
