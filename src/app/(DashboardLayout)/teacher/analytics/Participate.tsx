'use client';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";



const Participate = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const error = theme.palette.error.main;
    const secondary = theme.palette.secondary.light;
    const successlight = theme.palette.success.light;


    const seriescolumnchart: any = [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21]
    }];
    const optionscolumnchart: any = {

        annotations: {
            points: [{
                seriesIndex: 0,
                label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                }
            }]
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
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
            categories: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july'
            ],

        },
        yaxis: {
            title: {
                text: 'Servings',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    }


    return (
        <DashboardCard title="Average participation in Hours Spent"
            middlecontent={
                <Chart
                    options={optionscolumnchart}
                    series={seriescolumnchart}
                    type="bar"
                    width={"100%"}
                />
            }>
        </DashboardCard >
    );
};

export default Participate;

