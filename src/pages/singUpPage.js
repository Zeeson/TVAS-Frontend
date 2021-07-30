import React from "react";

import {
    Container,
    Box,
    Link,
    TextField,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


import { green } from '@material-ui/core/colors';



import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LockOpenIcon from '@material-ui/icons/LockOpen';





const useStyle = makeStyles((them) => ({
    Container: {
        padding: `${them.spacing(4)}px 0px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        maxHeight: 600
    },
    InputFields: {
        marginTop: them.spacing(8),
        marginBottom: them.spacing(8),
        width: "100%",
    },
    InputFieldsText: {
        marginBottom: them.spacing(4),
        maxWidth: 600,
        display: 'block',
        color: `${green[700]} !important`,
        '&:hover': {
            color: green[700],
        },
        '&:active': {
            color: green[700],
            borderColor: green[700],
        }
    },
    CheckboxControler: {
        color: green[700],
    },
    Button: {
        display: 'block',
        color: 'white',
        backgroundColor: green[700],
        '&:hover': {
            backgroundColor: green[900],
        }
    }
}));

export default function SingUp() {
    const classes = useStyle();

    const preventDefault = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box className={classes.Container}>
                <Container maxWidth="md">
                    <Typography variant="h4" style={{ color: green[700] }}>Get started with a free account</Typography>
                    <Typography>
                        Already have an account?{" "}
                        <Link href="#" onClick={preventDefault}>
                            Login
                        </Link>
                    </Typography>
                    <Box className={classes.InputFields}>
                        <TextField
                            label="UserName"
                            variant="outlined"
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AlternateEmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type='password'
                            className={classes.InputFieldsText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOpenIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth={true}
                        />
                        <FormControlLabel
                            control={<Checkbox color={green['A700']} className={classes.CheckboxControler} />}
                            label="I agree to the terms and conditions"
                        />
                        <Button variant='contained' className={classes.Button}>Get Started</Button>
                    </Box>
                    <Typography>
                        © 2021 All Rights Reserved. CORK is a product of Designreset.
                        <Link style={{ color: green[700] }}>Cookie Preferences, Privacy</Link>, and
                        <Link style={{ color: green[700] }}> Terms</Link>.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
