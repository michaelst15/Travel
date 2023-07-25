import React from "react";
import Navbar from "./navbar";
import { Box, Button, Card, Container, List, ListItem, Typography } from "@mui/material";
import { Empty } from "antd";
import { useLocation } from "react-router-dom";
import { Result } from 'antd';
import Page from "./page";

export const InfoPesanan = () => {


  const location = useLocation();

  const data = location?.state;

  console.log('data', data);

    return(
        <>
         <Navbar />
         <Box height={30} />
          <Box sx={{ display: 'flex'  }}>
            <Page />
            {data === null ||  
             data?.length === 0 ? (
              <Container sx={{ marginTop: '320px' }}>
                <Empty />
              </Container>
             ) : (
              <Container sx={{ marginTop: '170px' }}>
              <Result  
              status="403"
              title="Pengembangan"
              subTitle="Maaf, masih dalam pengembangan"
              // extra={<Button type="primary">Back Home</Button>}
            />
            </Container>
            // <Container sx={{ marginTop: '70px' }}>
            //   <Card className="card-pesanan" sx={{ boxShadow: '1px 1px 20px 1px gray', borderRadius: '12px', color: 'white', fontWeight: 'bold' }}>
            //     <Typography className="title-pesanan" sx={{ fontFamily: 'Edu SA Beginner', fontSize: '20px' }}>
            //       Pesanan
            //     </Typography>
            //     <List>
            //       <ListItem sx={{ display: 'grid' }}>
            //         <img src={data?.image[2]} alt="" style={{ width: '400px', borderRadius: '12px', paddingLeft: '180px' }}/>
            //         <Typography sx={{ paddingTop: '30px',  paddingLeft: '80px',  fontFamily: 'Edu SA Beginner' }}> Lokasi: {data?.title} </Typography>
            //         <Typography sx={{ paddingTop: '14px',  paddingLeft: '80px',  fontFamily: 'Edu SA Beginner' }}> Harga: ${data?.sale}</Typography>
            //       </ListItem>
            //       <Typography sx={{ paddingTop: '14px',  paddingLeft: '80px',  fontFamily: 'Edu SA Beginner' }}> Tiket: ${data?.sale}</Typography>
            //       <Button id="button-pesanan">Check</Button>
            //     </List>
            //   </Card>
            // </Container>
              )}
          </Box>
        </>
    )
}