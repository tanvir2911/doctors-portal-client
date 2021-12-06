import { Container, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Feature = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={treatment} alt="" />
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }} item xs={12} md={6}>
                    <Box px={10}>
                        <Typography style={{ color: '#2a3242', fontWeight: '500', fontSize: '40px' }} variant="h4">
                            Exceptional Dental<br /> Care, on Your Terms
                        </Typography>
                        <Typography color="text.secondary" variant="body1" sx={{ my: 5 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio,
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Feature;