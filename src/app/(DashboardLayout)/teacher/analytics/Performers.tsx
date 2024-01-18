'use client';
import { Card, CardHeader, Divider, Grid, Typography, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
import LinearProgress from '@mui/material/LinearProgress';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import "./style.css"
import StarBorderIcon from '@mui/icons-material/StarBorder';

// var data: [85, 97, 90, 98, 56, 89, 45, 75, 56, 65, 84, 79, 78, 56]
const Performers = () => {

    return (
        <Card>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Top Performers by Score</Typography>

            <div style={{ height: 90, padding: 15, textAlign: 'center', fontSize: 16 }}>
                Successful Sessions <div className='button'> <StarBorderIcon /></div>
            </div>
        </Card>)

};

export default Performers;

