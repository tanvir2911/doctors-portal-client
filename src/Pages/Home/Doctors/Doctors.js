import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctorSmall from '../../../images/doctor-small.png'
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        id: 1,
        img: doctorSmall,
        name: 'Dr. Caudi',
        phone: '+61 452 200 128'
    },
    {
        id: 2,
        img: doctorSmall,
        name: 'Dr. Caudi',
        phone: '+61 452 200 128'
    },
    {
        id: 3,
        img: doctorSmall,
        name: 'Dr. Caudi',
        phone: '+61 452 200 128'
    }
]

const Doctors = () => {
    return (
        <Container style={{ marginTop: '10px' }}>
            <Typography variant="h6" style={{ color: '#5CE7ED' }}>
                Our Doctors
            </Typography>
            <Box>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Doctors;