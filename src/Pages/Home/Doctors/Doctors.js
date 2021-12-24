import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import doctorSmall from '../../../images/doctor-small.png'
import Doctor from '../Doctor/Doctor';


// const doctors = [
//     {
//         id: 1,
//         img: doctorSmall,
//         name: 'Dr. Caudi',
//         phone: '+61 452 200 128'
//     },
//     {
//         id: 2,
//         img: doctorSmall,
//         name: 'Dr. Caudi',
//         phone: '+61 452 200 128'
//     },
//     {
//         id: 3,
//         img: doctorSmall,
//         name: 'Dr. Caudi',
//         phone: '+61 452 200 128'
//     }
// ]

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://obscure-falls-37171.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Container style={{ marginTop: '10px' }}>
            <Typography variant="h6" style={{ color: '#5CE7ED' }}>
                Our Doctors: {doctors.length}
            </Typography>
            <Box>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        />)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Doctors;