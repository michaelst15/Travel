import { Box, Card } from "@mui/material";
import React, { Component } from "react";
import Page from "./page";
import Navbar from "./navbar";
import 'mapbox-gl/dist/mapbox-gl.css';
import GoogleMapReact from 'google-map-react';

export const  Wisata = () => {

  const defaultProps = {
        center: {
          lat: -0.789275,
          lng: 113.921326
        },
        zoom: 5
      };
      

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Page />
        <Card className="Map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
         </Card>
       </Box>
    </>
  )
  }
