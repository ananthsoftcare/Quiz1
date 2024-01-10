'use client';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Card, Typography } from '@mui/material';



const PeertoPeer = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [44, 55, 13, 43, 22];
    const optionscolumnchart: any = {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    return (
        <Card style={{height:'32%'}}
        >
            <Typography style={{marginLeft:15,fontSize:12}}>Peer to peer participation through queries and answers</Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="pie" width={"100%"} height={150}
            />
        </Card >
    );
};

export default PeertoPeer;

