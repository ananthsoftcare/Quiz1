'use client';
import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";

import { IconArrowUpLeft } from "@tabler/icons-react";


const Wrongansfeed = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [44, 55, 41, 17, 15]
    const optionscolumnchart: any = {
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },

        responsive: [{
            breakpoint: 480,
        }]
    }

    return (
        <Card style={{ height: "95%" }}
        >
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Wrong Answer Feedback</Typography>
            <br /><br /><br /><br /><br />
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut"
                height={"100%"} width={350}

            // width={"100%"}
            // height={300}

            />
        </Card >
    )

};

export default Wrongansfeed;

