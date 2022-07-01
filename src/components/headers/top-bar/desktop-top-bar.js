import {Box, Container, Stack, Toolbar} from "@mui/material";
import ContactLink from "../../shared/contact-link";
import {Call, DarkMode, Facebook, Instagram, LightMode, LocationOn, Mail, Twitter} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../../redux/features/ui/ui-slice";

const DesktopTobBar = () => {

    const dispatch = useDispatch();

    const {themeVariant} = useSelector(selectUI);


    return (
        <Toolbar variant="dense" sx={{
            backgroundColor: 'secondary.main',
            borderBottomColor: 'accent.main',
            borderBottomWidth: 2,
            borderBottomStyle: 'solid'
        }}>
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
                                        color: 'white',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 20,
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
                                        color: 'white',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 20,
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
                                        color: 'white',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 20,
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
                                        color: 'white',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 20,
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
                                        color: 'white',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 20,
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
                                        color: 'white',
                                        borderRadius: 4,
                                        padding: 0.6,
                                        fontSize: 20,
                                    }}
                                />
                            }
                            link="https://twitter.com/GhanaMFA"
                        />

                        {themeVariant === 'light' ? (
                            <DarkMode
                                onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.primary',
                                    color: 'white',
                                    borderRadius: 4,
                                    padding: 0.6,
                                    fontSize: 20,
                                }}
                            />
                        ): (
                            <LightMode
                                onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.primary',
                                    color: 'white',
                                    borderRadius: 4,
                                    padding: 0.6,
                                    fontSize: 20,
                                }}
                            />
                        )}
                    </Stack>
                </Box>
            </Container>
        </Toolbar>
    )
}

export default DesktopTobBar;
