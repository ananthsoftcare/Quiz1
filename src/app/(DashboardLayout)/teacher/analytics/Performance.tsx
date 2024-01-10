'use client';
import { Box, Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";

import { IconArrowUpLeft } from "@tabler/icons-react";


const Performance = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
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
            width: 2,
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
            ],
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }
    return (
        <Card
        >
            <Typography style={{ marginLeft: 15,fontSize:12 }}>Performance of Students</Typography>
            <Box className="rounded-bars">
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="line" height={275}width={"100%"}

                />
            </Box>
        </Card>
    )

};

export default Performance;

