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
        chart: {
            width: 380,
            type: 'donut',
        },
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
        // legend: {
        //     formatter: function () {
        //         return val + " - " + opts.w.globals.series[opts.seriesIndex]
        //     }
        // },
        title: {
            text: ''
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
        }]
    }

    return (
        <Card style={{ height: "46%" }}
        >
            <Typography style={{ marginLeft: 15,fontSize:14 }}>Wrong Answer Feedback</Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="donut"
                width={"100%"}
                // height={300}
            />
        </Card >
    )

};

export default Wrongansfeed;

