import {Box, Container, Stack, Toolbar, useTheme} from "@mui/material";
import ContactLink from "../../shared/contact-link";
import {Call, Facebook, Instagram, LocationOn, Mail, Twitter} from "@mui/icons-material";

const DesktopTobBar = () => {

    const theme = useTheme();

    return (
        <Toolbar variant="dense" sx={{backgroundColor: 'secondary.main'}}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                    <Stack
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        direction="row">
                        <ContactLink
                            icon={
                                <Call
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: theme.palette.mode === 'dark' ? 'white' : 'secondary.main',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 28,
                                    }}
                                />
                            }
                            link="tel://+233 30 299 9604"
                            value="+233 30 299 9604"
                        />

                        <ContactLink
                            icon={
                                <LocationOn
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: theme.palette.mode === 'dark' ? 'white' : 'secondary.main',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 28,
                                    }}
                                />
                            }
                            link=""
                            value="Flat 5 Agostinho Neto Rd, Accra, Ghana"
                        />

                        <ContactLink
                            icon={
                                <Mail
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: theme.palette.mode === 'dark' ? 'white' : 'secondary.main',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 28,
                                    }}
                                />
                            }
                            link="mailto://info@mfa.gov.gh"
                            value="info@mfa.gov.gh"
                        />
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center">
                        <ContactLink
                            icon={
                                <Facebook
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: theme.palette.mode === 'dark' ? 'white' : 'secondary.main',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 28,
                                    }}
                                />
                            }
                            link="https://facebook.com/public/Mfari-Ghana"
                        />

                        <ContactLink
                            icon={
                                <Instagram
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: theme.palette.mode === 'dark' ? 'white' : 'secondary.main',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 28,
                                    }}
                                />
                            }
                            link="https://instagram.com/inigolopez"
                        />

                        <ContactLink
                            icon={
                                <Twitter
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: theme.palette.mode === 'dark' ? 'white' : 'secondary.main',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 28,
                                    }}
                                />
                            }
                            link="https://twitter.com/GhanaMFA"
                        />

                    </Stack>
                </Box>
            </Container>
        </Toolbar>
    )
}

export default DesktopTobBar;
