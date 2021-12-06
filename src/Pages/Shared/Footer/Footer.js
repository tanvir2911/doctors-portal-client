import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import footer from '../../../images/footer-bg.png';

const footerBg = {
    background: `url(${footer})`,

}


const Footer = () => {
    return (
        <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
            <Container style={footerBg}>
                <Grid container spacing={2}>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <br />
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Emergency Dental Care</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Treatment of Personal Disease</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Tooth Extraction</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: '#5CE7ED', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Services</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Emergency Dental Care</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Treatment of Personal Disease</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Tooth Extraction</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: '#5CE7ED', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Oral Health</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Emergency Dental Care</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Treatment of Personal Disease</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Tooth Extraction</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">Check Up</Link>
                        </Box>
                    </Grid>
                    <Grid textAlign="left" item xs={12} sm={6} md={3}>
                        <Box >
                            <Link style={{ color: '#5CE7ED', fontWeight: "900" }} underline="none" color="text.secondary" href="/">Our Address</Link>
                        </Box>
                        <Box >
                            <Link underline="hover" color="text.secondary" href="/">New York - 101010 Hudson Yards</Link>
                        </Box>
                        <br />
                        <br />
                        <Box >
                            <Link>
                                <FacebookRoundedIcon style={{ color: '#5CE7ED', fontWeight: "900", fontSize: "30px", marginRight: "10px" }} />
                            </Link>
                            <Link>
                                <GoogleIcon style={{ color: '#5CE7ED', fontWeight: "900", fontSize: "30px", marginRight: "10px" }} />
                            </Link>
                            <Link>
                                <TwitterIcon style={{ color: '#5CE7ED', fontWeight: "900", fontSize: "30px", marginRight: "10px" }} />
                            </Link>
                        </Box>
                        <br />
                        <br />
                        <Box>
                            <Typography color="text.secondary" >Call Now</Typography>
                        </Box>
                        <Box>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>+2025550295</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                    <Typography color="text.secondary">
                        Copyright || Doctors Portal &reg; {new Date().getFullYear()} All Rights Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;














































// import { Container, Grid, Link } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';

// const Footer = () => {
//     return (
//         <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} sx={{
//             backgroundColor: 'gray', color: 'white',
//         }}>
//             <Container maxWidth="lg">
//                 <Grid container spacing={5}>
//                     <Grid item xs={12} sm={4}>
//                         <Box borderBottom={1}>Help</Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Contact
//                             </Link>
//                         </Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Support
//                             </Link>
//                         </Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Privacy
//                             </Link>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} sm={4}>
//                         <Box borderBottom={1}>Account</Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Login
//                             </Link>
//                         </Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Register
//                             </Link>
//                         </Box>
//                     </Grid>
//                     <Grid item xs={12} sm={4}>
//                         <Box borderBottom={1}>Messages</Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Backup
//                             </Link>
//                         </Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 History
//                             </Link>
//                         </Box>
//                         <Box>
//                             <Link href="/" underline="hover" color="inherit">
//                                 Roll
//                             </Link>
//                         </Box>
//                     </Grid>
//                 </Grid>
//                 <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
//                     Footer &reg; {new Date().getFullYear()}
//                 </Box>
//             </Container>
//         </Box >
//     );
// };

// export default Footer;