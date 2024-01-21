import React from "react";
import { MenuItem, Box, IconButton, Menu, Card, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    "Action",
    "Another Action",
    "Something else here",
];

const AverageClassPerform = () => {
    // menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // chart color
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.error.main;

    //chart
    const optionscolumnchart: any = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            }
        },
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
            enabled: false
        },
        stroke: {
            width: 2,
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep',
                'Oct', 'Nov', 'Dec'
            ],
        },
        // xaxis: {
        //     categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        //         '10 Jan', '11 Jan', '12 Jan'
        //     ],
        // },
        grid: {
            borderColor: '#f1f1f1',
        }
    };
    const seriescolumnchart: any = [
        {
            name: "Maths",
            data: [10, 41, 40, 28, 51, 42, 109, 100],
        },
        {
            name: "Physics",
            data: [40, 91, 32, 45, 32, 34, 52, 41],
        },
        {
            name: "Biology",
            data: [55, 71, 42, 55, 62, 44, 62, 51],
        },
        {
            name: "Chemistry",
            data: [0, 58, 22, 35, 12, 30, 42, 31],
        },
        {
            name: "Communication",
            data: [100, 35, 10, 25, 42, 64, 82, 91],
        },
        {
            name: "Social Welfare",
            data: [80, 50, 42, 65, 82, 104, 120, 60],
        },
    ];

    return (
        <Card sx={{ height: "100.5%", marginBottom: 1, padding: 1 }}>
            <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#073763', backgroundColor: 'rgb(222 253 253)', padding: 2, borderRadius: '5px', paddingLeft: 10 }}>Average  class performance by month</Typography>
            {/* <Typography style={{ fontSize: 13, fontWeight: 'bold' }}>Average class performance by month</Typography> */}
            < Chart
                options={optionscolumnchart}
                series={seriescolumnchart}
                type='line'
                width={"100%"}
                height="230px"
            />
        </Card>
    );
};

export default AverageClassPerform;
