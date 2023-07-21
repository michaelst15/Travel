import React from "react";
import axios, { Axios } from 'axios';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import bgImage from './image/bg-image.jpg';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import { Container } from "@mui/material";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useState } from "react";

export const Daftar = () => {

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'), {
      defaultMatches: true
    });

    const navigate = useNavigate();
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      let daftar = { nama, email, password };

      axios.post('http://localhost:5000/register', daftar)
      .then(res => {
        console.log(res.data);
        navigate('/login')
      })
      .catch(err => {
        console.log(err);
      }) 
    }



    return  (
       <>
         <div style={{ display: "flex" }}>
           <img src={bgImage} style={{ width: '100%', height: '645px', zIndex: '-1', position: 'absolute' }} />
            <form className="form" action="/register" method="post"
              style={{
                marginLeft: isDesktop ? '440px' : '100px', 
                width: isDesktop ? '450px' : '200px',
                height: isDesktop  ? '400px' : '300px'
               }}
            >
              {/* <Typography sx={{ mt: 5, mr: 42, fontWeight: 'bold', fontFamily: 'inherit' }}>Login</Typography> */}
              <PersonOutlineTwoToneIcon sx={{ width: 80, height: 100, ml: 22 }} />
              <TextField
                sx={{ mt: 1, ml: 9, width: 300 }}
                label="Nama"
                id="nama"
                name="nama"
                value={nama}
                onChange={e => setNama(e.target.value)}
                InputLabelProps={{ 
                  style: { color: 'white' }
                 }}
                 InputProps={{
                  style: { borderRadius: 10, color: 'white' }
                 }}
              />
              <TextField
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
              />
              <TextField
                sx={{ mt: 1, ml: 9, width: 300 }}
                label="Password"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputLabelProps={{ 
                  style: { color: 'white' }
                 }}
                 InputProps={{
                  style: { borderRadius: 10, color: 'white' }
                 }}
              />
              <Button id="daftar" onClick={handleSubmit}
               sx={{ 
                mt: 5, 
                ml: 19, 
                width: 120, 
                borderRadius: 15 ,
                backgroundColor: 'Highlight', 
                color: 'white' 
                }}>Daftar</Button>
            </form>
          </div>
       </>
    )
}