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
            type: 'donut',
        },
        legend: {
            position: 'top'
        },
        labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 300
                },

                dataLabels: {
                    enabled: false
                },
            },

        }],

    }
    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding:'10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Average correct answer by question difficulty level</Typography>

            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut" height={300} width={330}
            // type="donut" width={"100%"} height={500}
            />
        </Card >
    );
};

export default Avgcorrectans;

