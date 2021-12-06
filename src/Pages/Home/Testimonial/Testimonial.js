import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import testimonial from '../../../images/testimonial.png'
import Reviews from '../Reviews/Reviews';

const testimonialBG = {
    background: `url(${testimonial})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'sticky',
    backgroundPosition: 'right',
    backgroundSize: 'contain',
    position: 'relative'
}

const Testimonial = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box style={{ ...testimonialBG, textAlign: 'left' }}>
                <Typography style={{ color: '#5CE7ED' }} variant="h6">
                    TESTIMONIAL
                </Typography>
                <Typography style={{ color: '#2a3242', fontWeight: '500', fontSize: '40px' }} variant="h5">
                    What's Our Patients <br />Says
                </Typography>
            </Box>
            <Box>
                <Reviews></Reviews>
            </Box>
        </Container>
    );
};

export default Testimonial;