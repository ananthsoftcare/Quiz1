'use client';
import { Box, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";



const Performance = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        name: "Sessions",
        data: [45, 52, 38, 54, 83, 96, 81]
    },
        // {
        //     name: "Session 2",
        //     data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        // },
        // {
        //     name: 'Total Visits',
        //     data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        // }
    ]
    const optionscolumnchart: any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6', 'Quiz 7'],
        },

        grid: {
            borderColor: '#f1f1f1',
        }
    }
    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: '10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Performance of Students</Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}

                type="line" height={230} width={"100%"}

            // type="line" height={275}width={"100%"}

            />

        </Card>
    )

};

export default Performance;

