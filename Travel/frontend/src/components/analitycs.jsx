import React, { PureComponent } from "react";
import { Box } from "@mui/material";
import {
  Radar, 
  PolarAngleAxis,
  PolarRadiusAxis,
  RadarChart, 
  PolarGrid,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Page from "./page";
import Navbar from "./navbar";

export const Analitycs = () => {

const data = [
  {
    name: 'Sumatera Utara',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Jawa Barat',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Jawa Tengah',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Kalimantan',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Sulawesi',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Manado',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const data2 = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

    return (
        <>
         <Navbar />
          <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <Page />
                 <div style={{ width: '100%', height: 300, marginTop: '150px', marginLeft: '-250px',display: 'flex' }}>

                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <Tooltip />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Index" dataKey="pv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Sub Index" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    </RadarChart>
                 </ResponsiveContainer>

                    <ResponsiveContainer className="compose-chart">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                   </ResponsiveContainer>
                </div>
            </Box>
        </>
    )
}