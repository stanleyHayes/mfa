import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Link as MUILink,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import MobileNavLink from "../shared/mobile-nav-link";
import {Call, ChevronRight, DarkMode, LightMode, LocationOn, Mail, OpenInNew} from "@mui/icons-material";
import {useLocation} from "react-router";
import NavLink from "../shared/nav-link";
import {Link} from "react-router-dom";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import ContactLink from "../shared/contact-link";

const DrawerContent = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {themeVariant} = useSelector(selectUI);

    return (
        <Box sx={{py: 2, backgroundColor: 'background.default', minHeight: '100vh'}}>
            <Container>
                <Stack sx={{mb: 4}} direction="column" spacing={1}>
                    <MobileNavLink
                        active={pathname === '/'}
                        path="/" label="Home"
                    />

                    <MobileNavLink
                        active={pathname === '/services'}
                        path="/services" label="Services"
                    />

                    <MobileNavLink
                        active={pathname === '/contact'}
                        path="/contact" label="Contact"
                    />

                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -1}} expandIcon={<ChevronRight color="primary"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Foreign Policies
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column">
                                <NavLink
                                    label="Foreign Policies"
                                    active={pathname === 'foreign-policies/ghana-foreign-policy'}
                                    path="/foreign-policies/ghana-foreign-policy"
                                />

                                <NavLink
                                    label="Ghana's Foreign Policy Guideline"
                                    active={pathname === '/foreign-policies/ghana-foreign-policy-guideline'}
                                    path="/foreign-policies/ghana-foreign-policy-guideline"
                                />

                                <NavLink
                                    label="Foreign Policy Objectives"
                                    active={pathname === '/foreign-policies/foreign-policy-objectives'}
                                    path="/foreign-policies/foreign-policies-objectives"
                                />

                                <NavLink
                                    label="Growth & Development Agenda"
                                    active={pathname === '/foreign-policies/growth-and-development-agenda'}
                                    path="/foreign-policies/growth-and-development-agenda"
                                />
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -1}} expandIcon={<ChevronRight color="primary"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                About Us
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column">

                                <NavLink
                                    label="Overview"
                                    active={pathname === '/about'}
                                    path="/about"
                                />

                                <NavLink
                                    label="Honorable Minister's Profile"
                                    active={pathname === '/about/honorable-ministers-profile'}
                                    path="/about/honorable-ministers-profile"
                                />

                                <NavLink
                                    label="Hon. Kwaku Ampratwum Sarpong's"
                                    active={pathname === '/about/kwaku-ampratwum-sarpong-profile'}
                                    path="/about/kwaku-ampratwum-sarpong-profile"
                                />

                                <NavLink
                                    label="Hon. Thomas Mbomba's Profile"
                                    active={pathname === '/about/thomas-mbomba-profile'}
                                    path="/about/thomas-mbomba-profile"
                                />

                                <NavLink
                                    label="The Chief Director's Profile"
                                    active={pathname === '/about/the-chief-directors-profile'}
                                    path="/about/the-chief-directors-profile"
                                />
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -1}} expandIcon={<ChevronRight color="primary"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Quick Links
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column" spacing={1}>
                                <MUILink href="https://passport.mfa.gov.gh/" target="_blank" underline="none">
                                    <Button endIcon={<OpenInNew/>} size="small"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'capitalize',
                                                justifyContent: 'flex-start'
                                            }}>
                                        Online Passport Application
                                    </Button>
                                </MUILink>
                                <MUILink href="https://www.bog.gov.gh/" target="_blank" underline="none">
                                    <Button endIcon={<OpenInNew/>} size="small"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'capitalize',
                                                justifyContent: 'flex-start'
                                            }}>
                                        Bank of Ghana
                                    </Button>
                                </MUILink>
                                <MUILink href="http://www.ghana.travel/" target="_blank" underline="none">
                                    <Button endIcon={<OpenInNew/>} size="small"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'capitalize',
                                                justifyContent: 'flex-start'
                                            }}>
                                        GTA
                                    </Button>
                                </MUILink>
                                <MUILink href="http://www.gfzb.com.gh/" target="_blank" underline="none">
                                    <Button endIcon={<OpenInNew/>} size="small"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'capitalize',
                                                justifyContent: 'flex-start'
                                            }}>
                                        GFZB
                                    </Button>
                                </MUILink>
                                <MUILink
                                    href="https://www.thisnation.com/politics/economy/ghana-investment-promotion-centre-gipc/"
                                    target="_blank" underline="none">
                                    <Button endIcon={<OpenInNew/>} size="small"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'capitalize',
                                                justifyContent: 'flex-start'
                                            }}>
                                        GIPC
                                    </Button>
                                </MUILink>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -1}} expandIcon={<ChevronRight color="primary"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Public
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column" spacing={1}>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/press"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Press Release
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/announcements"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Announcement
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/events"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Events
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/news"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        News
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/vacancies"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Vacancies
                                    </Button>
                                </Link>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -1}} expandIcon={<ChevronRight color="primary"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                Media
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column" spacing={1}>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/media/videos"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Videos
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/media/photos"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Photos
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}
                                      to="/media/publications" style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Publications
                                    </Button>
                                </Link>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -1}} expandIcon={<ChevronRight color="primary"/>}>
                            <Typography variant="body2" sx={{color: 'text.primary', fontWeight: 'bold'}}>
                                About Ghana
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="column" spacing={1}>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())} to="/about-ghana"
                                      style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Profile
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}
                                      to="/about-ghana/economy" style={{textDecoration: 'none'}}>
                                    <Button
                                        size="small"
                                        sx={{
                                            color: 'text.secondary',
                                            textTransform: 'capitalize',
                                            justifyContent: 'flex-start'
                                        }}>
                                        Economy
                                    </Button>
                                </Link>
                                <Link onClick={() => dispatch(UI_ACTION_CREATORS.closeDrawer())}
                                      to="/about-ghana/regions" style={{textDecoration: 'none'}}>
                                    <Button size="small" sx={{
                                        color: 'text.secondary',
                                        textTransform: 'capitalize',
                                        justifyContent: 'flex-start'
                                    }}>
                                        Regions
                                    </Button>
                                </Link>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Stack>

                <Stack direction="column" spacing={3}>
                    <Tooltip title="Apply for your passport online">
                        <MUILink target="_blank" underline="none" href="https://passport.mfa.gov.gh/">
                            <Button
                                fullWidth={true}
                                endIcon={<OpenInNew/>}
                                sx={{
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 32,
                                    borderTopLeftRadius: 32,
                                    backgroundColor: 'colors.action',
                                    textTransform: 'capitalize',
                                    padding: 1
                                }}
                                disableElevation={true}
                                size="small">
                                Online Passport Application
                            </Button>
                        </MUILink>
                    </Tooltip>
                    <Stack alignItems="center" justifyContent="space-between" direction="row">
                        <ContactLink
                            icon={
                                <Call
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: 'white',
                                        borderRadius: 0.2,
                                        padding: 0.6,
                                        fontSize: "large",
                                    }}
                                />
                            }
                            link="tel:+23327000.28319"
                        />

                        <ContactLink
                            icon={
                                <LocationOn
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'light.primary',
                                        color: 'white',
                                        borderRadius: 0.2,
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
                                        borderRadius: 0.2,
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
                                    borderRadius: 0.2,
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
                                    borderRadius: 0.2,
                                    padding: 0.6,
                                    fontSize: 20,
                                }}
                            />
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default DrawerContent;
