import React from "react";
import Navbar from "../navbar";
// import MenuItem from '@mui/material/MenuItem';
import { Grid, TextField } from '@material-ui/core';
import { Box, Button, Card } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, Space } from 'antd'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { HiPaperAirplane } from 'react-icons/hi2';
// import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { LiaPlaneDepartureSolid } from 'react-icons/lia';
import { LiaPlaneArrivalSolid } from 'react-icons/lia';
import LogoPromoPesawat from '../image/pesawat_logo.jpg';
import LogoPromoPesawat2 from '../image/pesawat_logo2.png'
import Page from "../page";
  
export const Pesawat = () => {



    // const currencies = [
    //     {
    //       value: 'JKT',
    //       label: 'Jakarta',
    //     },
    //     {
    //       value: 'mdn',
    //       label: 'Medan',
    //     },
    //     {
    //       value: 'sl',
    //       label: 'Solo',
    //     },
    //     {
    //       value: 'md',
    //       label: 'Manado',
    //     },
    //   ];

      // const classPenumpang = [
      //   {
      //       label: 'Economy'
      //   },
      //   {
      //       label: 'Premium'
      //   },
      //   {
      //       label: 'Business'
      //   },
      //   {
      //       label: 'First Class'
      //   }
      // ]

      const inputRef = React.useRef();

      const [value, setValue] = React.useState(null);
      const [value2, setValue2] = React.useState(null);

    return (
        <>
        <Navbar />
         <Box height={30} />
           <Box sx={{ display: 'flex' }}>
               <Page />
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    {/* <Card sx={{ width: '600px', paddingLeft: '500px' }}>d</Card> */}
                    <Card id="CardPromo" sx={{ width: 1250, height: '400px', marginLeft: '-40px', display: 'flex', borderRadius: '20px' }}>
                       <img src={LogoPromoPesawat} alt="" style={{ width: '600px', height: '300px', marginLeft: '20px', marginTop: '25px', borderRadius: '20px'  }} />
                       <img src={LogoPromoPesawat2} alt="" style={{ width: '560px', height: '300px', marginLeft: '50px', marginTop: '25px', borderRadius: '20px'  }} />
                    </Card>
                    <Card id="formKeberangkatan">
                        <form>
                            <Grid container spacing={5} style={{ marginLeft: '80px', marginTop: '30px' }}>
                               <Grid xs={12} sm={5} item>
                                  <TextField
                                    id="standard-select-currency"
                                    select
                                    style={{ width: '200px' }}
                                    InputProps={{
                                      endAdornment: (
                                        <LiaPlaneDepartureSolid className='logoPesawat' />
                                      ),
                                    }}
                                    label="Dari"
                                    defaultValue="EUR"
                                    variant="standard"
                                    >
                                    {/* {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value} va>
                                         {option.label}
                                        </MenuItem>
                                    ))} */}
                                  </TextField>
                               </Grid>
                               <Grid xs={1} style={{ marginLeft: '-50px', marginTop: '35px' }}>
                                 <HiPaperAirplane />
                               </Grid>
                               <Grid xs={12} sm={6} item>
                               <TextField
                                    id="standard-select-currency"
                                    select
                                    style={{ width: '200px' }}
                                    InputProps={{
                                      endAdornment: (
                                        <LiaPlaneArrivalSolid className='logoPesawat' />
                                      ),
                                    }}
                                    label="Menuju"
                                    defaultValue="EUR"
                                    variant="standard"
                                    >
                                    {/* {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value} va>
                                         {option.label}
                                        </MenuItem>
                                    ))} */}
                                  </TextField>
                               </Grid>
                               <Grid xs={12} sm={5} item>
                                 <Space direction="vertical">
                                  <DatePicker placeholder="Jadwal Berangkat" style={{ height: '50px', width: '200px' }}/>
                                 </Space>
                               </Grid>
                               <Grid xs={1} style={{ marginLeft: '-50px', marginTop: '35px' }}>
                                 <HiPaperAirplane />
                               </Grid>
                               <Grid xs={12} sm={6} item>
                                  <Space direction="vertical">
                                    <DatePicker placeholder="Jadwal Pulang" style={{ height: '50px', width: '200px' }} />
                                  </Space>
                                </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                          id="outlined-number"
                                          InputProps={{
                                          endAdornment: (
                                            <BsFillPeopleFill style={{ marginLeft: '-195px' }} />
                                            )
                                           }}
                                          style={{ marginLeft: '4px', width: '200px' }}
                                          label="Jumlah Penumpang"
                                          type="number"
                                          InputLabelProps={{
                                            shrink: true,
                                          }}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            InputProps={{
                                              endAdornment: (
                                                <MdAirlineSeatReclineExtra className="logoClass" />
                                              )
                                            }}
                                            style={{ width: '200px', marginLeft: '-46px'}}
                                            label="Class"
                                            defaultValue="EUR"
                                            variant="standard"
                                            >
                                            {/* {classPenumpang.map((option) => (
                                                <MenuItem key={option.label} value={option.label}>
                                                {option.label}
                                                </MenuItem>
                                            ))} */}
                                        </TextField>
                                     </Grid>
                                     <Grid xs={12} sm={6} style={{ marginLeft: '356px', marginTop: '15px'}}>
                                       <Button id="button-form-pesawat">Check</Button>
                                    </Grid>
                            </Grid>
                        </form>
                    </Card>
                </div>
           </Box>
       </>
    )
}