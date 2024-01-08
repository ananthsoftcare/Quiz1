"use client"
import { styled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Paper,
    Avatar,
    CardHeader,
    Collapse,
    makeStyles,
    Grid,

} from "@mui/material";
import background from "../quiz/images/Quiz_background.jpg"
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import TableContainer from "@mui/material/TableContainer";
import React, { Fragment } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
// import QuestionAnsCard from "./Question";
// import DashboardBooks from "./DashBoardBook";
import { createTheme } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "@/utils/theme";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import './page.scss'

// import { lightGreen } from '@mui/material/colors';
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} style={{ padding: 0 }} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
export default function Page1() {
    let questions = [
        {
            "Sid": 0,
            "subject": "Physics",
            "qcount": 2,
            "questions": [
                {
                    "Qid": 1,
                    "question": "How many meiotic divisions are needed for forming 100 grains of wheat?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                }
            ]
        },
        {
            "Sid": 1,
            "subject": "Maths",
            "qcount": 2,
            "questions": [
                {
                    "Qid": 0,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                }
            ]
        },
        {
            "Sid": 2,
            "subject": "Biology",
            "qcount": 2,
            "questions": [
                {
                    "Qid": 0,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                }
            ]
        },
        {
            "Sid": 3,
            "subject": "Chemistry",
            "qcount": 2,
            "questions": [
                {
                    "Qid": 0,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "EC theory?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 1,
                            "author": "Karan1",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "23-04-2023",
                            "answer": "Physics ec2"
                        }
                    ]
                }
            ]
        }
    ]


    // function handleMouseOver(id: string) {
    //     setIsHovered({
    //         id: id,
    //         isHovered: true
    //     });
    // }

    // function handleMouseOut(id: string) {
    //     setIsHovered({
    //         id: id,
    //         isHovered: false
    //     });
    // }
    const [expandedId, setExpandedId] = React.useState(-1);
    const [expandSubjectId, setExpandSubjectId] = React.useState(-1);
    const handleExpandClick = (id: number) => {
        setExpandedId(expandedId === id ? -1 : id);
    };
    return (
        <><h4> P2P queries from the courses you have enrolled</h4>
            <Box sx={{
                overflow: "auto", marginTop: '1px solid #ddd',
                backgroundImage: `url(${background})`,
                padding: 2,
            }}>
                <Box sx={{ width: "100%", display: "table", tableLayout: "fixed", }}>
                    <Grid container padding={3} >
                        {questions.map((question, index) => {
                            return (
                                <Grid item container xs={12} spacing={2} key={question.Sid} style={{ justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                    <div key={question.Sid} >
                                        {question.questions.map((ques, index) => {
                                            return (
                                                <div key={index}>
                                                    <Grid item xs={12} key={ques.Qid} >
                                                        <Card key={ques.Qid} style={{ minWidth: 200, width: 900, padding: 15 }} >
                                                            {/* <CardActions> */}
                                                            <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{question.subject}</Typography>
                                                            <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>{ques.question}</Typography>
                                                            {/* <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{ques.question}</Typography> */}
                                                            {/* </CardActions> */}
                                                            <CardActions disableSpacing>
                                                                <Grid container justifyContent="left">
                                                                    <ExpandMore
                                                                        onClick={() => {
                                                                            // setCollapseName("Hide answer")
                                                                            setExpandedId(ques.Qid);
                                                                            setExpandSubjectId(question.Sid);
                                                                        }}
                                                                        expand={expandedId === ques.Qid && expandSubjectId === question.Sid}
                                                                        aria-expanded={expandedId === ques.Qid}
                                                                        aria-label="show more"
                                                                    >
                                                                        <ExpandMoreIcon style={{ color: '#145DA0' }} />
                                                                    </ExpandMore>
                                                                </Grid>
                                                            </CardActions>
                                                            <Collapse in={expandedId === ques.Qid && expandSubjectId === question.Sid} timeout="auto" unmountOnExit>
                                                                <CardContent>
                                                                    {ques.answers.map((ans, index) => {
                                                                        return (
                                                                            <div key={index} style={{ padding: 10 }}>
                                                                                <Card style={{ padding: 15 }}>
                                                                                    <Typography style={{ fontSize: 12, fontWeight: 'bold' }}>{ans.postedDate}</Typography>
                                                                                    <Typography style={{ fontSize: 14, fontWeight: 'bold' }}>{ans.author}</Typography>
                                                                                    <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>{ans.answer}</Typography>
                                                                                </Card>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                    {/* <div style={{ fontSize: 12 }}>{ques.}</div> */}
                                                                </CardContent>
                                                            </Collapse>
                                                        </Card>&nbsp;
                                                    </Grid>
                                                </div>
                                            )
                                        })}</div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                <Grid>

                </Grid>
            </Box>


        </>
    );
}