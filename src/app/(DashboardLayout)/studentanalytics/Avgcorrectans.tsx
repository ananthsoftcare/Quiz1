'use client';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Card, Typography } from '@mui/material';



const Avgcorrectans = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [44, 55, 13, 43, 22];
    const optionscolumnchart: any = {
        chart: {
            type: 'pie',
        },
        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
        legend: {
            position: 'right'
        },
       
    }


    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: '10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Average correct answer by question difficulty level</Typography>

            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="pie" height={410} width={450}
            // type="donut" width={"100%"} height={500}
            />
        </Card >
    );
};

export default Avgcorrectans;

