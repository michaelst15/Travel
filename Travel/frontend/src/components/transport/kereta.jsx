import React from "react";
import Navbar from "../navbar";
import MenuItem from '@mui/material/MenuItem';
import { DatePicker, Space } from 'antd'
import { Grid, TextField } from '@material-ui/core';
import { Box, Button, Card } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BsFillPeopleFill } from 'react-icons/bs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MdAirlineSeatReclineExtra } from 'react-icons/md';
import { HiPaperAirplane } from 'react-icons/hi2';
import { TbTrain } from 'react-icons/tb';
import LogoTrain from '../image/Train.jpg';
import LogoTrain2 from '../image/Train2.jpg';
import Page from "../page";

export const Kereta = () => {

    const currencies = [
        {
          value: 'JKT',
          label: 'Jakarta',
        },
        {
          value: 'mdn',
          label: 'Medan',
        },
        {
          value: 'sl',
          label: 'Solo',
        },
        {
          value: 'md',
          label: 'Manado',
        },
      ];

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

      const [value, setValue] = React.useState(null);
      const [value2, setValue2] = React.useState(null);

    return (
        <>
        
        <Navbar />
         <Box height={30} />
           <Box sx={{ display: 'flex' }}>
               <Page />
               <div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
                    <Card id="CardPromo" sx={{ width: 1250, height: '400px', marginLeft: '-40px', display: 'flex', borderRadius: '20px' }}>
                       <img src={LogoTrain} alt="" style={{ width: '600px', height: '300px', marginLeft: '20px', marginTop: '25px', borderRadius: '20px'  }} />
                       <img src={LogoTrain2} alt="" style={{ width: '560px', height: '300px', marginLeft: '50px', marginTop: '25px', borderRadius: '20px'  }} />
                    </Card>
                    <Card id="formKeberangkatan">
                        <form>
                            <Grid container spacing={5} style={{ marginLeft: '80px', marginTop: '30px' }}>
                               <Grid xs={12} sm={5} item>
                                  <TextField
                                    id="standard-select-currency"
                                    select
                                    InputProps={{
                                      endAdornment: (
                                        <TbTrain className='logoKereta' />
                                      ),
                                    }}
                                    style={{ width: '200px' }}
                                    label="Dari"
                                    defaultValue="EUR"
                                    variant="standard"
                                    >
                                    {/* {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
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
                                    InputProps={{
                                      endAdornment: (
                                        <TbTrain className='logoKereta' />
                                      ),
                                    }}
                                    style={{ width: '200px' }}
                                    label="Menuju"
                                    defaultValue="EUR"
                                    variant="standard"
                                    >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                  </TextField>
                               </Grid>
                               <Grid xs={12} sm={5} item>
                                 <Space direction="vertical">
                                  <DatePicker  placeholder="Jadwal Berangkat" style={{ height: '50px', width: '200px' }}/>
                                 </Space>
                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                    sx={{ width: '200px' }}
                                    label="Tanggal Berangkat"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />
                                    }
                                    />
                                </LocalizationProvider> */}
                               </Grid>
                                    <Grid xs={1} style={{ marginLeft: '-50px', marginTop: '35px' }}>
                                      <HiPaperAirplane />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <DatePicker placeholder="Jadwal Pulang" style={{ height: '50px', width: '200px' }}/>
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