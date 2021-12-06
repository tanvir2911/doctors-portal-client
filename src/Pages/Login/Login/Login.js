import { Container, Grid, TextField, Button, Alert, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png';
import Typography from '@mui/material/Typography';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, user, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {
                        !isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard"
                            />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-password-input"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <br />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                to="/register"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="txt">
                                    New User? Please Register
                                </Button>
                            </NavLink>
                        </form>
                    }
                    <p>--------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>

                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">User Logged In Successfully!!</Alert>
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

export default Login;