'use client';
import { Box, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";



const ReasonProp = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [38.6, 30.8, 22.5, 8.1, 10, 14]
    const optionscolumnchart: any = {
        chart: {
            type: 'donut',
        },
        labels: ['Reacted Quickly', 'It was Complicated', 'Not Prepared', 'Thought I was right', 'Faulty Question', 'Other'],
        legend: {
            position: 'bottom'
        },
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
        }],
        xaxis: {
            categories: ['Session1', 'Session2', 'Session3', 'Session4', 'Session5', 'Session6', 'Session7'],
        }
    }
    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Reasons Proportion</Typography>
            <Box >
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}

                    type="donut" height={320} width={"100%"}

                // type="line" height={275}width={"100%"}

                />
            </Box>
        </Card>
    )

};

export default ReasonProp;

