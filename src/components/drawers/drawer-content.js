import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Stack} from "@mui/material";
import MobileNavLink from "../shared/mobile-nav-link";
import {
    ContactPage,
    ContactPageOutlined,
    Home,
    HomeOutlined,
    Info,
    InfoOutlined,
    KeyboardArrowUp,
    MiscellaneousServices,
    MiscellaneousServicesOutlined
} from "@mui/icons-material";
import {useLocation} from "react-router";
import NavLink from "../shared/nav-link";

const DrawerContent = () => {

    const {pathname} = useLocation();

    return (
        <Box sx={{py: 4}}>
            <Container>
                <Stack direction="column">
                    <MobileNavLink
                        active={pathname === '/'}
                        icon={pathname === '/' ? <Home/> : <HomeOutlined/>}
                        path="/" label="Home"
                    />
                    <Accordion variant="elevation" elevation={0}>
                        <AccordionSummary sx={{marginLeft: -2}} expandIcon={<KeyboardArrowUp/>}>
                            <Button
                                startIcon={pathname === '/foreign-policies' ? <Home/> : <HomeOutlined/>}
                                sx={{
                                    backgroundColor: pathname.startsWith('/foreign-policies') ? 'light.accent' : false,
                                    textTransform: 'uppercase',
                                    color: pathname.startsWith('/foreign-policies') ? 'text.primary' : 'text.secondary'
                                }}
                                size="large"
                                variant="text">
                                Foreign Policies
                            </Button>
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
                                    path="/foreign-policy/foreign-policies-objectives"
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
                        <AccordionSummary sx={{marginLeft: -2}} expandIcon={<KeyboardArrowUp/>}>
                            <Button
                                startIcon={pathname === '/about' ? <Info/> : <InfoOutlined/>}
                                sx={{
                                    backgroundColor: pathname.startsWith('/about') ? 'light.accent' : false,
                                    textTransform: 'uppercase',
                                    color: pathname.startsWith('/about') ? 'text.primary' : 'text.secondary'
                                }}
                                size="large"
                                variant="text">
                                About Us
                            </Button>
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

                    <MobileNavLink
                        active={pathname === '/services'}
                        icon={pathname === '/services' ? <MiscellaneousServices/> : <MiscellaneousServicesOutlined/>}
                        path="/services" label="Services"
                    />

                    <MobileNavLink
                        active={pathname === '/contact'}
                        icon={pathname === '/contact' ? <ContactPage/> : <ContactPageOutlined/>}
                        path="/" label="Contact"
                    />
                </Stack>
            </Container>
        </Box>
    )
}

export default DrawerContent;
