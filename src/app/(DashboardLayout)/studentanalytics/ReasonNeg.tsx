'use client';
import { Box, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";



const ReasonNeg = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        name: "Reacted Quickly",
        data: [45, 52, 38, 54, 23, 26, 21, 10, 48, 28]
    },
    {
        name: "It was Complicated",
        data: [25, 11, 12, 12, 14, 18, 19, 37, 36, 51]
    },
    {
        name: 'Thought I was right',
        data: [17, 27, 14, 19, 15, 18, 12, 17, 12, 16]
    },
    {
        name: "Faulty Question",
        data: [18, 21, 42, 15, 13, 18, 29, 17, 36, 21]
    },
    {
        name: "Other",
        data: [18, 5, 25, 18, 20, 28, 16, 11, 13, 11]
    },
    ]
    const optionscolumnchart: any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Reacted Quickly', 'It was Complicated', 'Not Prepared', 'Thought I was right', 'Faulty Question', 'Other'],
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Session1', 'Session2', 'Session3', 'Session4', 'Session5', 'Session6', 'Session7', 'Session8', 'Session9', 'Session10'],
        }
    }

    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: '10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Reason for Negative Performance</Typography>
            <Box className="rounded-bars">
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}

                    type="line" height={270} width={"100%"}

                // type="line" height={275}width={"100%"}

                />
            </Box>
        </Card>
    )

};

export default ReasonNeg;

