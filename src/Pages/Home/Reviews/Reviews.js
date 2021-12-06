import { Grid } from '@mui/material';
import React from 'react';

import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import Review from '../Review/Review';

const reviews = [
    {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
        name: 'Winson Herry',
        address: 'California',
        img: people1,
    },
    {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
        name: 'Winson Herry',
        address: 'California',
        img: people2,
    },
    {
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text',
        name: 'Winson Herry',
        address: 'California',
        img: people3,
    },
]

const Reviews = () => {
    return (
        <Grid container spacing={2} sx={{ my: 5 }}>
            {
                reviews.map(review => <Review
                    key={review.img}
                    review={review}
                />)
            }
        </Grid>
    );
};

export default Reviews;