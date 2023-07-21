import React from "react";
import Page from "./page";
import Navbar from "./navbar";
import { Box } from "@mui/material";

export const Ticket = () => {
    return (
        <>
        <Navbar />
         <Box height={30} />
           <Box sx={{ display: 'flex' }}>
               <Page />
               <h1>Ticket</h1>
           </Box>
       </>
    )
}