'use client';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Card, Typography } from '@mui/material';



const ParticipateFilter = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        name: 'Servings',
        data: [4, 5, 1, 6, 2, 4, 2]
    }];
    const optionscolumnchart: any = {
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        }, colors: '#ADD8E6',
        stroke: {
            width: 2
        },
        chart: {
            toolbar: {
                show: false
            }
        },
        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'
            ],

        },
        yaxis: {
            title: {
                text: 'Hours',
            },
        },

    }


    return (
        <Card>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: '10px 0px 15px 10px', borderRadius: '5px', paddingLeft: 10 }}>Average participation in Hours Spent</Typography>

            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type="bar"
                height={250} width={500}
            />
        </Card >
    );
};

export default ParticipateFilter;

