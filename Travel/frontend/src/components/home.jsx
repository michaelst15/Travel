import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, ImageList, ImageListItem } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { AiOutlineClose } from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Page from "./page";
import Navbar from "./navbar";
import PlaneTicket from './image/plane-ticket.png';
import TrainTicket from './image/train-ticket.png';
import Rating from '@mui/material/Rating';
import PlaneModal from "./image/PlaneModal.png";
import TrainModal from "./image/TrainModal.png";
import dataWisata from "../Data-Wisata/wisata";
import { Tooltip } from "@material-ui/core";
import { useTheme } from '@mui/material/styles';
import { Carousel } from 'antd';

export const Home = () => {


  console.log(dataWisata, 'wisata');


    const navigation = useNavigate();

    let { id } = useParams();

    const theme = useTheme();

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    })

    const [ getValue, setGetValue ] = useState(dataWisata)

    const [value, setValue] = useState(4);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }

    // const handleOpen1 = () => {
    //     // Navigasi ke halaman tujuan dengan mengirimkan data sesuai dengan id
       
    // }



    return (
        <>
        <Navbar />
         {/* <Box height={30} /> */}
          <Box sx={{ display: 'flex' ,marginTop: 14  }}>
            <Page />
            <Grid display={'block'} spacing={12}>
            {getValue?.map((x, i) => {
                return (
                  <Grid item={x?.id} xs={12} sm={6} md={4}>
                  <Card id="card-wisata" key={x?.id}>
                    <div style={{ width: 300 }}>
                      <Carousel autoplay style={{ height: 250 }}>
                        {x?.image?.map((imageList, index) => {
                          return (
                                <div>
                                   <img src={imageList} alt="" className="img" />
                                </div>
                                )   
                          })} 
                       </Carousel>
                      </div>
                       <CardContent sx={{ marginRight: '-190px' }}>
                         <Typography id="title-wisata" gutterBottom variant="h5" component="div">
                           {x?.title}
                         </Typography>
                         <Grid xs={12} display={"flex"}>
                            <Grid item xs={6} sm={4} sx={{ paddingRight: '20px' }}>
                              <Tooltip title="Tiket Pesawat Tersedia">
                                  <img src={PlaneTicket} alt="" style={{ height: '20px', width: '20px' }} />
                              </Tooltip>
                           </Grid>
                           <Grid item xs={6} sm={4}>
                              <Tooltip title="Tiket Kereta Tersedia" style={{ color: 'white', backgroundColor: 'brown' }}>
                                  <img src={TrainTicket} alt="" style={{ height: '20px', width: '20px' }} />
                              </Tooltip>
                           </Grid>
                         </Grid>
                         <Typography id="deskripsi-wisata" variant="body2" color="text.secondary">
                           {x?.description}
                         </Typography>
                       </CardContent>
                       <Box id="Card-Action">
                         <Typography sx={{ marginTop: '70px', marginLeft: '-162px', marginBottom: '-20px' }}>${x?.sale}</Typography>
                         <Rating
                          value={value}
                          sx={{ marginLeft: '-200px'}}
                          readOnly
                         />
                         <Button onClick={handleOpen} id="btn-booking">Booking</Button>
                           <Modal
                             hideBackdrop
                             className="modal-booking"
                             open={open}
                             onClose={handleClose}
                             aria-labelledby="child-modal-title"
                             aria-describedby="child-modal-description"
                           >
                             <Box className="pop-booking">
                              <div style={{ display: 'flex' }}>
                              <h2 style={{ marginLeft: '60px', fontFamily: 'cursive' }}>Pilih Transport Anda</h2>
                              <Tooltip title="close">
                                <Button id="close" sx={{ marginLeft: '30px'}} onClick={() => handleClose()}>  <AiOutlineClose />  </Button>
                              </Tooltip>
                              </div>
                              <div style={{ display: 'flex', marginTop: '13px' }}>
                               <img src={PlaneModal} alt="" style={{ width: '30px',  marginLeft: '54px' }} />
                              <Button id="btn-via-pesawat" sx={{ marginLeft: '31px', marginTop: '10px' }} 
                                onClick={() =>  navigation(`/pesawat`, { state: x }) }
                                >Via Pesawat
                              </Button>
                              </div>
                              <br />
                              <div style={{ display: 'flex' }}>
                               <img src={TrainModal} alt="" style={{ width: '30px', marginLeft: '65px' }} /> 
                              <Button id="btn-via-kereta" sx={{ marginLeft: '23px', marginTop: '5px' }} onClick={() => navigation(`/kereta`, { state: x })}>Via Kereta</Button>
                              </div>
                             </Box>
                           </Modal>
                       </Box> 
                    </Card>
                    </Grid>
                    )   
                 })}
               </Grid>
          </Box>
        </>
    )
}