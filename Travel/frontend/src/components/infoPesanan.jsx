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
              )}
          </Box>
        </>
    )
}