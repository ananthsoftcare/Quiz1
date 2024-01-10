import React, { useState } from "react";
import Link from "next/link";
import {
    Avatar,
    Box,
    Menu,
    Button,
    IconButton,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Badge,
    Typography,
    Card,
    CardHeader,
    CardActionArea,
    CardActions,
    Grid,
} from "@mui/material";

import { IconBellRinging, IconListCheck, IconMail, IconUser } from "@tabler/icons-react";
import WalletIcon from '@mui/icons-material/Wallet';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import SmsIcon from '@mui/icons-material/Sms';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';

const Notification = () => {
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event: any) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const actions = [
        // { label: "About",count:2,  ques:'question raised from physics 2 question raised from physics 2 question raised from physics 2 question raised from physics', bg: '#F0F8FF', icon: <ShutterSpeedIcon />, clr: "#1098ad" },
        { label: "Profile", count: 3, ques: 'question raised from maths', bg: '#fff', icon: <WalletIcon />, clr: "#1098ad", },
        { label: "Picture", count: 1, ques: ' question raised from chemistry', bg: '#F0F8FF', icon: <ScienceIcon />, clr: "#1098ad" },
        { label: "Trash", count: 3, ques: 'question raised from biology', bg: '#fff', icon: <BiotechIcon />, clr: "#1098ad" },
        { label: "About", count: 2, ques: 'question raised from physics', bg: '#F0F8FF', icon: <ShutterSpeedIcon />, clr: "#1098ad" },
        { label: "Profile", count: 3, ques: 'question raised from maths', bg: '#fff', icon: <WalletIcon />, clr: "#1098ad" },
        { label: "Picture", count: 1, ques: ' question raised from chemistry', bg: '#F0F8FF', icon: <ScienceIcon />, clr: "#1098ad" },
        { label: "Profile", count: 3, ques: 'question raised from maths', bg: '#fff', icon: <WalletIcon />, clr: "#1098ad" },
        { label: "Picture", count: 1, ques: ' question raised from chemistry', bg: '#F0F8FF', icon: <ScienceIcon />, clr: "#1098ad" },
        { label: "Trash", count: 3, ques: 'question raised from biology', bg: '#fff', icon: <BiotechIcon />, clr: "#1098ad" },
        { label: "About", count: 2, ques: 'question raised from physics', bg: '#F0F8FF', icon: <ShutterSpeedIcon />, clr: "#1098ad" },
        { label: "Profile", count: 3, ques: 'question raised from maths', bg: '#fff', icon: <WalletIcon />, clr: "#1098ad" },
        { label: "Picture", count: 1, ques: ' question raised from chemistry', bg: '#F0F8FF', icon: <ScienceIcon />, clr: "#1098ad" },
        { label: "Profile", count: 3, ques: 'question raised from maths', bg: '#fff', icon: <WalletIcon />, clr: "#1098ad" },
        { label: "Picture", count: 1, ques: ' question raised from chemistry', bg: '#F0F8FF', icon: <ScienceIcon />, clr: "#1098ad" },
        { label: "Trash", count: 3, ques: 'question raised from biology', bg: '#fff', icon: <BiotechIcon />, clr: "#1098ad" },
        { label: "About", count: 2, ques: 'question raised from physics', bg: '#F0F8FF', icon: <ShutterSpeedIcon />, clr: "#1098ad" },
        { label: "Profile", count: 3, ques: 'question raised from maths', bg: '#fff', icon: <WalletIcon />, clr: "#1098ad" },
        { label: "Picture", count: 1, ques: ' question raised from chemistry', bg: '#F0F8FF', icon: <ScienceIcon />, clr: "#1098ad" },
        { label: "Trash", count: 3, ques: 'question raised from biology', bg: '#fff', icon: <BiotechIcon />, clr: "#1098ad" },
    ];
    return (
        <Box>
            <IconButton
                size="large"
                aria-label="show 11 new notifications"
                color="inherit"
                aria-controls="msgs-menu"
                aria-haspopup="true"
                onClick={handleClick2}
            >
                <Badge variant="dot" color="primary">
                    <IconBellRinging size="21" stroke="1.5" />
                </Badge>
            </IconButton>
            {/* ------------------------------------------- */}
            {/* Message Dropdown */}
            {/* ------------------------------------------- */}
            <Menu
                id="msgs-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                sx={{
                    "& .MuiMenu-paper": {
                        width: "400px",
                        border: '1px solid ddd'
                    },
                }}
            >
                <Card elevation={8} variant="elevation" sx={{
                    border: '1px solid #fff', backgroundColor: '#fff', overflow: 'auto',
                    maxHeight: '420px', maxWidth: '397px', scrollbarwidth: 'thin', borderRadius: '4px',
                }}>
                    {/* <Link href={'/teacher/dashboard'}>Dashboardteacher</Link><br />
                    <Link href={'/teacher/analytics'}>TeacherAnal</Link><br />
                    <Link href={'/teacher/content'}>TeacherCOn</Link><br />
                    <Link href={'/teacher/manage'}>TaeacherMan</Link><br />
                    <Link href={'/teacher/profile'}>TeacherPro</Link><br /> */}
                    {actions.map((product, i) => {
                        return (
                            <div key={i} style={{ padding: 1, }}>
                                <Card style={{ borderRadius: '4px', backgroundColor: product.bg, }}>
                                    <CardActions>
                                        <Grid container item xs={12} direction={'row'}>
                                            <Grid item xs={1.5}>
                                                <Avatar sx={{ width: 24, height: 24 }} style={{ backgroundColor: product.clr, fontSize: 11 }}>{product.count}</Avatar>
                                            </Grid>
                                            <Grid item xs={10.5}>
                                                <div>
                                                    <Link href={'/notifications'}>
                                                        <Typography sx={{
                                                            ":hover": {
                                                                color: "#107869",
                                                                fontWeight: 'bold',
                                                            }, display: 'inline-flex',
                                                            fontSize: 14,
                                                            fontWeight: 'bold',
                                                            textAlign: 'center',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                            // color: product.clr
                                                        }}>{product.ques}</Typography>
                                                    </Link>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </div>
                        )
                    })}
                    <Link href={'/notifications'}>
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            See all questions
                        </Button>
                    </Link>
                </Card>
            </Menu>

        </Box>
    );
};

export default Notification;
