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
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }


    return (
        <Card style={{ height: '80%' }}
        >
            <Typography style={{ fontSize: 11, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Average correct answer by question difficulty level</Typography>
            <br /><br />
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="pie" height={350} width={350}
            // type="donut" width={"100%"} height={500}
            />
        </Card >
    );
};

export default Avgcorrectans;

