import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import bgImage from './image/bg-image.jpg';
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import logoTraveling from '../components/image/logoTraveling.png';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login () {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true
  });

    const navigate = useNavigate();
    const [validation, setValidation] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (event) => {
      let login = {email, password};
    

    axios.post('http://localhost:5000/login', login)
    .then(res => {
         
         console.log(res.data)
         Cookies.set('token', res.data.token)
         if(!res.data.error){
          localStorage.setItem('user', JSON.stringify(res.data))
          navigate('/home')
         }
         else {
          Cookies.remove('token')
         }
    })
    .catch(error => {
      console.log(error.message);
    })
  }

    return (
        <>
          <div style={{ display: "flex" }}>
           <img src={bgImage} style={{ width: '100%', height: '645px', zIndex: '-1', position: 'absolute' }} />
            <form className="form" action="/login" method="post" 
              style={{
                 marginLeft: isDesktop ? '440px' : '100px', 
                 width: isDesktop ? '450px' : '200px',
                 height: isDesktop  ? '400px' : '300px'
                }}
            >
              <Grid xs={12}>
              {/* <Typography sx={{ mt: 5, mr: 42, fontWeight: 'bold', fontFamily: 'inherit' }}>Login</Typography> */}
              {/* <img src={logoTraveling} alt="" style={{ width: 80, height: 80, marginLeft: 182, marginTop: 5, marginBottom: 5 }} /> */}
              <Grid><PersonOutlineTwoToneIcon sx={{ width: 80, height: 100, ml: 22 }} /></Grid>
              <Grid><TextField
                sx={{ mt: 1, ml: 9, width: 300 }}
                label="Email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputLabelProps={{ 
                  style: { color: 'white' }
                 }}
                 InputProps={{
                  style: { borderRadius: 10, color: 'white' }
                 }}
              /></Grid>
              <TextField
                sx={{ mt: 6, ml: 9, width: 300 }}
                label="Password"
                id="password"
                name="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                InputLabelProps={{ 
                  style: { color: 'white' }
                 }}
                 InputProps={{
                  style: { borderRadius: 10, color: 'white' }
                 }}
              />
              <Grid sx={{ display: 'flex' }}> 
              <Button id="login" onClick={handleSubmit}
               sx={{ 
                mt: 7, 
                ml: 10, 
                width: 120, 
                borderRadius: 15 ,
                backgroundColor: 'Highlight', 
                color: 'white' 
                }}>Login</Button>
              <Button id="daftar" onClick={() => navigate('/Daftar')}
               sx={{ 
                mt: 7, 
                ml: 6, 
                width: 120, 
                borderRadius: 15 ,
                backgroundColor: 'Highlight', 
                color: 'white' 
                }}>Daftar</Button>
                 {validation.error === 1 ? (<p className='mt-1 mb-1 mx-4'>{validation.message}</p>) : ''}
              </Grid>
              </Grid>
            </form>
          </div>
        </>
    )
}
