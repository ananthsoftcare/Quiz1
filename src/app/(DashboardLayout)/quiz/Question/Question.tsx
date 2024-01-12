'use client'
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Autocomplete, Box, Button, Card, FormControl, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { IQuestionComponentProps } from '../../types'
import Answers from '../Answers'
import cardquizimage from '../images/quiz.png'
import { ChangeEvent, MouseEvent } from 'react'
import '../Answers/quiz.css';
import Modal from '@mui/material/Modal';
import React from "react";
import { IconArrowBigLeft } from '@tabler/icons-react';
import CountdownTimer from '../Timer';

const style = {
  position: 'absolute' as 'absolute',
  top: '78%',
  left: '70%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(222 253 253)',
  border: '2px solid #k',
  borderRadius: '5px',
  boxShadow: 2,
  p: 2,
};



const Question: FC<IQuestionComponentProps> = ({
  question,
  number,
  correctAnswer,
  falseAnswers,
  score,
  questionsCount,
  nextQuestion,
  previousQuestion,
  updateScore,
  showLoader,
}) => {
  const [questionProps, setQuestionProps] = useState({
    selectedAnswer: '',
    hasAnswered: false,
  })
  const [openModal, setOpenModal] = useState(false)
  const [wrongans, setWrongAns] = useState('')

  const router = useRouter()
  const loadedRef = useRef(false)
  useEffect(() => {
    if (!loadedRef.current) {
      loadedRef.current = true;
    }
    if (wrongans != "") {
      nextQuestion()
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
    // if (questionProps.selectedAnswer === correctAnswer) {

    // }
    if (questionProps.selectedAnswer === correctAnswer) {
      updateScore() // + 1
    }

    setQuestionProps(prevProps => ({ ...prevProps, hasAnswered: true }))
  }

  const handleNextClick = () => {
    if (questionProps.selectedAnswer === correctAnswer) {
      nextQuestion()
    } else {
      setOpenModal(true)
    }
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


  const currencies = [
    {
      label: 'Reacted quickly',
    },
    {
      label: 'It was Complicated',
    },
    {
      label: 'Not Prepared',
    },
    {
      label: 'Thought I was right',
    },
    {
      label: 'Faulty question',
    },
    {
      label: 'Other'
    }
  ];
  const handleChangeAuto = () => {
    // setWrongAns(event)
    nextQuestion()
  }





  return (
    <Card sx={{
      p: 2, backgroundColor: '#fff', width: '100%',
    }}>
      <header className='progress'>
        <progress max={questionsCount + 1} value={number + Number(questionProps.selectedAnswer !== null)} />
        <span>Question {number}/ {questionsCount}</span>
      <CountdownTimer initialSeconds={300} />
      </header>
      <Typography
        display="block"
        textAlign="center"
        style={{ fontWeight: 'bold' }}
        mb={1}
      >
        {question}
      </Typography>
      {/* {answer && <Next/>} */}
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
        justifyContent="space-between"
        mt={1}
        gap={3}
      >
        <Button
          variant="outlined"
          size="large"
          startIcon={<IconArrowBigLeft />}
          disabled={number === 1 ? true : false}
          onClick={previousQuestion}
        >
          Back
        </Button>
        {questionProps.hasAnswered === false ? (
          <Button
            variant="outlined"
            size="large"
            endIcon={<CheckRoundedIcon />}
            onClick={handleSubmitClick}
            disabled={questionProps.selectedAnswer != "" ? false : true}
          >
            Submit
          </Button>
        ) : ""}
        {openModal ? (
          <div>
            <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#713593', padding: 3, borderRadius: '5px', paddingLeft: 10 }}>  Choose why you went wrong ?</Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <Autocomplete
                    disablePortal
                    size='small'
                    id="combo-box-demo"
                    options={currencies}
                    onChange={handleChangeAuto}
                    sx={{ width: 310, display: 'flex', color: '#fff', backgroundColor: '#fff', border: '1px solid #fff' }}
                    renderInput={(params) => <TextField  {...params}
                      size='small'
                      label="Choose why you went wrong"
                      variant='outlined'
                    />}
                  />
                </Typography>
              </Box>
            </Modal>
          </div>
        ) : ""}
        {questionProps.hasAnswered ? (
          <Button
            variant="contained"
            size="large"
            endIcon={<SendRoundedIcon />}
            disabled={questionProps.hasAnswered ? false : true}
            onClick={handleNextClick}
          >
            Next
          </Button>
        ) : ""}

      </Box>
      <Box
        sx={{
          // display: 'flex',
          marginTop: 2,
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
    </Card >
  )
}

export default Question
