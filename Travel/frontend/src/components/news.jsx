import { Box, Container, Tooltip } from "@mui/material";
import Card from '@mui/material/Card';
import { Empty } from "antd";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import React, { useEffect } from "react";
import Page from "./page";
import Navbar from "./navbar";
import axios from "axios";

export const News = () => {

    const inputRef = React.useRef();

    const [value, setValue] = React.useState(null);
    const [value2, setValue2] = React.useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=1e4d7358c26843d98c618391469576e2')
        .then(response => {
            setValue(response.data);
        })
        .catch(error => {
            setValue(error.message)
        })
    }, [])

    console.log(value, 'value');

    return (
        <>
         <Navbar />
            <Box sx={{ display: 'flex', marginTop: '120px' }}>
                <Page />
                {value?.articles === undefined ? (
                      <Container sx={{ marginTop: '250px' }}>
                        <Empty />
                      </Container>
                ) : (
                    <ImageList sx={{ width: 1200, height: 650, marginTop: 6, marginLeft: -6 }}>
                    <ImageListItem key="Subheader" cols={2}>
                     <ListSubheader className="News" sx={{ color: 'white'}}>News</ListSubheader>
                    </ImageListItem>
                            
                    {value?.articles?.map(item => {
                        return(
                           <> 
                            <ImageListItem key={item.urlToImage}>
                                 <img 
                                  src={`${item.urlToImage}?w=248&fit=crop&auto=format`} 
                                  srcSet={`${item.urlToImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                  alt={item.title}
                                  loading="lazy"
                                 />
                                  <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <a id="infoIcon" href={item.url} target="_blank">
                                          <Tooltip title="Baca Selengkapnya">
                                           <InfoIcon />
                                          </Tooltip>
                                        </a>
                                    </IconButton>
                                    }
                                 />
                            </ImageListItem>
                           </>
                        )
                     })}
                 </ImageList>
                )}
            </Box>
        </>
    )
}