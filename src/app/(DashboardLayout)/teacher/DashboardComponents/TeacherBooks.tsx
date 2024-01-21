'use client';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Paper, Box, Grid, Card, CardActionArea, CardContent, CardHeader, IconButton, Typography, CardActions, CardMedia, Avatar, Divider, Tooltip } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState } from 'react';
import studentimage from '../../layout/shared/logo/student.jpg'
import { useTheme } from '@mui/material/styles';
import WalletIcon from '@mui/icons-material/Wallet';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import SmsIcon from '@mui/icons-material/Sms';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import { Stack, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar, IconGridDots, IconNotebook } from '@tabler/icons-react';
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
import { ChangeEvent, FC, MouseEvent } from 'react'
import { IHomePageProps } from "../../types";
import { useRouter } from 'next/navigation';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });


interface IFormComponentProps extends IHomePageProps {
    showLoader: () => void
}


const DashboardBooks = () => {
    const router = useRouter()
    const [questionNumber, setQuestionNumber] = useState(5)
    const [options, setOptions] = useState({
        category: '0',
        type: 'any',
        difficulty: 'any',
    })
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const secondary = theme.palette.secondary.main;
    const errorlight = '#fdede8';
    const optionscolumnchart: any = {
        chart: {
            height: 80,
            innerWidth: 10,
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
                        fontSize: "14px",
                        fontWeight: 'bold',
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
        100
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
    const percentage = 66;


    // const handleSubmitEvents = (e: MouseEvent<HTMLElement>) => {
    //     e.preventDefault()
    //     // showLoader()

    //     router.push(
    //         // {
    //         //     pathname: '/quiz',
    //         //     query: { questionNumber, ...options },
    //         // },
    //         '/quiz'
    //     )
    // }

    const handleSubmitEvents = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        // showLoader()

        router.push(
            // {
            //     pathname: '/quiz',
            //     query: { questionNumber, ...options },
            // },
            '/teacher/manage/'
        )
    }
    const handleAnalytics = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault()
        // showLoader()

        router.push(
            // {
            //     pathname: '/quiz',
            //     query: { questionNumber, ...options },
            // },
            '/teacher/analytics'
        )
    }

    return (
        <PageContainer title="Shadow" description="this is Shadow">
            {/* <DashboardCard title="Course"> */}
            <Grid container spacing={1}>

                <Grid item xs={12} lg={6} >
                    <Card sx={{ padding: 0 }}>
                        <Grid className="container">
                            <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                <IconButton onClick={handleAnalytics}>
                                    < AnalyticsIcon sx={{
                                        ":hover": {
                                            color: 'blue', height: '40px', width: '100px',
                                        },
                                        height: '35px', width: '100px', color: "#fff",
                                    }} />
                                </IconButton>
                            </Typography>
                            <CardHeader
                                style={{ padding: 0, backgroundColor: '' }}
                                avatar={
                                    <BiotechIcon style={{ height: '65px', width: '45px', marginLeft: 9 }} color="info" />
                                }
                                action={
                                    <div style={{ width: '11%', height: "7px", marginTop: 18, marginLeft: 56 }}>
                                        <CircularProgressbar value={88} text={`${88}%`} strokeWidth={7} styles={{
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
                                    </div>
                                }
                                title={<span style={{ fontWeight: 'bold', fontSize: 13 }}>Biology</span>}
                            // subheader={<CardActions style={{ padding: 0 }} title="Analytics">< AnalyticsIcon color="info" />Analytics</CardActions>}
                            />
                        </Grid><Divider />
                        <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                            <Grid item xs={6} sx={{
                                ":hover": {
                                    color: "green",
                                    background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                },
                                borderRight: '1px solid #ddd'
                            }}>
                                <Link href='/teacher/biology'>
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
                                <Link
                                    href={{
                                        pathname: '/teacher/manage/',
                                        query: { pageId: 'Biology' },
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}>
                                    <Button size="small" variant="text" sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconGridDots style={{ height: 16 }} />Manage
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Card sx={{ padding: 0 }}>
                        <Grid className="container">
                            <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                <IconButton onClick={handleAnalytics}>
                                    < AnalyticsIcon sx={{
                                        ":hover": {
                                            color: 'blue', height: '40px', width: '100px',
                                        },
                                        height: '35px', width: '100px', color: "#fff",
                                    }} />
                                </IconButton>
                            </Typography>
                            <CardHeader
                                style={{ padding: 0, backgroundColor: '' }}
                                avatar={
                                    <ShutterSpeedIcon style={{ height: '65px', width: '45px', marginLeft: 4, padding: 0 }} color="warning" />
                                }
                                action={
                                    <div style={{ width: '11%', height: "7px", marginTop: 20, marginLeft: 60 }}>
                                        <CircularProgressbar value={77} text={`${77}%`} strokeWidth={7} styles={{
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
                                    </div>
                                    // <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                }

                                //     <CircularProgressbar
                                //     value={percentages[index]}
                                //     text={`${percentages[index]}%`}
                                //   />
                                //     <Chart
                                //         options={optionscolumnchart}
                                //         series={seriescolumnchart}
                                //         type="radialBar"
                                //         width={"55%"}
                                //         height="100px" />
                                //     // <Avatar sx={{ bgcolor: red[500], marginTop: 1, fontSize: 12 }} aria-label="recipe">
                                //     //     80%
                                //     // </Avatar>
                                // }
                                title={<span style={{ fontWeight: 'bold', fontSize: 13 }}>Physics</span>}
                            // subheader={<CardActions style={{ padding: 0 }} title="Analytics">< AnalyticsIcon color="warning" />Analytics</CardActions>}
                            />
                        </Grid><Divider />
                        <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                            <Grid item xs={6} sx={{
                                ":hover": {
                                    color: "green",
                                    background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                },
                                borderRight: '1px solid #ddd'
                            }}>
                                <Link href="/teacher/physics">
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
                                <Link
                                    href={{
                                        pathname: '/teacher/manage/',
                                        query: { pageId: 'Physics' },
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}>
                                    <Button size="small" variant="text" sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconGridDots style={{ height: 16 }} />Manage
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Card sx={{ padding: 0 }}>
                        <Grid className="container">
                            <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                <IconButton onClick={handleAnalytics}>
                                    <AnalyticsIcon sx={{
                                        ":hover": {
                                            color: 'blue', height: '40px', width: '100px',
                                        },
                                        height: '35px', width: '100px', color: "#fff",
                                    }} />
                                </IconButton>
                            </Typography>
                            <CardHeader
                                style={{ padding: 0, backgroundColor: '', }}
                                avatar={
                                    <WalletIcon style={{ height: '65px', width: '45px', marginLeft: 9 }} color="success" />
                                }
                                action={
                                    <div style={{ width: '11%', height: "7px", marginTop: 20, marginLeft: 66 }}>
                                        <CircularProgressbar value={66} text={`${66}%`} strokeWidth={7} styles={{
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


                                    </div>
                                }
                                title={<span style={{ fontWeight: 'bold', fontSize: 13 }}>Maths</span>}
                            // subheader={<CardActions className="overlay" style={{ padding: 0 }} title="Analytics">< AnalyticsIcon color="success" />Analytics</CardActions>}
                            /><Divider />


                        </Grid>
                        <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                            <Grid item xs={6} sx={{
                                ":hover": {
                                    color: "#fff",
                                    background: 'linear-gradient(34deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                    boxShadow: "2px 2px 5px 0px #e9f7ed"
                                },
                                borderRight: '1px solid #ddd'
                            }}>

                                {/* <Link href='/teacher/maths'> */}
                                <Button disabled size="small" variant="text" sx={{
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
                                {/* <Link href={'/quiz/chemistryquiz/Home'}> */}
                                <Link
                                    href={{
                                        pathname: '/teacher/manage/',
                                        query: { pageId: 'Maths' },
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}>
                                    <Button size="small" variant="text" sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,

                                    }}>
                                        <IconGridDots style={{ height: 16 }} />Manage
                                    </Button>
                                </Link>
                                {/* </Link> */}

                            </Grid>


                            {/* <Button size="small" variant="text"
<<<<<<< HEAD
>>>>>>> 1fdd2a68c73ee996f5e17d3541843045748aab39
=======
>>>>>>> 18d78a5d8d7dfd710a78da49d44cff0fa19a050a
                                    sx={{
                                        ":hover": {
                                            bgcolor: "#B4F8C8",
                                            color: "green",
                                            fontSize: 5
                                        }
                                    }}>
                                    Analytics
                                </Button> */}
                        </Grid>
                    </Card>
                </Grid><Divider />
                <Grid item xs={12} lg={6} >
                    <Card sx={{ padding: 0 }}>
                        <Grid className="container">
                            <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                <IconButton onClick={handleAnalytics}>
                                    < AnalyticsIcon sx={{
                                        ":hover": {
                                            color: 'blue', height: '40px', width: '100px',
                                        },
                                        height: '35px', width: '100px', color: "#fff",
                                    }} />
                                </IconButton>
                            </Typography>
                            <CardHeader
                                style={{ padding: 0, backgroundColor: '' }}
                                avatar={
                                    <ScienceIcon style={{ height: '65px', width: '45px', marginLeft: 9 }} color="error" />
                                }
                                action={
                                    <div style={{ width: '12%', height: "7px", marginTop: 18, marginLeft: 38 }}>
                                        <CircularProgressbar value={99} text={`${99}%`} strokeWidth={7} styles={{
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
                                    </div>
                                }
                                title={<span style={{ fontWeight: 'bold', fontSize: 13 }}>Chemistry</span>}
                            // subheader={<CardActions style={{ padding: 0 }} title="Analytics">< AnalyticsIcon color="error" />Analytics</CardActions>}
                            />
                        </Grid><Divider />
                        <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, }}>
                            <Grid item xs={6} sx={{
                                ":hover": {
                                    color: "green",
                                    background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                },

                                borderRight: '1px solid #ddd'
                            }}>
                                {/* <Link href="/teacher/chemistry"> */}
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
                                <Link
                                    href={{
                                        pathname: '/teacher/manage/',
                                        query: { pageId: 'Chemistry' },
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}>
                                    <Button size="small" variant="text" sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconGridDots style={{ height: 16 }} />Manage
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Card sx={{ padding: 0 }}>
                        <Grid className="container">
                            <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                <IconButton onClick={handleAnalytics}>
                                    < AnalyticsIcon sx={{
                                        ":hover": {
                                            color: 'blue', height: '40px', width: '100px',
                                        },
                                        height: '35px', width: '100px', color: "#fff",
                                    }} />
                                </IconButton>
                            </Typography>
                            <CardHeader
                                style={{ padding: 0, backgroundColor: '' }}
                                avatar={
                                    <SmsIcon style={{ height: '65px', width: '45px', marginLeft: 9 }} color="primary" />
                                }
                                action={
                                    <div style={{ width: '13%', height: "7px", marginTop: 20, marginLeft: 5 }}>
                                        <CircularProgressbar value={85} text={`${85}%`} strokeWidth={7} styles={{
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
                                    </div>
                                }
                                title={<span style={{ fontWeight: 'bold', fontSize: 13 }}>Communication</span>}
                            // subheader={<CardActions style={{ padding: 0 }} title="Analytics">< AnalyticsIcon color="primary" />Analytics</CardActions>}
                            />
                        </Grid><Divider />
                        <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, borderRadius: '4px', }}>
                            <Grid item xs={6} sx={{
                                ":hover": {
                                    color: "green",
                                    background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                },
                                borderRight: '1px solid #ddd'
                            }}>
                                {/* <Link href="/teacher/communication"> */}
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
                                <Link
                                    href={{
                                        pathname: '/teacher/manage/',
                                        query: { pageId: 'Communication' },
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}>
                                    <Button size="small" variant="text" sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconGridDots style={{ height: 16 }} />Manage
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={6} >
                    <Card sx={{ padding: 0 }}>
                        <Grid className="container">
                            <Typography className="overlay" style={{ fontSize: 15, color: "#fff", fontWeight: 'bold', cursor: 'pointer' }}>
                                <IconButton onClick={handleAnalytics}>
                                    < AnalyticsIcon sx={{
                                        ":hover": {
                                            color: 'blue', height: '40px', width: '100px',
                                        },
                                        height: '35px', width: '100px', color: "#fff",
                                    }} />
                                </IconButton>
                            </Typography>
                            <CardHeader
                                style={{ padding: 0, margin: 0, backgroundColor: '' }}
                                avatar={
                                    <PublicIcon style={{ height: '65px', width: '45px', marginLeft: 1 }} color="secondary" />
                                }
                                action={
                                    <div style={{ width: '13%', height: "7px", marginTop: 20, marginLeft: 22 }}>
                                        <CircularProgressbar value={75} text={`${75}%`} strokeWidth={7} styles={{
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
                                    </div>
                                    // <Chart
                                    //     options={optionscolumnchart}
                                    //     series={seriescolumnchart}
                                    //     type="radialBar"
                                    //     width={"30%"}
                                    //     height="100px" />
                                    // <Avatar sx={{ bgcolor: red[500], marginTop: 1, fontSize: 12 }} aria-label="recipe">
                                    //     80%
                                    // </Avatar>
                                }
                                title={<span style={{ fontWeight: 'bold', fontSize: 13 }}>SocialWelfare</span>}
                            // subheader={<CardActions style={{ padding: 0 }} title="Analytics">< AnalyticsIcon color="secondary" />Analytics</CardActions>}
                            />
                        </Grid><Divider />
                        <Grid container item xs={12} style={{ justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', padding: 0, borderRadius: '4px', }}>
                            <Grid item xs={6} sx={{
                                ":hover": {
                                    color: "green",
                                    background: 'linear-gradient(32deg,#e9a35a, #e9a35a, #e9a35a,#e9a35a)',
                                    boxShadow: "2px 2px 5px 0px rgba(0, 0, 0, 0.5)"
                                },
                                borderRight: '1px solid #ddd'
                            }}>
                                {/* <Link href="/teacher/socialwelfare"> */}
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
                                <Link
                                    href={{
                                        pathname: '/teacher/manage/',
                                        query: { pageId: 'Social Welfare' },
                                    }}
                                    style={{ textDecoration: "none", color: "black" }}>
                                    <Button size="small" variant="text" sx={{
                                        ":hover": {
                                            color: "#ffffff",
                                        },
                                        fontSize: 14,
                                    }}>
                                        <IconGridDots style={{ height: 16 }} />Manage
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            {/* </DashboardCard> */}
        </PageContainer >
    );
};

export default DashboardBooks;
