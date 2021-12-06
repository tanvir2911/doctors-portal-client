import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Doctor = ({ doctor }) => {
    const { img, name, phone } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={img}
                    alt="doctor"
                />
                <CardContent>
                    <Typography style={{ fontWeight: '800' }} gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{ color: '#5CE7ED' }}> 📞</span> {phone}
                    </Typography>
                </CardContent>
            </Card>

        </Grid >
    );
};

export default Doctor;