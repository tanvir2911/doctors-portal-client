import React, { useState } from 'react';
import { TextField, Input, Button } from '@mui/material';

const AddDoctor = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://obscure-falls-37171.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor added successfully')
                    console.log('doctor added successfully')
                }
            })
            .catch(error => {
                console.error('Error', error);
            })
    }

    return (
        <div>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    sx={{ width: '50%' }}
                    label="Name"
                    type="text"
                    variant="standard"
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <TextField
                    required
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    variant="standard"
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button
                    variant="contained"
                    type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;