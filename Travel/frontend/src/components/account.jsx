import React from "react";
import { Box, Grid, Card } from "@mui/material";
import Navbar from "./navbar";
import Page from "./page";

export const Profile = () => {
     return (
       <>
         <Navbar />
         <Box sx={{ display: 'flex', margin: 20 }}>
          <Page />
          <Grid xs={12}>
            <Card>
               
            </Card>
          </Grid>
          </Box>
       </>
     )
}