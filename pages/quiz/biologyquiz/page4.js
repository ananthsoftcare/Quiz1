import "../quiz.css"
import { useState } from "react";
import { Button, Card, Typography, Paper } from '@mui/material';
import Link from "next/link";
import { Done, Close, Diamond } from '@mui/icons-material';


export default function page1() {
    const [flagA, setFlagA] = useState(false);
    const [flagB, setFlagB] = useState(false);
    const [flagC, setFlagC] = useState(false);
    const [flagD, setFlagD] = useState(false);
    const [wrong, setWrong] = useState(false)

    const [commitFlagA, setCommitFlagA] = useState(false);
    const [submitFlagA, setSubmitFlagA] = useState(false);
    const [commitFlagB, setCommitFlagB] = useState(false);
    const [submitFlagB, setSubmitFlagB] = useState(false);

    const question = {
        question: "Which is the most logical sequence with reference to life cycle of angiosperm?",
        choiceA: "Pollination, fertilization, seed formation, germination",
        choiceB: "Germination, endosperm formation, seed dispersal, double fertilization",
        choiceC: "Cleavage, fertilization, grafting, fruit formation",
        choiceD: "Maturation, mitosis, differentiation, fertilization",
        correct: "choiceA"
    }
    const clickAnswerA = (e) => {
        setFlagA(true)
        setFlagB(false)
        // setWrong(false)
    }
    const clickAnswerB = (e) => {
        setFlagB(true)
        setFlagA(false)
        // setWrong(false)
    }
    const commitButtonAction = (event) => {
        setCommitFlagA(true);
        setCommitFlagB(false)
    }
    const commitBButtonAction = (event) => {
        setCommitFlagB(true)
        setCommitFlagA(false);
    }
    const submitButtonAction = (event) => {
        setSubmitFlagA(true);
        setCommitFlagA(false);
        setSubmitFlagB(true);
        setCommitFlagB(false);
    }
    const submitBButtonAction = (event) => {
        setSubmitFlagB(true);
        setCommitFlagB(false);
        setSubmitFlagA(false);
        setCommitFlagA(false);
    }

    // const wrongAnswer = () => {
    //     setWrong(true)
    //     setFlagA(false)
    // }
    return (
        <>
            <div style={{ marginLeft: 150, marginBottom: 30, marginTop: 150 }} >
                <div id="quiz">
                    <div>
                        <h2 id="question">{question.question}</h2>
                        <ul>
                            <li> {submitFlagA ? (<><Card style={{ backgroundColor: 'LightGreen', width: '75%' }}>
                                <input type="radio" id="a" name="answer" class="radio-custom" onChange={clickAnswerA} color="secondary" /><label id="a_text" for="a">{question.choiceA}</label></Card>
                            </>) :
                                (<><input type="radio" id="a" name="answer" class="radio-custom" onChange={clickAnswerA} color="secondary" /><label id="a_text" for="a">{question.choiceA}</label></>)}
                                {flagA ? (((!commitFlagA && !submitFlagA) ? ((<Button size="small" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                    onClick={commitButtonAction}>Commit</Button>)) :
                                    (!submitFlagA ? (<Button size="small" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                        onClick={submitButtonAction}>Submit</Button>) :
                                        ("")))) : ("")}
                            </li>
                            <li >
                                {submitFlagB ? (<>
                                    <Card style={{ backgroundColor: 'pink', width: '75%' }}>
                                        <input type="radio" id="b" name="answer" class="radio-custom" onChange={clickAnswerB} color="secondary" /><label id="b_text" for="b">{question.choiceB}</label></Card>
                                </>) : (<><input type="radio" id="b" name="answer" class="radio-custom" onChange={clickAnswerB} color="secondary" /><label id="b_text" for="b">{question.choiceB}</label></>)}
                                {flagB ? (((!commitFlagB && !submitFlagB) ? ((<Button size="small" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                    onClick={commitBButtonAction}>Commit</Button>)) : (!submitFlagB ? (<Button size="small" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                        onClick={submitBButtonAction}>Submit</Button>) : ("")))) : ("")}
                                {/* <input type="radio" id="b" name="answer" class="radio-custom" onChange={wrongAnswer} />
                                <label id="b_text" for="b">{question.choiceB}</label> */}
                                {/* <select name="optionsb" id="optionsb">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>                                */}

                            </li>
                            <li>
                                {/* {(wrong ? (<><Card style={{ backgroundColor: 'pink' }}>
                                    <input type="radio" id="c" name="answer" class="answer" onChange={wrongAnswer} />
                                    <label id="c_text" for="c">{question.choiceC}</label><Close sx={{ color: 'red' }} />
                                    <select name="optionsc" id="optionsc">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>
                                </Card></>) */}
                                {/* : ( */}
                                <>
                                    <input type="radio" id="c" name="answer" class="radio-custom" />
                                    <label id="c_text" for="c">{question.choiceC}</label></>
                                {/* ))} */}
                            </li>
                            <li>
                                {/* {(wrong ? (<><Card style={{ backgroundColor: 'pink' }}>
                                    <input type="radio" id="d" name="answer" class="answer" onChange={wrongAnswer} />
                                    <label id="d_text" for="d">{question.choiceD}</label><Close sx={{ color: 'red' }} />
                                    <select name="optionsd" id="optionsd">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>
                                </Card></>) */}
                                {/* : ( */}
                                <><input type="radio" id="d" name="answer" class="radio-custom" />
                                    <label id="d_text" for="d">{question.choiceD}</label></>
                                {/* ))} */}
                            </li>
                        </ul>
                    </div>
                    {/* <Link href="./page2" style={{ textDecoration: 'none', color: "white" }}> <Button size="small" color='secondary' variant="contained" style={{ color: 'white', height: 50, width: 100, marginLeft: 200 }}>
                        Submit
                    </Button>
                    </Link> */}
                    {/* <Button size="small" variant="contained" style={{ color: 'white',height:50, paddingLeft:25 }}> */}
                    {/* <Link href="./Home" style={{ textDecoration: 'none', color:"white" }}> Back Home</Link> */}
                    {/* </Button> */}
                </div>

            </div >
            {/* <div style={{ marginLeft: 10 }}>Hello</div> */}
            < Typography > <Link href="./Home" style={{ textDecoration: 'none' }}>Skip Quiz</Link> </Typography >
            {/* </Paper> */}
        </>

    )


}