import React, { lazy } from 'react';
import './App.css';
import Login from './components/login';
import Daftar from './components/daftar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/home';
import { Wisata } from './components/wisata';
import { Analitycs } from './components/analitycs';
import { News } from './components/news';
import { InfoPesanan } from './components/infoPesanan';
import { Ticket } from './components/tickets';
import { Pesawat } from './components/transport/pesawat';
import { Kereta } from './components/transport/kereta';
import { Profile } from './components/account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Login />} />
            <Route  path='/profile' element={<Profile />} />
            <Route path='/Daftar' element={ <Daftar />} />
            <Route path='/home' element={ <Home />} />
            <Route path='/wisata' element={<Wisata />} />
            <Route path='/info-pesanan/:id' element={<InfoPesanan />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/pesawat' element={<Pesawat />} />
            <Route path='/kereta' element={ <Kereta />} />
            <Route path='/analytics' element={ <Analitycs />} />
            <Route path='/news' element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
