
'use client';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './answers.css';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { Card, Typography } from '@mui/material';

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));


const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
	<Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.arrow}`]: {
		color: theme.palette.common.black,
	},
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: theme.palette.common.black,
	}
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

export default function Page({ searchParams }: {
    searchParams: {
        // Sid: number,
        //     subject: string,
        //     qcount: number,
        //     answers:Array<{
        //         aid: number,
        //         author: string,
        //         postedDate: string,
        //         answer: string
        //     }>


        // {
        //  Sid: number,
        //  subject: string,
        //  qcount: any,
        //  questions:Array<{
        Qid: number,
        question: string,
        acount: number,
        answers: Array<{
            aid: string,
            author: string,
            postedDate: string,
            answer: string
        }>
        //  }>


        // }
    }
}) {
   
    // const data = router.query;
    // console.log("data",data)

    let questions1 = [
        {
            "Sid": 0,
            "subject": "Physics",
            "qcount": 1,
            "questions": [
                {
                    "Qid": 1,
                    "question": "The light energy emitted by a star is due to",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Karan kishoreKumar ",
                            "postedDate": "18-04-2023",
                            "answer": "Joining of nuclei i just started with React and Next.js and I'm messing around with hooks and i got stuck, i created a vertical menu, i want to display the content below each title, but only one at a time taking in mind these 2 options"
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
                            "answer": "Isobars i just started with React and Next.js and I'm messing around with hooks and i got stuck, i created a vertical menu, i want to display the content below each title, but only one at a time taking in mind these 2 options"
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
                            "answer": "All i just started with React and Next.js and I'm messing around with hooks and i got stuck, i created a vertical menu, i want to display the content below each title, but only one at a time taking in mind these 2 options"
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
            "qcount": 3,
            "questions": [
                {
                    "Qid": 0,
                    "question": "A particular species of plant produces light, non-sticky pollen in large numbers and its stigmas are long and feathery. These modifications facilitate pollination by",
                    "acount": 3,
                    "answers": [
                        {
                            "aid": 0,
                            "author": "Akshara Hassan",
                            "postedDate": "23-04-2023",
                            "answer": "Insects i just started with React and Next.js and I'm messing around with hooks and i got stuck, i created a vertical menu, i want to display the content below each title, but only one at a time taking in mind these 2 options"
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
            "qcount": 4,
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
                            "author": "Karan kishoreKumar2",
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
                            "author": "Karan kishoreKumar",
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
        },
        {
            "Sid": 3,
            "subject": "Chemistry",
            "qcount": 5,
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
                            "answer": "When Faraday first made public his discovery that relative motion between a bar magnet and a wire loop produced a small current in the latter, he was asked"
                        },
                        {
                            "aid": 1,
                            "author": "Suja",
                            "postedDate": "23-04-2023",
                            "answer": "Benzaldehyde"
                        },
                        {
                            "aid": 2,
                            "author": "Karan kishoreKumar2",
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
                            "author": "Karan kishoreKumar",
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
    // const hrManagerResponses = discussion.filter(response => response.employeeRoleName === HR_MANAGER);

    // const  matchQuestions = questions1.filter(responsequestions => console.log("responsequestions",responsequestions.qcount === searchParams.qcount) )
    // console.log("matchQuestions",matchQuestions)
    const questionMatch = questions1.map(response => response.questions)
    const match = questionMatch.map(response => response[0].answers)
    const router = useRouter();
    // const questionandAnswer = questionMatch.filter(response1 => console.log("response"))
    //  response.question === searchParams.question)
    // console.log("questionMatch",questionMatch)
    return (
        <form method="post">
            <Card  className="scrollcontent" sx={{ p: 1,  mx: 'auto', }}>
              
            <div className="rowanswers">
                    <div className="columnanswers1" >
                    <BootstrapTooltip title="Back">
                    <button onClick={()=>router.push('/notifications')} style={{backgroundColor:"white",border:"grey"}}>
                    <svg cursor="pointer" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="#0085db" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" /> </svg>

  </button>
  </BootstrapTooltip>
                        {/* <Typography >Questions</Typography> */}
                        <b style={{ fontSize: "20px",textAlign:"end"}}>
                        Query</b>
                    </div>
                    <div className="columnanswers2" style={{display:"flex"}}>
                        {/* <Button style={{backgroundColor:'#b9b0b0',color:"white",borderRadius:"5px"}}>Filter features here:</Button>&nbsp; */}
                        {/* <Typography ><b>Physics</b></Typography>&nbsp; */}
                        <span className="label" style={{display:"flex", justifyContent: "center",padding:"5px 5px 5px 5px", color: 'white',  backgroundColor: "rgb(0, 227, 150)", borderRadius: "7px" }}><b>Physics</b></span> 
                    </div>
                </div>
               
                <TableContainer>
                    <Table aria-label="customized table">
                        <TableBody>
                            <div style={{backgroundColor:"#eaf8fd",padding:" 5px 0 0 15px",borderRadius:"5px",margin:"0 0 5px 0"}}>
                                <b style={{ fontSize: "15px",fontWeight:"500"}}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 48 48"><path fill="skyblue" d="M24 5.5c-5.52 0-10 4.48-10 10a1.25 1.25 0 1 0 2.5 0c0-4.14 3.36-7.5 7.5-7.5c4.14 0 7.5 3.36 7.5 7.5c0 1.875-.47 2.94-1.101 3.745c-.51.65-1.105 1.134-1.848 1.736c-.304.247-.632.514-.99.82c-1.17 1.003-2.408 2.267-3.33 4.29c-.916 2.004-1.481 4.662-1.481 8.409v.25a1.25 1.25 0 1 0 2.5 0v-.25c0-3.503.529-5.783 1.254-7.372c.718-1.57 1.667-2.557 2.685-3.429c.232-.2.485-.405.748-.618c.818-.663 1.732-1.404 2.43-2.294C33.377 19.497 34 17.875 34 15.5c0-5.52-4.48-10-10-10M24 42a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"/></svg> */}
                                    {searchParams.question}</b>
                            </div>
                            <div className="answer-container">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="grey" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"/></svg>
  <span className="answer-text">Answers</span>
</div>

                            <>
                                {match.map((response,index) => (
                                    // return(

                              
<div className="rowans" style={{borderRadius:"5px"}}  key={response[1].aid}>
{/* <p style={{margin:" 2px"}}>
  <svg style={{display: "inline",padding:"2px"}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="skyblue" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"/></svg>
  <span style={{display: "inline",padding:"2px"}}>{response[0].answer}</span>
</p> */}
  {/* <div className="columnans1">
  <p style={{margin:"5px 0 5px 0"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="grey" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"/></svg>
</p>
  </div> */}
  <div className="columnans3">
     <span style={{display: "inline"}}>{response[0].answer}</span>
  </div>
  <div className="columnans2">
    {/* <h2>Column 2</h2> */}

    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><g fill="none" stroke="#0085db" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="7" r="3"/></g></svg>
    <p style={{margin:"2px",color:"blue",display:"flex",flexDirection:"column",justifyContent:"center"}}>   {response[0].author}</p>&emsp;
    
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><g fill="none"><rect width="18" height="15" x="3" y="6" stroke="navy" rx="2"/><path fill="navy" d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z"/><path stroke="navy" stroke-linecap="round" d="M7 3v3m10-3v3"/><rect width="4" height="2" x="7" y="12" fill="navy" rx=".5"/><rect width="4" height="2" x="7" y="16" fill="navy" rx=".5"/><rect width="4" height="2" x="13" y="12" fill="navy" rx=".5"/><rect width="4" height="2" x="13" y="16" fill="navy" rx=".5"/></g></svg>
    <p style={{margin:"2px",display:"flex",flexDirection:"column",justifyContent:"center"}}>  {response[0].postedDate}</p>
  </div>
  {/* <div className="columnans3">
    <p style={{margin:"2px"}}>{response[0].postedDate}</p>
  </div> */}
</div>
 

                                    //   <StyledTableRow key={response[0].aid} >
                                    //                      <StyledTableCell> {response[0].answer}
                                    //                          <div>
                                    //                              <StyledTableCell >{response[0].author} </StyledTableCell>
                                    //                              <StyledTableCell >{response[0].postedDate} </StyledTableCell>
                                    //                          </div>
                                    //                      </StyledTableCell>
                                    //                  </StyledTableRow>
                                    // <div className='column3'>
                                    //     <p style={{ margin: "2px" }}> {qus.creater}</p>
                                    //     {/* <Link href= 'notifications/answers'>Answers</Link> */}
                                    //     {/* <p>20</p> */}
                                    // </div>
                                    // <div className='column4'>


                                    // </div>
                                ))}
                            </>
                            {/* // <StyledTableRow key={ans.aid} >
                                                    //     <StyledTableCell> {ans.answer}
                                                    //         <div>
                                                    //             <StyledTableCell >{ans.author} </StyledTableCell>
                                                    //             <StyledTableCell >{ans.postedDate} </StyledTableCell>
                                                    //         </div>
                                                    //     </StyledTableCell>
                                                    // </StyledTableRow> */}
                            {/* ) */}
                            {/* })
                                        )
                                    })
                                )
                            })} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </form >
    )
}








