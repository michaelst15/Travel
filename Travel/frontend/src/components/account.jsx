import React from "react";
import { Box, Grid, Card, Typography } from "@mui/material";
import userProfile from './image/userProfile.jpg';
import Navbar from "./navbar";
import Page from "./page";
import axios from "axios";

export const Profile = () => {

     return (
       <>
         <Navbar />
         <Box sx={{ display: 'flex', margin: 20 }}>
          <Page />
          <Grid container xs={12}>
            <Grid xs={1} sx={{ marginTop: '155px' }}>
            <img src={userProfile} alt="" style={{ width: '100px', borderRadius: 30 }} />
            <Typography sx={{ paddingTop: 1, paddingLeft: 4, fontFamily: 'Edu SA Beginner, cursive' }}>User</Typography>
            </Grid>
            <Grid xs={6}>
            <Card style={{ width: 400, marginLeft: 300, marginTop: 150, boxShadow: '1px 1px 10px 1px gray' }}>
               <Typography sx={{ paddingBottom: '20px', paddingLeft: '100px', paddingTop: '20px', fontFamily: 'Edu SA Beginner, cursive' }}>Nama {" "}: {" "} Michael Suparlan</Typography>
               <Typography sx={{ paddingBottom: '20px', paddingLeft: '100px', fontFamily: 'Edu SA Beginner, cursive' }}>Email {" "}: {" "} mike@gmail.com</Typography>
               <Typography sx={{ paddingLeft: '100px', paddingBottom: '20px', fontFamily: 'Edu SA Beginner, cursive' }}>Password {" "}: {" "} mike123</Typography>
            </Card>
            </Grid>
          </Grid>
          </Box>
       </>
     )
}