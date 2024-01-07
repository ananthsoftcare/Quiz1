import "../quiz.css"
import { useState } from "react";
import { Button, Card, Typography, Paper } from '@mui/material';
import Link from "next/link";
import { Done, Close, Diamond } from '@mui/icons-material';


export default function page2() {
    const [buttonText, setButtonText] = useState("Commit")
    const [correct, setCorrect] = useState(false);
    const [wrong, setWrong] = useState(false);

    const question = {
        question: "How many meiotic divisions are needed for forming 100 grains of wheat?",
        choiceA: "100",
        choiceB: "25",
        choiceC: "50",
        choiceD: "20",
        correct: "choiceA"
    }

    const handleClick = (id) => {
        setButtonText('Submit');
        if (buttonText === 'Submit') {
            if (question.correct === event.target.id) {
                setCorrect(true);
                setWrong(false);
            }
            else {
                setWrong(true);
                setCorrect(false);
            }
        }
    };

    return (
        <>
            <div style={{ marginLeft: 150, marginBottom: 30, marginTop: 150 }} >
                <div id="quiz">
                    <div>
                        <h2 id="question">{question.question}</h2>


                        {correct ? (<><div class='markr'>
                            <input type="radio" id="choiceA" class="radio-custom" name="question1" />
                            <label for="choiceA">{question.choiceA}</label>&nbsp;&nbsp;
                        </div><br /></>) :
                            (wrong ? (<div class='markw' >
                                <><input type="radio" id="choiceA" class="radio-custom" name="question1" />
                                    <label for="choiceA">{question.choiceA}</label><select name="optionsb" id="optionsb">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>  <br /></></div>) :
                                (<><div class='wrapper'>
                                    <input type="radio" id="choiceA" class="radio-custom" name="question1" />
                                    <label for="choiceA">{question.choiceA}</label>&nbsp;&nbsp;
                                    <Button size="small" id="choiceA" className="button" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }} onClick={handleClick}>{buttonText}</Button></div><br /></>
                                ))}



                        {correct ? (<><div class=' markr'>
                            <input type="radio" id="choiceB" class="radio-custom" name="question1" />
                            <label for="choiceB">{question.choiceB}</label>&nbsp;&nbsp;
                        </div><br /></>) :
                            (wrong ? (<div class=' markw' >
                                <><input type="radio" id="choiceB" class="radio-custom" name="question1" />
                                    <label for="choiceB">{question.choiceB}</label><select name="optionsb" id="optionsb">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>  <br /></></div>) :
                                (<><div class='wrapper'>
                                    <input type="radio" id="choiceB" class="radio-custom" name="question1" />
                                    <label for="choiceB">{question.choiceB}</label>&nbsp;&nbsp;
                                    <Button size="small" id="choiceB" className="button" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                        onClick={handleClick}>{buttonText}</Button></div><br /></>
                                ))}

                        {correct ? (<><div class=' markr'>
                            <input type="radio" id="choiceC" class="radio-custom" name="question1" />
                            <label for="choiceC">{question.choiceC}</label>&nbsp;&nbsp;
                        </div><br /></>) :
                            (wrong ? (<div class=' markw' >
                                <><input type="radio" id="choiceC" class="radio-custom" name="question1" />
                                    <label for="choiceC">{question.choiceC}</label><select name="optionsb" id="optionsb">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>  <br /></></div>) :
                                (<><div class='wrapper'>
                                    <input type="radio" id="choiceC" class="radio-custom" name="question1" />
                                    <label for="choiceC">{question.choiceC}</label>&nbsp;&nbsp;
                                    <Button size="small" id="choiceC" className="button" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                        onClick={handleClick}>{buttonText}</Button></div><br /></>
                                ))}

                        {correct ? (<><div class=' markr'>
                            <input type="radio" id="choiceD" class="radio-custom" name="question1" />
                            <label for="choiceD">{question.choiceD}</label>&nbsp;&nbsp;
                        </div><br /></>) :
                            (wrong ? (<div class=' markw' >
                                <><input type="radio" id="choiceD" class="radio-custom" name="question1" />
                                    <label for="choiceD">{question.choiceD}</label><select name="optionsb" id="optionsb">
                                        <option value="option1" selected disabled>Choose where you went wrong:</option>
                                        <option value="I was too quick">I was too quick</option>
                                        <option value="I thought I know">I thought I know</option>
                                        <option value="I was almost right">I was almost right</option>
                                        <option value="The system validation is wrong">The system validation is wrong</option>
                                        <option value="I do not know">I do not know</option>
                                    </select>  <br /></></div>) :
                                (<><div class='wrapper'>
                                    <input type="radio" id="choiceD" class="radio-custom" name="question1" />
                                    <label for="choiceD">{question.choiceD}</label>&nbsp;&nbsp;
                                    <Button size="small" id="choiceD" className="button" variant="contained" style={{ color: 'white', height: 35, width: 90, MarginLeft: 25 }}
                                        onClick={handleClick}>{buttonText}</Button></div><br /></>
                                ))}

                    </div></div >
                < Typography > <Link href="./Home" style={{ textDecoration: 'none' }}>Skip Quiz</Link> </Typography >
            </div >
        </>

    )


}