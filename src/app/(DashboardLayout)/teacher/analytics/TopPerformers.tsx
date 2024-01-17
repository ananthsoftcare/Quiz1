'use client';
import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";

import { IconArrowUpLeft } from "@tabler/icons-react";


const TopPerformers = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        data: [85, 97, 90, 98]
    }]
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',

            toolbar: {
                show: false
            }
        }, colors: '#20B2AA',
        plotOptions: {
            bar: {
                borderRadius: 10,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: ['Raj', 'Vicki', 'Rahul', 'Ned'],
        }
    }

    return (
        <Card>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Top Performers by Score</Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}

                type="bar" height={200} width={500}

            // type="bar" height={170} width={"100%"}

            />

        </Card>
    )

};

export default TopPerformers;

