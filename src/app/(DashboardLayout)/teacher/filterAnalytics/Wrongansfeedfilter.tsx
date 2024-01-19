'use client';
import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";

import { IconArrowUpLeft } from "@tabler/icons-react";


const WrongansfeedFilter = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [2, 5, 1, 4, 8, 2]
    const optionscolumnchart: any = {
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        labels: ['Reacted Quickly', 'It was Complicated', 'Not Prepared', 'Thought I was right', 'Faulty Question', 'Other'],
        dataLabels: {
            enabled: true
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            position: 'top'
        },
        responsive: [{
            breakpoint: 480,
        }]
    }

    return (
        <Card
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)',padding:'10px 0px 15px 10px',  borderRadius: '5px', paddingLeft: 10 }}>Wrong Answer Feedback</Typography>

            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut"
                height={300} width={330}

            // width={"100%"}
            // height={300}

            />
        </Card >
    )

};

export default WrongansfeedFilter;

