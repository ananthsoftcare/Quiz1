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
        name: "Lowest",
        data: [45, 52, 38, 24, 33, 26, 21, 20,80,70]
    },
    {
        name: "Average",
        data: [35, 41, 62, 42, 13, 18, 29, 37,90,45]
    },
    {
        name: 'Highest',
        data: [87, 57, 74, 99, 75, 38, 62, 47,65,34]
    }
    ]
    const optionscolumnchart: any = {
        chart: {
            
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
            categories: ['Day 0', 'Day 10', 'Day 20', 'Day 30', 'Day 40', 'Day 50', 'Day 60', 'Day 70', 'Day 80','Day 90'],
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    }
    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding:'10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Performance of Students</Typography>
            <Box >
                <Chart 
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    
                    type="line" height={310} width={400}

                // type="line" height={275}width={"100%"}

                />
            </Box>
        </Card>
    )

};

export default Performance;

