import React from "react";
import {Button, Container, Grid, Link as MUILink, Menu, MenuItem, Stack, Toolbar, Tooltip} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp, OpenInNew} from "@mui/icons-material";
import NavLink from "../../shared/nav-link";
import {useLocation} from "react-router";
import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "./../../../assets/images/logo.png";

const DesktopNavBar = () => {

    const {pathname} = useLocation();

    const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
    const [foreignPoliciesMenuOpen, setForeignPoliciesMenuOpen] = useState(false);

    const [foreignPoliciesAnchorEl, setForeignPoliciesAnchorEl] = useState(null);
    const [aboutAnchorEl, setAboutAnchorEl] = useState(null);

    const handleAboutOpen = event => {
        setAboutMenuOpen(true);
        setAboutAnchorEl(event.currentTarget);
    }

    const handleForeignPoliciesOpen = event => {
        setForeignPoliciesMenuOpen(true);
        setForeignPoliciesAnchorEl(event.currentTarget);
    }

    const handleAboutClose = () => {
        setAboutMenuOpen(false);
        setAboutAnchorEl(null);
    }

    const handleForeignPoliciesClose = () => {
        setForeignPoliciesMenuOpen(false);
        setForeignPoliciesAnchorEl(null);
    }


    return (
        <Toolbar variant="regular" sx={{backgroundColor: 'colors.toolbar'}}>
            <Container maxWidth="xl">
                <Grid container={true} justifyContent="space-between" alignItems="center">
                    <Grid item={true}>
                        <img
                            src={logo}
                            alt="Ministry of foreign affairs logo"
                            style={{height: 70, objectFit: 'cover', objectPosition: 'center'}}
                        />
                    </Grid>
                    <Grid item={true}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <NavLink label="Home" active={pathname === '/'} path="/"/>
                            <Button
                                endIcon={foreignPoliciesMenuOpen ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                                onClick={handleForeignPoliciesOpen}
                                sx={{
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                    backgroundColor: pathname.startsWith('/foreign-policies') ? 'light.accent' : false,
                                    textTransform: 'uppercase',
                                    color: pathname.startsWith('/foreign-policies') ? 'text.primary' : 'text.secondary'
                                }}
                                size="small"
                                variant="text">
                                Foreign Policies
                            </Button>

                            <Button
                                endIcon={aboutMenuOpen ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
                                onClick={handleAboutOpen}
                                sx={{
                                    borderTopRightRadius: 32,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 0,
                                    borderTopLeftRadius: 32,
                                    backgroundColor: pathname.startsWith('/about') ? 'light.accent' : false,
                                    textTransform: 'uppercase',
                                    color: pathname.startsWith('/about') ? 'text.primary' : 'text.secondary'
                                }}
                                size="small"
                                variant="text">
                                About Us
                            </Button>
                            <NavLink label="Services" active={pathname === '/services'} path="/services"/>
                            <NavLink label="Contact" active={pathname === '/contact'} path="/contact"/>
                        </Stack>

                        <Menu
                            onClose={handleAboutClose}
                            variant="menu"
                            elevation={1}
                            open={aboutMenuOpen}
                            anchorEl={aboutAnchorEl}>
                            <MenuItem>
                                <Link style={{textDecoration: 'none', width: '100%'}} to="/about">
                                    <NavLink
                                        label="Overview"
                                        active={pathname === '/about'}
                                        path="/about"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link style={{textDecoration: 'none', width: '100%'}}
                                      to="/about/honorable-ministers-profile">
                                    <NavLink
                                        label="Honorable Minister's Profile"
                                        active={pathname === '/about/honorable-ministers-profile'}
                                        path="/about/honorable-ministers-profile"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link style={{textDecoration: 'none', width: '100%'}}
                                      to="/foreign-policy/foreign-policy-objectives">
                                    <NavLink
                                        label="Hon. Kwaku Ampratwum Sarpong's"
                                        active={pathname === '/about/kwaku-ampratwum-sarpong-profile'}
                                        path="/about/kwaku-ampratwum-sarpong-profile"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    style={{textDecoration: 'none', width: '100%'}}
                                    to="/about/growth-and-development-agenda">
                                    <NavLink
                                        label="Hon. Thomas Mbomba's Profile"
                                        active={pathname === '/about/thomas-mbomba-profile'}
                                        path="/about/thomas-mbomba-profile"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    style={{textDecoration: 'none', width: '100%'}}
                                    to="/about/the-chief-directors-profile">
                                    <NavLink
                                        label="The Chief Director's Profile"
                                        active={pathname === '/about/the-chief-directors-profile'}
                                        path="/about/the-chief-directors-profile"
                                    />
                                </Link>
                            </MenuItem>
                        </Menu>

                        <Menu
                            onClose={handleForeignPoliciesClose}
                            variant="menu"
                            elevation={1}
                            open={foreignPoliciesMenuOpen}
                            anchorEl={foreignPoliciesAnchorEl}>
                            <MenuItem>
                                <Link style={{textDecoration: 'none', width: '100%'}}
                                      to="foreign-policies/ghana-foreign-policy">
                                    <NavLink
                                        label="Foreign Policies"
                                        active={pathname === '/foreign-policies'}
                                        path="/foreign-policies"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link style={{textDecoration: 'none', width: '100%'}}
                                      to="/foreign-policies/ghana-foreign-policy-guideline">
                                    <NavLink
                                        label="Ghana's Foreign Policy Guideline"
                                        active={pathname === '/foreign-policies/ghana-foreign-policy-guideline'}
                                        path="/foreign-policies/ghana-foreign-policy-guideline"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    style={{textDecoration: 'none', width: '100%'}}
                                    to="/foreign-policies/foreign-policy-objectives">
                                    <NavLink
                                        label="Foreign Policy Objectives"
                                        active={pathname === '/foreign-policies/foreign-policy-objectives'}
                                        path="/foreign-policy/foreign-policies-objectives"
                                    />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    style={{textDecoration: 'none', width: '100%'}}
                                    to="/foreign-policies/growth-and-development-agenda">
                                    <NavLink
                                        label="Growth & Development Agenda"
                                        active={pathname === '/foreign-policies/growth-and-development-agenda'}
                                        path="/foreign-policies/growth-and-development-agenda"
                                    />
                                </Link>
                            </MenuItem>
                        </Menu>

                    </Grid>
                    <Grid item={true}>
                        <Tooltip title="Apply for your passport online">
                            <MUILink target="_blank" underline="none" href="https://passport.mfa.gov.gh/">
                                <Button
                                    endIcon={<OpenInNew/>}
                                    sx={{
                                        borderTopRightRadius: 32,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 32,
                                        borderTopLeftRadius: 32,
                                        backgroundColor: 'colors.action',
                                        textTransform: 'capitalize'
                                    }}
                                    disableElevation={true}
                                    size="small">
                                    Online Passport Application
                                </Button>
                            </MUILink>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Container>
        </Toolbar>
    )
}

export default DesktopNavBar;
