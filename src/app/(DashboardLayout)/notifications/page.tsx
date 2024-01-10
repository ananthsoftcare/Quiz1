
'use client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './styles.css';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Button, Card, Typography } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import SmsIcon from '@mui/icons-material/Sms';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link';



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

interface page {
    pathname: string;
    query: any;
  }

export default function page() {




    let questions = [
        {
            "Sid": 0,
            "subject": "Physics",
            "qcount": 1,
            // "color": 'rgb(0, 227, 150)',
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "creater": "Kelvin",
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
                    "creater": "Hardarashna Hardik",
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
                    "creater": "Calvin",
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
                    "creater": "Roshan",
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
                },
                {
                    "Qid": 2,
                    "question": "Replace the question mark in the above problem with the appropriate number.?",
                    "creater": "Adhitya",
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
            "qcount": 3,
            "questions": [
                {
                    "Qid": 0,
                    "question": "A particular species of plant produces light, non-sticky pollen in large numbers and its stigmas are long and feathery. These modifications facilitate pollination by",
                    "creater": "Anand",
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
                    "question": "Starting from the innermost part, the correct sequence of parts in an ovule is",
                    "creater": "Kurnal",
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
                },
                {
                    "Qid": 2,
                    "question": "There are 49 dogs signed up for a dog show. There are 36 more small dogs than large dogs. How many small dogs have signed up to compete? ",
                    "creater": "Kurnal",
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
                },
                {
                    "Qid": 2,
                    "question": "There are 49 dogs signed up for a dog show. There are 36 more small dogs than large dogs. How many small dogs have signed up to compete? ",
                    "creater": "Kurnal",
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
                },
                {
                    "Qid": 3,
                    "question": "There is a basket containing 5 apples, how do you divide the apples among 5 children so that each child has 1 apple while 1 apple remains in the basket?",
                    "creater": "Kurnal",
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
            "qcount": 4,
            "questions": [
                {
                    "Qid": 0,
                    "question": "The Rosenmund reaction can produce which carbonyl compounds?",
                    "creater": "GopalKrisnan",
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
                    "creater": "Shewag",
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
                },
                {
                    "Qid": 2,
                    "question": "Two girls were born to the same mother, at the same time, on the same day, in the same month and the same year and yet somehow they’re not twins. Why not?",
                    "creater": "Shewag",
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
                },
                {
                    "Qid": 3,
                    "question": "There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?",
                    "creater": "Shewag",
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




// const handleClickanswers = (e:any) =>{
// // console.log("e",e)

// router.push({'/notifications/answers', query: { userid:e}});
// }

    return (
        <form method="post" >
            <Card sx={{ p: 1, width: 'max(100%,500px)', mx: 'auto' }} className='scrollcontent'>
                <div className="rowhead">
					<div className="columnhead1" >
                    <b style={{ justifyContent: "center",marginLeft: "500px", fontSize: "23px", alignItems: "center", padding: "7px", display: "flex" }}>
							Questions</b>
					</div>
					<div className="columnhead2" style={{ justifyContent: "end", display: "flex"}}>
						{/* <Button style={{backgroundColor:'#b9b0b0',color:"white",borderRadius:"5px"}}>Filter features here:</Button>&nbsp; */}
<Typography ><b>Filters</b></Typography>&nbsp;
                    <select name="cars" id="cars">
  <option value="biology">Biology</option>
  <option value="chemistry">Chemistry</option>
  <option value="maths">Physics</option>
  <option value="biology">Communication</option>
  {/* <option value="chemistry">Chemistry</option> */}
  <option value="maths">Maths</option>
  <option value="social">Social Welfare</option>
</select>
                       
                    </div>
				</div>

                <TableContainer >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableBody>
                            {questions.map((question:any) => {
                                return (
                                    question.questions.map((qus:any) => {
                                        return ( 
                                            <div className='row' key={question.Sid}>
                                                <div className='column1' >
                                                    {question.subject === "Physics" ? <div className="container">
                                                        {/* <span className="icon"></span> */}
                                                        <span className="label" style={{  textAlign:"center",color: 'white',width:"80%",backgroundColor:"rgb(0, 227, 150)",borderRadius:"7px"}}><b>Physics</b></span>
                                                    </div> :
                                                        question.subject === "Maths" ? <div className="container">
                                                            {/* <span className="icon"></span> */}
                                                            <span className="label" style={{ textAlign:"center",color: 'white',width:"80%",backgroundColor:"rgb(0, 143, 251)",borderRadius:"7px"}}><b>Maths</b></span></div>
                                                            : question.subject === "Biology" ? <div className="container">
                                                                {/* <span className="icon"><BiotechIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                                                                <span className="label" style={{ textAlign:"center",color: 'white',width:"80%",backgroundColor:"rgb(254, 176, 25)",borderRadius:"7px"}}><b>Biology</b></span></div>
                                                                : question.subject === "Chemistry" ? <div className="container">
                                                                    {/* <span className="icon"><ScienceIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                                                                    <span className="label" style={{ textAlign:"center",color: 'white',width:"80%",backgroundColor:"rgb(255, 69, 96)",borderRadius:"7px" }}><b>Chemistry</b></span></div>
                                                                    : question.subject === "Communication" ? <div className="container">
                                                                        {/* <span className="icon"><SmsIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                                                                        <span className="label" style={{  textAlign:"center",color: 'white',width:"80%",backgroundColor:"rgb(119, 93, 208) ",borderRadius:"7px"}}><b>Communication</b></span></div>
                                                                        : question.subject === "SocialWelfare" ? <div className="container">
                                                                            {/* <span className="icon"><PublicIcon style={{ height: '38px', width: '38px' }} color="info" /></span> */}
                                                                            <span className="label" style={{  textAlign:"center",color: 'white',width:"80%",backgroundColor:"rgb(0, 143, 251) ",borderRadius:"7px" }}><b>Social Welfare</b></span></div>
                                                                            : ""}
                                                    {/* question.subject === "Maths" ? <span style={{ color: 'rgb(0, 143, 251)' }} > Maths</span> : question.subject === "Biology" ? <span style={{ color: 'rgb(254, 176, 25)' }} >Biology</span> :
                                                             question.subject === "Chemistry" ? <span style={{ color: 'rgb(255, 69, 96)' }}> Chemistry</span> : question.subject === "Communication" ? <span style={{ color: "rgb(119, 93, 208) " }} >Communication</span> :
                                                                 question.subject === "SocialWelfare " ? <span style={{ color: 'rgb(0, 143, 251) ' }} color='rgb(0, 143, 251) '> Social Welfare</span> : ""} */}
                                                </div>
                                                <div className='column2' >
                                                    <p style={{margin:"2px"}}>{qus.question}</p>
                                                </div>
                                                <div className='column3'>
                                                    <p style={{margin:"2px",color:"blue"}}> {qus.creater}</p>
                                                    {/* <Link href= 'notifications/answers'>Answers</Link> */}
                                                    {/* <p>20</p> */}
                                                </div>
                                                <div className='column4'>
                                                    <Link  href={{pathname:"/notifications/answers",query:qus}}>
                                                    <p style={{margin:"2px"}}>
                                                     Answers &nbsp;({qus.answers.length})</p>
                                                    </Link>
                                                  
                                                </div>
                                            </div>
                                            // <StyledTableRow key={question.Sid}>
                                            //     <StyledTableCell style={{ minWidth: 200, width: 900, padding: 15 }} > {question.subject === "Physics" ? <span style={{color:'rgb(0, 227, 150)'}} >  <WalletIcon style={{ height: '70px', width: '50px', marginLeft: 9 }} color="success" /> Physics</span>:
                                            //    question.subject === "Maths" ? <span style={{color:'rgb(0, 143, 251)'}} > Maths</span> : question.subject === "Biology"? <span style={{color:'rgb(254, 176, 25)'}} >Biology</span>:
                                            //    question.subject === "Chemistry" ? <span style={{ color:'rgb(255, 69, 96)'}}> Chemistry</span> : question.subject === "Communication"? <span style={{color:"rgb(119, 93, 208) "}} >Communication</span>:
                                            //    question.subject === "SocialWelfare " ? <span style={{color:'rgb(0, 143, 251) '}}color='rgb(0, 143, 251) '> Social Welfare</span>:""}
                                            //         <StyledTableCell ><Link style={{ textDecoration: 'none' }} href="notifications/answers"> {qus.question} </Link> </StyledTableCell>
                                            //     </StyledTableCell>
                                            // </StyledTableRow>
                                        )
                                    })
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </form>
    )
}




