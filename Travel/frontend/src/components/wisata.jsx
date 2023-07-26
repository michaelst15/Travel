import { Box, Card, TextField } from "@mui/material";
import React, { useState } from "react";
import Page from "./page";
import Navbar from "./navbar";
import 'mapbox-gl/dist/mapbox-gl.css';
import GoogleMapReact from 'google-map-react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

export const Wisata = () => {
  const [searchValue, setSearchValue] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: -0.789275,
    lng: 113.921326
  });

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelectPlace = async (address) => {
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setMapCenter({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const defaultProps = {
    center: mapCenter,
    zoom: 5
  };

  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', marginTop: 16 }}>
        <Page />
        <Card className="Map">
          <div style={{ marginBottom: 10 }}>
            <TextField
              label="Search location"
              value={searchValue}
              onChange={handleSearchChange}
              fullWidth
              variant="outlined"
              size="small"
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSelectPlace(searchValue);
                }
              }}
            />
          </div>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: "AIzaSyBOSBY45V_u8dSFrDC9PE3wsO4Ool1tf-s" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
          </GoogleMapReact>
        </Card>
      </Box>
    </>
  )
}

// import { Box, Card } from "@mui/material";
// import React, { Component } from "react";
// import Page from "./page";
// import Navbar from "./navbar";
// import 'mapbox-gl/dist/mapbox-gl.css';
// import GoogleMapReact from 'google-map-react';

// export const  Wisata = () => {

//   const defaultProps = {
//         center: {
//           lat: -0.789275,
//           lng: 113.921326
//         },
//         zoom: 5
//       };
      

//   return (
//     <>
//       <Navbar />
//       <Box sx={{ display: 'flex', marginTop: 16 }}>
//         <Page />
//         <Card className="Map">
//             <GoogleMapReact
//               bootstrapURLKeys={{ key: "" }}
//               defaultCenter={defaultProps.center}
//               defaultZoom={defaultProps.zoom}
//             >
//             </GoogleMapReact>
//          </Card>
//        </Box>
//     </>
//   )
//   }
