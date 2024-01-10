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
            height: 350,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
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
        <DashboardCard title="Top Performers by Score"
            middlecontent={
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar" height={170} width={"100%"}

                />
            }>
        </DashboardCard >
    )

};

export default TopPerformers;

