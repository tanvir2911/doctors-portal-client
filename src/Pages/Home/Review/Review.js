import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Review = ({ review }) => {
    const { description, name, address, img } = review;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275, p: 2 }}>
                <CardContent>
                    <Typography variant="body1" sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {description}
                    </Typography>

                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box>
                        <img style={{ marginRight: '5px', width: '60%', marginTop: '10px' }} src={img} alt="" />
                    </Box>
                    <Box>
                        <Typography variant="h6" style={{ color: '#5CE7ED' }}>
                            {name}
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: 14, color: 'text.secondary' }}>
                            {address}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;