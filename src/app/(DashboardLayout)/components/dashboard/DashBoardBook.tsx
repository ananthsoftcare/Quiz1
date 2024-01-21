'use client';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Paper, Box, Grid, Card, CardActionArea, CardContent, CardHeader, IconButton, Typography, CardActions, CardMedia, Avatar, Divider, Tooltip } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState } from 'react';
import { DashBoardBooks } from './Book';
import studentimage from '../../layout/shared/logo/student.jpg'
import { useTheme } from '@mui/material/styles';
import WalletIcon from '@mui/icons-material/Wallet';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import SmsIcon from '@mui/icons-material/Sms';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import { Stack, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar, IconNotebook } from '@tabler/icons-react';
import { IconBulb } from "@tabler/icons-react";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PublicIcon from '@mui/icons-material/Public';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Button from '@mui/material/Button';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import "./styles.scss";
import { ChangeEvent, FC, MouseEvent } from 'react'
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useRouter } from "next/navigation";
import LinearWithValueLabel from "./linearProgress";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });
const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));



const DashboardBooks = () => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const errorlight = '#fdede8';
    const optionscolumnchart: any = {
        chart: {
            type: 'area',
            fontFamily: "'Plus Jakarta Sans', sans-serif;",
            foreColor: '#ddd',
            toolbar: {
                show: false,
            },
            height: 60,
            sparkline: {
                enabled: true,
            },
            group: 'sparklines',
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
            colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
            type: 'solid',
            opacity: 0.05,
        },
        markers: {
            size: 0,
        },
        // tooltip: {
        //   theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
        // },
    };
    const seriescolumnchart: any = [
        {
            name: '',
            color: "#ddd",
            data: [25, 66, 20, 40, 12, 58, 20],
        },
    ];

    const [isHovered, setIsHovered] = useState({
        isHovered: false,
        id: ""
    });
    const project = {
        image: 'img'
    };

    function handleMouseOver(id: string) {
        setIsHovered({
            id: id,
            isHovered: true
        });
    }

    function handleMouseOut(id: string) {
        setIsHovered({
            id: id,
            isHovered: false
        });
    }
    const router = useRouter()
    const percentage = 66;
    const handleSubmitEvents = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        // showLoader()

        router.push(
            // {
            //     pathname: '/quiz',
            //     query: { questionNumber, ...options },
            // },
            '/quiz/Form'
        )
    }

    return (
        <Box height="100%">
            <PageContainer title="Dashboard" description="this is Shadow">
                {/* <DashboardCard title="Course"> */}
                <Grid container spacing={1}>
                <Grid item xs={12} lg={6} >
                        <Card style={{ padding: 0 }}>
                            <Grid container item xs={12} className="container">
                                <Link href='/studentanalytics'>
                                    <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                        < AnalyticsIcon sx={{
                                            ":hover": {
                                                color: 'blue', height: '45px', width: '100px',
                                            },
                                            height: '40px', width: '100px', color: "#fff",
                                        }} />
                                    </Typography>
                                </Link>
                                {/* <Typography className="overlay" style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center' }}>< AnalyticsIcon style={{ height: '70px', width: '50px', color: "#fff", display: 'flex', alignItems: 'center', textAlign: 'center' }} />Analytics</Typography> */}
                                <Grid item xs={2.5} paddingLeft={0} paddingTop={0.5}>
                                    <BiotechIcon style={{ height: '50px', width: '60px' }} color="info" />
                                </Grid>
                                <Grid item xs={6.5} paddingTop={1.8} paddingLeft={1.2} >
                                    <span style={{ fontWeight: 'bold', }} >Biology</span>
                                </Grid>
                                <Grid item xs={3} paddingTop={0.5}>
                                    <div style={{ width: 40, fontSize: 10, padding: 0, color: '#89bded' }}>
                                        <CircularProgressbar value={90} text={`${95}%`} styles={{
                                            background: {
                                                fill: "#89bded",
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            },
                                            path: {
                                                stroke: "#89bded"
                                            },
                                            trail: {
                                                // stroke: "ActiveBorder",
                                                transform: "rotate(90deg)",
                                                transformOrigin: "center center",
                                                backgroundColor: '#89bded'
                                            },
                                            text: {
                                                // Tweak text color:
                                                fill: '#89bded',
                                                // Tweak text size:
                                                fontSize: '28px',
                                            },
                                        }} />
                                        Average
                                    </div>
                                </Grid>
                            </Grid>
                            <LinearWithValueLabel progressValue={90} />
                            <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Link href='/biology'>
                                        <Button size="small" variant="text" sx={{
                                            ":hover": {
                                                color: "#ffffff",
                                            },
                                            fontSize: 14,
                                        }}>
                                            <IconNotebook style={{ height: 16 }} /> Content
                                        </Button>
                                    </Link>

                                </Grid>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Button size="small" variant="text" onClick={handleSubmitEvents} sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconBulb style={{ height: 16 }} /> Quiz
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Card>
                            <Grid container item xs={12} className="container" >
                                <Link href='/studentanalytics'>
                                    <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                        < AnalyticsIcon sx={{
                                            ":hover": {
                                                color: 'blue', height: '45px', width: '100px',
                                            },
                                            height: '40px', width: '100px', color: "#fff",
                                        }} />
                                    </Typography>
                                </Link>
                                {/* <Typography className="overlay" style={{ color: "rgb(163, 0, 214)", fontSize: 20, fontWeight: 'bold', cursor: 'pointer',justifyContent: 'center', display: 'inline-flex', alignItems: 'center', textAlign: 'center' }}>< AnalyticsIcon style={{ width: '30px', height: '30px', fontWeight: 'bold', color: "rgb(163, 0, 214)", cursor: 'pointer', display: 'flex', alignItems: 'center', textAlign: 'center' , justifyContent: 'center'}} />Analytics</Typography> */}
                                <Grid item xs={2} paddingLeft={1} paddingTop={0.5}>
                                    <ShutterSpeedIcon style={{ height: '50px', width: '50px' }} color="warning" />
                                </Grid>
                                <Grid item xs={7} paddingTop={1.5} paddingLeft={3}>
                                    <span style={{ fontWeight: 'bold' }} >Physics</span>
                                    {/* <Typography className="overlay" display={'flex'}>< AnalyticsIcon style={{ height: 18, color: "#fff" }} />Analytics</Typography> */}
                                </Grid>
                                <Grid item xs={3} paddingTop={0.5}>
                                    <div style={{ width: 40, fontSize: 10, padding: 0, color: '#6aa84f' }}>
                                        <CircularProgressbar value={78} text={`${98}%`} styles={{
                                            background: {
                                                fill: "#f1c232",
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            },
                                            path: {
                                                stroke: "#f1c232"
                                            },
                                            trail: {
                                                // stroke: "ActiveBorder",
                                                transform: "rotate(90deg)",
                                                transformOrigin: "center center",
                                                backgroundColor: '#f1c232'
                                            },
                                            text: {
                                                // Tweak text color:
                                                fill: '#f1c232',
                                                // Tweak text size:
                                                fontSize: '28px',
                                            },
                                        }} />
                                        Average
                                    </div>
                                </Grid>
                            </Grid>
                            <LinearWithValueLabel progressValue={78} />
                            {/* <Divider orientation="horizontal" flexItem sx={{ mr: "-1px" }} /> */}
                            <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Link href='/physics'>
                                        <Button size="small" variant="text" sx={{
                                            ":hover": {
                                                color: "#ffffff",
                                            },
                                            fontSize: 14,
                                        }}>
                                            <IconNotebook style={{ height: 16 }} /> Content
                                        </Button>
                                    </Link>

                                </Grid>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Button size="small" variant="text" onClick={handleSubmitEvents} sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconBulb style={{ height: 16 }} /> Quiz
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Card style={{ padding: 0 }}>
                            <Grid container item xs={12} className="container">
                                <Link href='/studentanalytics'>
                                    <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                        < AnalyticsIcon sx={{
                                            ":hover": {
                                                color: 'blue', height: '45px', width: '100px',
                                            },
                                            height: '40px', width: '100px', color: "#fff",
                                        }} />
                                    </Typography>
                                </Link>
                                {/* <Typography className="overlay" style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center' }}>< AnalyticsIcon style={{ height: '70px', width: '50px', color: "#fff", display: 'flex', alignItems: 'center', textAlign: 'center' }} />Analytics</Typography> */}
                                <Grid item xs={2.5} paddingLeft={1}>
                                    <WalletIcon style={{ height: '50px', width: '50px' }} color="success" />
                                </Grid>
                                <Grid item xs={6.5} paddingTop={1.8} paddingLeft={1.5} >
                                    <span style={{ fontWeight: 'bold', }} >Maths</span>
                                </Grid>
                                <Grid item xs={3} paddingTop={0.5}>
                                    <div style={{ width: 40, fontSize: 10, padding: 0, color: '#6aa84f' }}>
                                        <CircularProgressbar value={66} text={`${86}%`} styles={{
                                            background: {
                                                fill: "#6aa84f",
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            },
                                            path: {
                                                stroke: "#6aa84f"
                                            },
                                            trail: {
                                                // stroke: "ActiveBorder",
                                                transform: "rotate(90deg)",
                                                transformOrigin: "center center",
                                                backgroundColor: '#6aa84f'
                                            },
                                            text: {
                                                // Tweak text color:
                                                fill: '#6aa84f',
                                                // Tweak text size:
                                                fontSize: '28px',
                                            },
                                        }} />
                                        Average
                                    </div>
                                </Grid>
                            </Grid>
                            <LinearWithValueLabel progressValue={66} />
                            {/* <Divider /> */}
                            <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    {/* <Link href='/maths'> */}
                                        <Button size="small" disabled variant="text" sx={{
                                            ":hover": {
                                                color: "#ffffff",
                                            },
                                            fontSize: 14,
                                        }}>
                                            <IconNotebook style={{ height: 16 }} /> Content
                                        </Button>
                                    {/* </Link> */}

                                </Grid>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Button size="small" variant="text" onClick={handleSubmitEvents} sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconBulb style={{ height: 16 }} /> Quiz
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={12} lg={6} >
                        <Card style={{ padding: 0 }}>
                            <Grid container item xs={12} className="container">
                                <Link href='/studentanalytics'>
                                    <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                        < AnalyticsIcon sx={{
                                            ":hover": {
                                                color: 'blue', height: '45px', width: '100px',
                                            },
                                            height: '40px', width: '100px', color: "#fff",
                                        }} />
                                    </Typography>
                                </Link>
                                {/* <Typography className="overlay" style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center' }}>< AnalyticsIcon style={{ height: '70px', width: '50px', color: "#fff", display: 'flex', alignItems: 'center', textAlign: 'center' }} />Analytics</Typography> */}
                                <Grid item xs={2.5} paddingLeft={1}>
                                    <ScienceIcon style={{ height: '50px', width: '50px' }} color="error" />
                                </Grid>
                                <Grid item xs={6.5} paddingTop={1.8} paddingLeft={1.8} >
                                    <span style={{ fontWeight: 'bold', }} >Chemistry</span>
                                </Grid>
                                <Grid item xs={3} paddingTop={0.5}>
                                    <div style={{ width: 40, fontSize: 10, padding: 0, color: '#e9a35a' }}>
                                        <CircularProgressbar value={95} text={`${75}%`} styles={{
                                            background: {
                                                fill: "#e9a35a",
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            },
                                            path: {
                                                stroke: "#e9a35a"
                                            },
                                            trail: {
                                                // stroke: "ActiveBorder",
                                                transform: "rotate(90deg)",
                                                transformOrigin: "center center",
                                                backgroundColor: '#e9a35a'
                                            },
                                            text: {
                                                // Tweak text color:
                                                fill: '#e9a35a',
                                                // Tweak text size:
                                                fontSize: '28px',
                                            },
                                        }} />
                                        Average
                                    </div>
                                </Grid>
                            </Grid>
                            <LinearWithValueLabel progressValue={95} />
                            <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    {/* <Link href='/chemistry'> */}
                                        <Button size="small" disabled variant="text" sx={{
                                            ":hover": {
                                                color: "#ffffff",
                                            },
                                            fontSize: 14,
                                        }}>
                                            <IconNotebook style={{ height: 16 }} /> Content
                                        </Button>
                                    {/* </Link> */}

                                </Grid>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Button size="small" variant="text" onClick={handleSubmitEvents} sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconBulb style={{ height: 16 }} /> Quiz
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Card style={{ padding: 0 }}>
                            <Grid container item xs={12} className="container">
                                <Link href='/studentanalytics'>
                                    <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                        < AnalyticsIcon sx={{
                                            ":hover": {
                                                color: 'blue', height: '45px', width: '100px',
                                            },
                                            height: '40px', width: '100px', color: "#fff",
                                        }} />
                                    </Typography>
                                </Link>
                                {/* <Typography className="overlay" style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center' }}>< AnalyticsIcon style={{ height: '70px', width: '50px', color: "#fff", display: 'flex', alignItems: 'center', textAlign: 'center' }} />Analytics</Typography> */}
                                <Grid item xs={2.5} paddingLeft={1} paddingTop={0.6}>
                                    <SmsIcon style={{ height: '50px', width: '50px' }} color="primary" />
                                </Grid>
                                <Grid item xs={6.5} paddingTop={1.8} paddingLeft={1.5} >
                                    <span style={{ fontWeight: 'bold', }} >Communication</span>
                                </Grid>
                                <Grid item xs={3} paddingTop={0.5}>
                                    <div style={{ width: 40, fontSize: 10, padding: 0, color: '#5387b6' }}>
                                        <CircularProgressbar value={83} text={`${93}%`} styles={{
                                            background: {
                                                fill: "#5387b6",
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            },
                                            path: {
                                                stroke: "#5387b6"
                                            },
                                            trail: {
                                                // stroke: "ActiveBorder",
                                                transform: "rotate(90deg)",
                                                transformOrigin: "center center",
                                                backgroundColor: '#5387b6'
                                            },
                                            text: {
                                                // Tweak text color:
                                                fill: '#5387b6',
                                                // Tweak text size:
                                                fontSize: '28px',
                                            },
                                        }} />
                                        Average
                                    </div>
                                </Grid>
                            </Grid>
                            <LinearWithValueLabel progressValue={83} />
                            <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    {/* <Link href='/communication'> */}
                                        <Button size="small" disabled variant="text" sx={{
                                            ":hover": {
                                                color: "#ffffff",
                                            },
                                            fontSize: 14,
                                        }}>
                                            <IconNotebook style={{ height: 16 }} /> Content
                                        </Button>
                                    {/* </Link> */}

                                </Grid>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Button size="small" variant="text" onClick={handleSubmitEvents} sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconBulb style={{ height: 16 }} /> Quiz
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Card style={{ padding: 0 }}>
                            <Grid container item xs={12} className="container">
                                <Link href='/studentanalytics'>
                                    <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                        < AnalyticsIcon sx={{
                                            ":hover": {
                                                color: 'blue', height: '45px', width: '100px',
                                            },
                                            height: '40px', width: '100px', color: "#fff",
                                        }} />
                                    </Typography>
                                </Link>
                                {/* <Typography className="overlay" style={{ fontSize: 20, fontWeight: 'bold', display: 'flex', alignItems: 'center', textAlign: 'center' }}>< AnalyticsIcon style={{ height: '70px', width: '50px', color: "#fff", display: 'flex', alignItems: 'center', textAlign: 'center' }} />Analytics</Typography> */}
                                <Grid item xs={2.5} paddingLeft={1} paddingTop={0.6}>
                                    <PublicIcon style={{ height: '50px', width: '50px' }} color="secondary" />
                                </Grid>
                                <Grid item xs={6.5} paddingTop={1.8} paddingLeft={1.5} >
                                    <span style={{ fontWeight: 'bold', }} >Social Welfare</span>
                                </Grid>
                                <Grid item xs={3} paddingTop={0.5}>
                                    <div style={{ width: 40, fontSize: 10, padding: 0, color: '#999999' }}>
                                        <CircularProgressbar value={55} text={`${75}%`} styles={{
                                            background: {
                                                fill: "#999999",
                                                fontSize: '28px',
                                                fontWeight: 'bold'
                                            },
                                            path: {
                                                stroke: "#999999"
                                            },
                                            trail: {
                                                // stroke: "ActiveBorder",
                                                transform: "rotate(90deg)",
                                                transformOrigin: "center center",
                                                backgroundColor: '#999999'
                                            },
                                            text: {
                                                // Tweak text color:
                                                fill: '#999999',
                                                // Tweak text size:
                                                fontSize: '28px',
                                            },
                                        }} />
                                        Average
                                    </div>
                                </Grid>
                            </Grid>
                            <LinearWithValueLabel progressValue={55} />
                            <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    {/* <Link href='/socialwelfare'> */}
                                        <Button size="small" disabled variant="text" sx={{
                                            ":hover": {
                                                color: "#ffffff",
                                            },
                                            fontSize: 14,
                                        }}>
                                            <IconNotebook style={{ height: 16 }} /> Content
                                        </Button>
                                    {/* </Link> */}

                                </Grid>
                                <Grid item xs={6} sx={{
                                    ":hover": {
                                        color: "green",
                                        background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                        boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                    },
                                    borderRight: '1px solid #ddd'
                                }}>
                                    <Button size="small" variant="text" onClick={handleSubmitEvents} sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconBulb style={{ height: 16 }} /> Quiz
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid >
                {/* </DashboardCard> */}
            </PageContainer >
        </Box >
    );
};

export default DashboardBooks;
