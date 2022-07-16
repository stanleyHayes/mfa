import React from "react";
import Layout from "../../components/layout/layout";
import {
    Box, Button,
    Card,
    CardContent,
    Container,
    FormControl, FormHelperText,
    Grid,
    InputAdornment,
    InputLabel,
    Link, OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import aicc from "../../assets/images/aicc.jpg";
import {Call, Mail, MailOutline, PersonOutline, Web} from "@mui/icons-material";
import * as yup from "yup";
import contactLogo from "./../../assets/images/contact-us.png";
import {useFormik} from "formik";

const ContactPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm, setSubmitting}) => {

        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object({
            email: yup.string().email('Invalid email').required('email required'),
            name: yup.string().required('name required'),
            message: yup.string().required('Message required'),
        })
    });

    return (
        <Layout>
            <Box sx={{mt: 1.8, position: 'relative', height: '50vh'}}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}>
                    <img
                        alt=""
                        src={aicc}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectPosition: 'center',
                            objectFit: 'cover'
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        padding: 2,
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    }}>
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography
                            mb={2}
                            sx={{color: 'white'}}
                            variant="h3">
                            Contact
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: 'background.default',
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                py: {xs: 4, lg: 0}
            }}>
                <Container>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper', height: '100%'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography
                                            gutterBottom={true}
                                            variant="body1"
                                            sx={{color: 'text.primary', fontWeight: 700}}>
                                            ADDRESS
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Ministry of Foreign Affairs and Regional Integration
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Post Office Box M53,
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Accra – Ghana
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper', height: '100%'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 700}}>
                                            CONTACT
                                        </Typography>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Call/>

                                            <Link href="tel://+233 30 299 9604" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +233 30 299 9604
                                                </Typography>
                                            </Link>
                                            <Typography
                                                gutterBottom={true} variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                /
                                            </Typography>
                                            <Link href="tel://+233 30 2738 473" underline="none">
                                                <Typography
                                                    gutterBottom={true} variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    +233 30 2738 473
                                                </Typography>
                                            </Link>

                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Web/>
                                            <Link
                                                target="_blank"
                                                href="https://https://www.mfa.gov.gh"
                                                underline="none">
                                                <Typography
                                                    gutterBottom={true}
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    https://www.mfa.gov.gh
                                                </Typography>
                                            </Link>
                                        </Stack>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Mail/>
                                            <Link href="mailto://info@mfa.gov.gh" underline="none">
                                                <Typography
                                                    gutterBottom={true}
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    info@mfa.gov.gh
                                                </Typography>
                                            </Link>
                                            <Typography
                                                gutterBottom={true} variant="body2"
                                                sx={{color: 'text.secondary'}}>
                                                /
                                            </Typography>
                                            <Link href="mailto://ipab@mfa.gov.gh" underline="none">
                                                <Typography
                                                    gutterBottom={true}
                                                    variant="body2"
                                                    sx={{color: 'text.secondary'}}>
                                                    ipab@mfa.gov.gh
                                                </Typography>
                                            </Link>

                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Card elevation={0} sx={{backgroundColor: 'background.paper', height: '100%'}}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Typography gutterBottom={true} variant="body1"
                                                    sx={{color: 'text.primary', fontWeight: 700}}>
                                            PHYSICAL ADDRESS
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            No. 5 Agostinho Neto Rd. Liberation Avenue
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            Airport Residential AreaAirport Residential Area, Accra
                                        </Typography>
                                        <Typography gutterBottom={true} variant="body2" sx={{color: 'text.secondary'}}>
                                            GPS Address: GA-057-0036
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{backgroundColor: 'background.default', py: 5}}>
                <Container>
                    <Typography variant="h4" sx={{color: 'text.primary', fontWeight: 'bold', mb: 2}}>
                        Send Us an Email
                    </Typography>
                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6}>
                            <Card variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <form autoComplete="off" onSubmit={formik.handleSubmit}>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Name
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="name">Name</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.name}
                                                        id="name"
                                                        name="name"
                                                        type="text"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <PersonOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.name && formik.errors.name}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter name"
                                                        required={true}
                                                        label="Name"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.name && formik.errors.name && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.name}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Email
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="email">Email</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        value={formik.values.email}
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        endAdornment={
                                                            <InputAdornment
                                                                position="end">
                                                                <MailOutline
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        color: 'secondary.main',
                                                                        padding: 1,
                                                                        fontSize: 24,
                                                                    }}
                                                                />
                                                            </InputAdornment>
                                                        }
                                                        error={formik.touched.email && formik.errors.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter username or email or phone"
                                                        required={true}
                                                        label="Email"
                                                        size="medium"
                                                        margin="dense"
                                                    />
                                                    {formik.touched.email && formik.errors.email && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.email}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Box mb={4}>
                                                <Typography
                                                    mb={1} variant="body2"
                                                    sx={{color: 'secondary.main', fontWeight: 'bold'}}>
                                                    Message
                                                </Typography>
                                                <FormControl fullWidth={true} variant="outlined">
                                                    <InputLabel htmlFor="message">Message</InputLabel>
                                                    <OutlinedInput
                                                        fullWidth={true}
                                                        id="message"
                                                        value={formik.values.message}
                                                        name="message"
                                                        type="text"
                                                        error={formik.touched.message && formik.errors.message}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Enter message"
                                                        required={true}
                                                        label="Message"
                                                        size="medium"
                                                        margin="dense"
                                                        multiline={true}
                                                        minRows={5}
                                                    />
                                                    {formik.touched.password && formik.errors.message && (
                                                        <FormHelperText
                                                            error={true}>
                                                            {formik.errors.message}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Box>

                                            <Button
                                                type="submit"
                                                size="large"
                                                color="secondary"
                                                sx={{
                                                    textTransform: 'capitalize',
                                                    py: 1.2
                                                }}
                                                fullWidth={true}
                                                loadingPosition="start"
                                                variant="contained"
                                                disableElevation={true}>
                                                Send message
                                            </Button>
                                        </form>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6}>
                            <Box
                                sx={{
                                    flex: 1,
                                    maxHeight: '100vh',
                                    backgroundColor: 'background.default'
                                }}>
                                <Stack sx={{height: '100%'}} justifyContent="center" alignItems="center">
                                    <img
                                        style={{
                                            maxHeight: '100vh',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                        alt=""
                                        src={contactLogo}
                                    />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Layout>
    )
}

export default ContactPage;
