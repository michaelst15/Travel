import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useAppStore } from '../appStore';
// import TravelIcon from './image/travel.png';
import Tickets from './image/ticket.png';
import DestinationIcon from './image/destination.png';
import TourismIcon from './image/tourism.png';
import InfoPesanan from './image/infoPesanan.png';
import News from './image/global-news.png';
import Chart from './image/Chart.png';
import Setting from './image/settings.png';
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { IoMdTrain } from 'react-icons/io';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const drawerWidth = 240;



const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Page() {

  const { id } = useParams();
  const theme = useTheme();
  const navigation = useNavigate();
  const open = useAppStore(state => state.dopen);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigation('/home')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <img src={TourismIcon} alt="" style={{ width: 30 }} />
                </ListItemIcon>
                <ListItemText primary="Wisata" primaryTypographyProps={{ style: { fontFamily: 'Merriweather' } }} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', fontFamily: 'Merriweather' }} onClick={() => navigation('/wisata')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img src={DestinationIcon} alt="" style={{ width: 30 }} />
                </ListItemIcon>
                <ListItemText primary="Lokasi" primaryTypographyProps={{ style: { fontFamily: 'Merriweather' } }} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', fontFamily: 'Merriweather' }} onClick={() => navigation(`/info-pesanan/${id}`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img src={InfoPesanan} alt="" style={{ width: 30 }} />
                </ListItemIcon>
                <ListItemText primary="Info Pesanan" primaryTypographyProps={{ style: { fontFamily: 'Merriweather' } }} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <Sidebar>
                <Menu>
                    <SubMenu 
                     label="Tiket" 
                     icon={<img src={Tickets} alt="Travel Icon" style={{ width: 24, height: 35, marginLeft: '-30px' }} />} 
                     id='sub-menu' 
                     style={{ paddingLeft: 30, marginTop: '-2px', height: 70, fontFamily: 'Merriweather' }}
                     >
                        <MenuItem style={{ paddingLeft: 80, fontFamily: 'Merriweather' }} icon={<BiSolidPlaneAlt />} onClick={() => navigation('/pesawat')} > Pesawat </MenuItem>
                        <MenuItem style={{ paddingLeft: 80, fontFamily: 'Merriweather' }} icon={<IoMdTrain />} onClick={() => navigation('/kereta')}> Kereta </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigation('/analytics')}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <img src={Chart} alt="" style={{ width: 30 }} />
                </ListItemIcon>
                <ListItemText primary="Populer" primaryTypographyProps={{ style: { fontFamily: 'Merriweather' } }} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigation('/news')}>
                <ListItemButton
                    sx={{
                    marginTop: 1,
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                    >
                     <img src={News} alt="" style={{ width: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="News" primaryTypographyProps={{ style: { fontFamily: 'Merriweather' } }} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography>
      </Box>
    </Box>
  );
}