import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Doctor = ({ doctor }) => {
    const { image, name } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <img
                    style={{ width: '200px', height: '200px' }}
                    src={`data:image/png;base64,${image}`} alt=""
                />
                {/* -------------------------------or---------------------------- */}
                {/* <CardMedia
                    component="img"
                    height="300"
                    image={`data:image/png;base64,${image}`}
                    alt="doctor"
                /> */}
                <CardContent>
                    <Typography style={{ fontWeight: '800' }} gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                        <span style={{ color: '#5CE7ED' }}> 📞</span> {phone}
                    </Typography> */}
                </CardContent>
            </Card>

        </Grid >
    );
};

export default Doctor;