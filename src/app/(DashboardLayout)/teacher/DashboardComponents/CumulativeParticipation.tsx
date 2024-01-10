
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab, Card } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ReactApexChart from "react-apexcharts";

const CumulativeParticipation = () => {
    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const errorlight = '#fdede8';


    const seriescolumnchart: any = [{
        name: 'Maths A',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'Physics B',
        data: [13, 23, 20, 8, 13, 27]
    },
    {
        name: 'Biology D',
        data: [21, 7, 25, 13, 22, 8]
    },
    {
        name: 'Chemistry C',
        data: [11, 17, 15, 15, 21, 14]
    }, {
        name: 'Biology D',
        data: [21, 7, 25, 13, 22, 8]
    },]
    const optionscolumnchart: any = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 5,
                columnWidth: '45%',
                distributed: false,
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '11px',
                            color: '#a5cd39',
                            fontWeight: 900
                        }
                    }
                }
            },
        },
        // plotOptions: {
        //     bar: {
        //         columnWidth: '45%',
        //         distributed: false,
        //     }
        // },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
            ],
        },

        legend: {
            show: false,
            position: 'left',
            offsetY: 40
        },
        fill: {
            opacity: 1
        }
    }


    return (
        <Card sx={{ height: "100.5%", marginBottom: 1, padding: 1 }}>
        <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Cumulative participation of classes by week</Typography>
            {/* <Typography style={{ fontSize: 10, color: '#713593', paddingLeft: 10 }}>By week</Typography> */}
            {/* <Typography style={{ fontSize: 13, fontWeight: 'bold' }}></Typography> */}
            <Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type='bar'
                width={"100%"}
                height="250px"
            />
        </Card >
    );
};

export default CumulativeParticipation;
