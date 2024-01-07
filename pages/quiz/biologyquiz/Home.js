'use client';
import dynamic from "next/dynamic";
import { useTheme } from '@mui/material/styles';
import "../quiz.css";
import { Card, CardMedia, Button, Typography, CardHeader, IconButton, Paper } from '@mui/material';
import Link from "next/link";
import background from '../../images/biology_banner.png';
import { IconBulb } from "@tabler/icons-react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
// import { TabPanel  } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Home() {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const errorlight = '#fdede8';

  // const quizData = [
  //   {
  //   question: "Which player has won the most IPL trophies?",
  //   a: "M S Dhoni",
  //   b: "Rohit Sharma",
  //   c: "K L Rahul",
  //   d: "Jasprit Bumrah",
  //   correct: "b" },

  //   {
  //   question: "Which player has hit the most fours in IPL?",
  //   a: "Suresh Raina",
  //   b: "Shikhar Dhawan",
  //   c: "Virat Kohli",
  //   d: "Rohit Sharma",
  //   correct: "b" },

  //   {
  //   question: "Where was the final of the inaugural IPL season held?",
  //   a: "D Y Patil Stadium",
  //   b: "Eden Gardens",
  //   c: "Wankhede Stadium",
  //   d: "Brabourne CCI",
  //   correct: "a" },

  //   {
  //   question: "Which player bagged the 'Emerging Player of the Tournament' award in IPL 2008?",
  //   a: "Rohit Sharma",
  //   b: "Shreevats Goswami",
  //   c: "Suresh Raina",
  //   d: "Virat Kohli",
  //   correct: "b" }];

  // const quiz = document.getElementById("quiz");
  // const answerEls = document.querySelectorAll(".answer");
  // const questionEl = document.getElementById("question");
  // const a_text = document.getElementById("a_text");
  // const b_text = document.getElementById("b_text");
  // const c_text = document.getElementById("c_text");
  // const d_text = document.getElementById("d_text");
  // const submitBtn = document.getElementById("submit");

  // let currentQuiz = 0;
  // let score = 0;

  // loadQuiz();

  // function loadQuiz() {
  // deselectAnswers();

  // const currentQuizData = quizData[currentQuiz];

  // questionEl.innerText = currentQuizData.question;
  // a_text.innerText = currentQuizData.a;
  // b_text.innerText = currentQuizData.b;
  // c_text.innerText = currentQuizData.c;
  // d_text.innerText = currentQuizData.d;
  // }

  // function getSelected() {
  // let answer = undefined;
  // answerEls.forEach(answerEl => {
  // if (answerEl.checked) {
  // answer = answerEl.id;
  // }
  // });
  // return answer;
  // }

  // function deselectAnswers() {
  // answerEls.forEach(answerEl => {
  // answerEl.checked = false;
  // });
  // }

  // submitBtn.addEventListener("click", () => {
  // const answer = getSelected();
  // if (answer) {
  // if (answer === quizData[currentQuiz].correct) {
  // score++;
  // }
  // currentQuiz++;
  // if (currentQuiz < quizData.length) { loadQuiz(); } else { quiz.innerHTML=` <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
  //     <button onclick="#">Reload</button>
  //     `;
  //     }
  //     }
  //     });

  return (<>
    <div style={{ marginLeft: 50, marginTop: 100 }}>

      <h2>Biology Quiz </h2>
      <Card className='cardbio' id='cardbio' variant="outlined" style={{ width: '400px', height: '200px' }}>
      </Card>
      <Link href="./page1" style={{ textDecoration: 'none', color: "white" }}>
        <Button size="small" color='secondary' variant="contained" style={{ color: 'white', height: 50, width: 150, marginLeft: 120, marginTop: 30 }}>
          Start Quiz
        </Button></Link>
      <Typography ><Link href="/" style={{ textDecoration: 'none', color: "black" }}> Cancel Quiz</Link> </Typography>
    </div></>

  )
}