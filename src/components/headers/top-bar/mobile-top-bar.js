import {Container, Stack, Toolbar, useTheme} from "@mui/material";
import ContactLink from "../../shared/contact-link";
import {Call, LocationOn, Mail} from "@mui/icons-material";

const MobileTobBar = () => {

    const theme = useTheme();

    return (
        <Toolbar variant="dense" sx={{backgroundColor: 'secondary.main'}}>
            <Container>
                <Stack alignItems="center" justifyContent="space-between" direction="row">
                    <ContactLink
                        icon={
                            <Call
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.primary',
                                    color: theme.palette.mode === 'dark' ? 'white': 'secondary.main',
                                    borderRadius: 4,
                                    padding: 0.6,
                                    fontSize: "large",
                                }}
                            />
                        }
                        link="tel:+233270048319"
                    />

                    <ContactLink
                        icon={
                            <LocationOn
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.primary',
                                    color: theme.palette.mode === 'dark' ? 'white': 'secondary.main',
                                    borderRadius: 4,
                                    padding: 0.6,
                                    fontSize: "large",
                                }}
                            />
                        }
                    />

                    <ContactLink
                        icon={
                            <Mail
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.primary',
                                    color: theme.palette.mode === 'dark' ? 'white': 'secondary.main',
                                    borderRadius: 4,
                                    padding: 0.6,
                                    fontSize: "large",
                                }}
                            />
                        }
                        link="mailto:dev.stanley.hayford@gmail.com"
                    />
                </Stack>
            </Container>
        </Toolbar>
    )
}

export default MobileTobBar;
