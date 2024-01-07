
import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab, Box } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import Chart from "react-apexcharts";

const RadialBarChart = () => {
    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const errorlight = '#fdede8';

    // chart
    const optionscolumnchart: any = {
        chart: {
            height: 280,
            type: "radialBar",
        },
        series: [67],
        colors: ["#20E647"],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: '#333',
                    startAngle: -135,
                    endAngle: 135,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        fontSize: "10px",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                gradientToColors: ["#87D4F9"],
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: "butt"
        },
        labels: ["Progress"]
    };
    const seriescolumnchart: any = [
        67
    ];

    return (
        <DashboardCard
            title="Student"
            action={
                <Fab color="error" size="medium" sx={{ color: '#ffffff' }}>
                    <IconCurrencyDollar width={24} />
                </Fab>
            }
            footer={
                <Box className="rounded-bars">
                    <Chart
                        options={optionscolumnchart}
                        series={seriescolumnchart}
                        type="radialBar"
                        width={"100%"}
                        height="100px" />
                </Box>
            }
        >
        </DashboardCard>
    );
};

export default RadialBarChart;
