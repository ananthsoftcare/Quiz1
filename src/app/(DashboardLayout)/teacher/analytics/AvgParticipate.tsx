'use client';
import { Card, CardHeader, Divider, Grid, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
const AvgParticipate = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        name: 'Inflation',
        data: [73, 40, 50, 60, 70, 60, 50, 80, 90, 56]
    }]
    const optionscolumnchart: any = {
        plotOptions: {
            bar: {
                borderRadius: 10,
            }
        }, colors: '#4B0082',
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },

            // crosshairs: {
            //     fill: {
            //         type: 'gradient',
            //         gradient: {
            //             colorFrom: '#D8E3F0',
            //             colorTo: '#BED6EF',
            //             stops: [0, 100],
            //             opacityFrom: 0.4,
            //             opacityTo: 0.5,
            //         }
            //     }
            // },
            tooltip: {
                enabled: true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,

            }

        },

        title: {
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    }

    return (
        <Card>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Average Participation in Quiz contest</Typography>
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                width={500}
                height={250}
            />
        </Card >
    )

};

export default AvgParticipate;

