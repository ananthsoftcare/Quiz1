
'use client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles.css';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Card, Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function page() {
    let questions = [
        {
            "Sid": 0,
            "subject": "Physics",
            "qcount": 2,
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 1,
                            "author": "Kirana",
                            "postedDate": "30-05-2023",
                            "answer": "Joining of nuclei"
                        },
                        {
                            "aid": 2,
                            "author": "Sanjana",
                            "postedDate": "03-04-2023",
                            "answer": "Burning of nuclei"
                        }
                    ]
                },
                {
                    "Qid": 2,
                    "question": "A radioactive nucleus emits a beta particle, then the parent and daughter nuclei are",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Sanu",
                            "postedDate": "07-08-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 1,
                            "author": "Prem",
                            "postedDate": "23-04-2023",
                            "answer": "Isobars"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2023",
                            "answer": "Isotopes"
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
                    "question": "What are the solutions to 3(x+5)<=3x+20?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Nina",
                            "postedDate": "13-04-2023",
                            "answer": "All real numbers"
                        },
                        {
                            "aid": 1,
                            "author": "Banu",
                            "postedDate": "05-04-2022",
                            "answer": "all real numbers"
                        },
                        {
                            "aid": 2,
                            "author": "Lola",
                            "postedDate": "18-04-2023",
                            "answer": "No Solution"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "What is the product of 75.0 feet and 2.05 feet written with the correct number of significant digits?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Lola",
                            "postedDate": "10-04-2023",
                            "answer": "154 ft^2"
                        },
                        {
                            "aid": 1,
                            "author": "Daran",
                            "postedDate": "05-04-2023",
                            "answer": "150 ft^2"
                        },
                        {
                            "aid": 2,
                            "author": "Lali",
                            "postedDate": "23-04-2021",
                            "answer": "154 ft^2"
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
                    "question": "A particular species of plant produces light, non-sticky pollen in large numbers and its stigmas are long and feathery. These modifications facilitate pollination by",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Prince",
                            "postedDate": "23-04-2023",
                            "answer": "insects"
                        },
                        {
                            "aid": 1,
                            "author": "Kali",
                            "postedDate": "23-04-2023",
                            "answer": "insects"
                        },
                        {
                            "aid": 2,
                            "author": "Naina",
                            "postedDate": "16-04-2023",
                            "answer": "insects"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": ". Starting from the innermost part, the correct sequence of parts in an ovule is",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Darun",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 1,
                            "author": "Frank",
                            "postedDate": "23-04-2023",
                            "answer": "embryo sac, nucellus, integument, egg "
                        },
                        {
                            "aid": 2,
                            "author": "Deepa",
                            "postedDate": "23-04-2023",
                            "answer": "egg, integument, embryo sac, nucellus"
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
                    "question": "The Rosenmund reaction can produce which carbonyl compounds?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Narain",
                            "postedDate": "23-04-2023",
                            "answer": "Benzaldehyde"
                        },
                        {
                            "aid": 1,
                            "author": "Suja",
                            "postedDate": "23-04-2023",
                            "answer": "Benzaldehyde"
                        },
                        {
                            "aid": 2,
                            "author": "Karan2",
                            "postedDate": "19-05-2023",
                            "answer": "No Answer"
                        }
                    ]
                },
                {
                    "Qid": 1,
                    "question": "Reactions occur between aldehydes and ketones?",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 1,
                            "author": "Karen",
                            "postedDate": "23-04-2023",
                            "answer": "nucleophilic addition"
                        },
                        {
                            "aid": 2,
                            "author": "Paji",
                            "postedDate": "23-04-2023",
                            "answer": "electrophilic addition"
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <div className='mainpage' style={{ position: "fixed", width: "120%" }} >
            {/* <Box height="100%"> */}
            {/* <button>back</button> */}
            <PageContainer title="Content" description="this is Content">
                <b style={{ justifyContent: "center", fontSize: "23px", alignItems: "center", padding: "7px", display: "flex" }}>Answers</b>
                <div className='borderLink'>
                    <div className='main'>
                        <div className='scrollcontent' >
                            <section id="introduction">
                                {/* <h2 style={{ fontSize: "16px" }}>Introduction</h2> */}

                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        {/* <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                            </TableRow>
                                        </TableHead> */}
                                        <TableBody>

                                            {questions.map((ques) => {
                                                return (
                                                    ques.questions.map((qus) => {
                                                        return (
                                                            qus.answers.map((ans) => {
                                                                return (
                                                                    <StyledTableRow key={ans.aid} >
                                                                        <StyledTableCell style={{ minWidth: 200, width: 900, padding: 15 }} > {ans.answer}


                                                                            <div>
                                                                                <StyledTableCell >{ans.author} </StyledTableCell>
                                                                                <StyledTableCell >{ans.postedDate} </StyledTableCell>
                                                                            </div>
                                                                        </StyledTableCell>
                                                                    </StyledTableRow>
                                                                )
                                                            })
                                                        )
                                                    })


                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </section>

                        </div>

                    </div>
                </div>




            </PageContainer >

        </div >


    )
}








