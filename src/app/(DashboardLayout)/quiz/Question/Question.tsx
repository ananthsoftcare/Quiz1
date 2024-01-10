'use client'
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Box, Button, Card, Fade, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { IQuestionComponentProps } from '../../types'
import Answers from '../Answers'
import cardquizimage from '../images/quiz.png'
import { ChangeEvent, MouseEvent } from 'react'
import '../Answers/quiz.css'


const Question: FC<IQuestionComponentProps> = ({
  question,
  number,
  correctAnswer,
  falseAnswers,
  score,
  questionsCount,
  nextQuestion,
  updateScore,
  showLoader,
}) => {
  const [questionProps, setQuestionProps] = useState({
    selectedAnswer: '',
    hasAnswered: false,
  })

  const router = useRouter()
  const loadedRef = useRef(false)
  useEffect(() => {
    if (!loadedRef.current) {
      console.log("run")
      loadedRef.current = true;
    }
  }, []);
  const ALL_ANSWERS_SHUFFLED = useRef(
    [correctAnswer, ...falseAnswers].sort(() => Math.random() - 0.5)
  )


  const originArr = [correctAnswer, ...falseAnswers]

  // **** functions ****
  const handleSelectAnswer = (answer: string) => {
    setQuestionProps(prevProps => ({ ...prevProps, selectedAnswer: answer }))
  }

  const handleSubmitClick = () => {
    // check if has answered
    // if (!questionProps.hasAnswered) {
    //   show alert
    // }

    if (questionProps.selectedAnswer === correctAnswer) {
      updateScore() // + 1
    }

    setQuestionProps(prevProps => ({ ...prevProps, hasAnswered: true }))
  }

  const handleNextClick = () => {
    if (number === questionsCount) {
      showLoader()
      router.push(
        // {
        //   pathname: '/result',
        //   query: { result: `${score}/${questionsCount}` },
        // },
        '/result'
      )
      return
    }
    nextQuestion()
  }

  const handleSkipBtnClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    // showLoader()

    router.push(
      // {
      //     pathname: '/quiz',
      //     query: { questionNumber, ...options },
      // },
      '/'
    )
  }

  return (
    <Card sx={{
      p: 2, backgroundColor: '#fff', width: '100%',
    }}>
      <header className='progress'>
        <progress max={questionsCount + 1} value={number + Number(questionProps.selectedAnswer !== null)} />
        <span>Question {number}/ {questionsCount}</span>
      </header>
      <Typography
        display="block"
        textAlign="center"
        style={{ fontWeight: 'bold' }}
        mb={1}
      >
        {question}
      </Typography>

      <Box
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <Answers
          correctAnswer={correctAnswer}
          answers={ALL_ANSWERS_SHUFFLED.current}
          hasAnswered={questionProps.hasAnswered}
          updateScore={handleSelectAnswer}
        />
      </Box>
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        mt={1}
        gap={3}
      >
        <Button
          variant="outlined"
          size="large"
          endIcon={<CheckRoundedIcon />}
          onClick={handleSubmitClick}
          disabled={questionProps.hasAnswered ? true : false}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          size="large"
          endIcon={<SendRoundedIcon />}
          disabled={questionProps.hasAnswered ? false : true}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </Box>
      <Box
        sx={{
          // display: 'flex',
          textAlign: 'start',
          alignItems: 'start',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <Button
          sx={{ display: 'block', textAlign: 'left', color: '#073763', fontWeight: 'bold', backgroundColor: '#faa917' }}
          onClick={handleSkipBtnClick}
        >Skip Quiz</Button>
      </Box>
    </Card>
  )
}

export default Question
