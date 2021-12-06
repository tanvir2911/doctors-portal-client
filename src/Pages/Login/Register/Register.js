import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not Match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input2"
                                label="Retype Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <br />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="txt">
                                    Already Registered?Please Login
                                </Button>
                            </NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Created Successfully!!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;