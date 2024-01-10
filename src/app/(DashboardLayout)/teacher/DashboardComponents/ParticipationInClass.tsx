
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab, Box, Card, Grid } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ParticipationInClass = () => {
    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const errorlight = '#fdede8';

    // chart
    const optionscolumnchart: any = {
        chart: {
            height: 80,
            type: "radialBar",
            toolbar: {
                show: false
            }
        },
        series: [67],
        colors: ["#a5cd39"],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: '#ff6b24',
                    startAngle: -135,
                    endAngle: 135,
                },
                dataLabels: {
                    name: {
                        show: true,
                    },
                    value: {
                        fontSize: "16px",
                        color: '#a5cd39',
                        show: true
                    }
                }
            }
        },
        dataLabels: {
            show: true,
            name: {
                offsetY: -10,
                show: true,
                color: 'blue',
                fontSize: '17px'
            },
            value: {
                formatter: function () {
                    return parseInt('Used');
                },
                color: '#ff6b24',
                fontSize: '10px',
                show: true,
            }
        },
        stroke: {
            lineCap: "butt"
        },
        labels: ["used"]
    };
    const seriescolumnchart: any = [
        90
    ];

    return (
        <Card sx={{ height: "100.5%", marginBottom: 1, padding: 1 }}>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Track your classes</Typography>
            <Grid container item xs={12} direction={'row'} display={'inline-flex'}>
                <Grid item xs={6} padding={2} paddingTop={3}>
                    <Typography style={{ fontSize: 13, fontWeight: 'bold', textAlign: 'center', color: '#073763', }}>Participation in classes</Typography>
                    <Typography style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', paddingTop: 5, color: '#713593' }}>17 Quizzes</Typography>
                    <Typography style={{ fontSize: 10, textAlign: 'center', color: '#713593' }}>of 20 ( Required count )</Typography>
                    {/* <IconCurrencyDollar /> */}
                </Grid>
                <Grid item xs={6} padding={0}>
                    <Box className="rounded-bars">
                        <Chart
                            options={optionscolumnchart}
                            series={seriescolumnchart}
                            type="radialBar"
                            width={200}
                            height={300}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
};

export default ParticipationInClass;
