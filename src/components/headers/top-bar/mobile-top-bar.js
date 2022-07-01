import {Container, Stack, Toolbar} from "@mui/material";
import ContactLink from "../../shared/contact-link";
import {Call, DarkMode, LightMode, LocationOn, Mail} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const MobileTobBar = () => {

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
                <Stack alignItems="center" justifyContent="space-between" direction="row">
                    <ContactLink
                        icon={
                            <Call
                                sx={{
                                    cursor: 'pointer',
                                    backgroundColor: 'light.primary',
                                    color: 'white',
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
                                    color: 'white',
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
                                    color: 'white',
                                    borderRadius: 4,
                                    padding: 0.6,
                                    fontSize: "large",
                                }}
                            />
                        }
                        link="mailto:dev.stanley.hayford@gmail.com"
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
                    ) : (
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
            </Container>
        </Toolbar>
    )
}

export default MobileTobBar;
