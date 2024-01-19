'use client'
import { useRouter } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Autocomplete, Box, Button, Card, CardActions, FormControl, Grid, IconButton, IconButtonProps, MenuItem, TextField, Typography, styled } from '@mui/material'
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
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CloseOutlined } from '@mui/icons-material';
import FAB from '../../components/dashboard/Fab';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(222 253 253)',
  border: '2px solid #k',
  borderRadius: '5px',
  boxShadow: 2,
  p: 1,
};

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
  const [isChooseWrongAns, setIsChooseWrongAns] = useState(false)

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
    setTimeout(() => {
      nextQuestion()
    }, 1000)
  }

  const [hintOpens, setHindOpen] = useState(false);
  const [rotate, setRotate] = useState(false)




  const mouseEnter = () => {
    setHindOpen(true);
    setRotate(true)
  }

  const mouseLeave = () => {
    setHindOpen(false)
    setRotate(false)
  };

  return (
    <div>
      <Card sx={{
        p: 2, backgroundColor: '#fff', width: '100%',
      }}>
        <header className='progress'>
          <progress max={questionsCount + 1} value={number + Number(questionProps.selectedAnswer !== null)} />
          <Box sx={{ color: '#fff', borderRadius: '4px', padding: 0.5, backgroundColor: 'rgb(145 154 231)' }}>
            Question {number}/ {questionsCount}
          </Box>
          {/* <span style={{ color: '#fff', borderRadius: '4px', padding: 2, backgroundColor: 'rgb(145 154 231)' }}>Question {number}/ {questionsCount}</span> */}
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
        {/* <Box
          component="div"
          display="flex"
          justifyContent="space-between"
          mt={1}
          gap={3}
        >

        </Box>&nbsp; */}

        <Grid container item xs={12} direction={'row'} display={'flex'}>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              size="large"
              startIcon={<IconArrowBigLeft />}
              disabled={number === 1 ? true : false}
              onClick={previousQuestion}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={6} justifyContent={'flex-start'} alignItems={'flex-start'} textAlign={'start'}>
            {questionProps.hasAnswered ? (
              <div>
                {correctAnswer === questionProps.selectedAnswer ? (
                  ""
                ) :
                  <>
                    <CardActions style={{ backgroundColor: "rgb(145 154 231)", maxWidth: '340px', borderRadius: '5px' }}>
                      <Typography sx={{
                        ":hover": {
                          color: "#ddd",
                        }, display: 'inline-flex',
                        fontSize: 14,
                        alignItems: 'center',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        cursor: 'pointer'
                        // borderRight: '1px solid #ddd'
                      }}
                        onClick={mouseEnter}>
                        Click hint to know where you went wrong?
                      </Typography>
                      {/* <span style={{ padding: 7, display: 'flex', fontSize: 13 }}><IconBellRinging size={15} />18 Question raised from the course you entrolled</span> */}
                      {rotate === true ? (
                        <>  <span style={{ color: "#fff", fontWeight: 'bold' }}></span>
                          <ExpandLessIcon style={{ cursor: 'pointer', fontWeight: 'bold', width: 20, height: 20, justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'end' }} onClick={mouseLeave} />
                        </>
                      ) : <>
                        <span style={{ color: "#fff" }}></span>
                        <ExpandMoreIcon sx={{
                          ":hover": {
                            color: '#fff'
                          }
                        }} style={{ cursor: 'pointer', fontWeight: 'bold', width: 20, height: 20, justifyContent: 'flex-end', alignItems: 'flex-end', textAlign: 'end' }} onClick={mouseEnter} />
                      </>
                      }
                    </CardActions>
                    {hintOpens === true ? (
                      <Modal
                        open={hintOpens}
                        onClose={mouseLeave}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >

                        <Box sx={style}>
                          <div style={{ display: 'flex' }}>
                            <Grid container item xs={12} spacing={2}>
                              <Grid item xs={10.5}>
                                <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#713593', borderRadius: '5px', }}> Hint</Typography>
                              </Grid>
                              <Grid item xs={1.5}>
                                <CloseOutlined onClick={mouseLeave} style={{ color: '#713593', cursor: 'pointer' }} />
                              </Grid>
                            </Grid>
                          </div>
                          <p style={{ padding: 10, paddingTop: 1, backgroundColor: '#fff' }}>
                            You may like to start by skim-reading or “speed-reading” the multiple-choice passages. But then go back and read them slowly and deliberately, and think about the exact meaning of every sentence. Note key words and phrases on your whiteboard if it helps you to concentrate.
                          </p>
                        </Box>
                      </Modal>
                    ) : ""}
                  </>
                }
              </div>
            ) : ""}
          </Grid>
          <Grid item xs={4} justifyContent={'flex-end'} alignItems={'flex-end'} textAlign={'end'}>
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
                {/* <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            > */}
                {/* <Box> */}
                {/* <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#713593', padding: 3, borderRadius: '5px', paddingLeft: 10 }}>  Choose why you went wrong ?</Typography>
                <FormGroup style={{ backgroundColor: '#fff', padding: 15, }}>
                  <FormControlLabel control={<Checkbox onClick={handleChangeAuto} style={{ color: '#713593' }} />} label="Reacted quickly" />
                  <FormControlLabel control={<Checkbox onClick={handleChangeAuto} style={{ color: '#713593' }} />} label="It was Complicated" />
                  <FormControlLabel control={<Checkbox onClick={handleChangeAuto} style={{ color: '#713593' }} />} label="Not Prepared" />
                  <FormControlLabel control={<Checkbox onClick={handleChangeAuto} style={{ color: '#713593' }} />} label="Thought I was right" />
                  <FormControlLabel control={<Checkbox onClick={handleChangeAuto} style={{ color: '#713593' }} />} label="Faulty question" />
                  <FormControlLabel control={<Checkbox onClick={handleChangeAuto} style={{ color: '#713593' }} />} label="Other" />
                </FormGroup> */}
                {/* <CardActions style={{  backgroundColor: "rgb(145 154 231)", maxWidth: '340px', borderRadius: '5px' }}> */}
                {/* <Typography sx={{
                  ":hover": {
                    color: "#ddd",
                  }, display: 'inline-flex',
                  fontSize: 14,
                  alignItems: 'center',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  cursor: 'pointer'
                  // borderRight: '1px solid #ddd'
                }}
                > */}
                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
                <Grid justifyContent={'flex-start'} alignItems={"flex-start"} textAlign={'start'} position={'relative'}>
                  <Card style={{ padding: 5, backgroundColor: '#ddd' ,position:'absolute',top:-260,left:0}}>
                    <Typography style={{ fontSize: 15, fontWeight: 'bold', color: '#713593', padding: 3, borderRadius: '5px', paddingLeft: 10 }}>  Choose why you went wrong ?</Typography>
                    <Button variant='outlined' onClick={handleChangeAuto} style={{ color: '#713593', margin: 6 }} > Reacted quickly</Button>
                    <Button variant='outlined' onClick={handleChangeAuto} style={{ color: '#713593', margin: 6 }} > It was Complicated</Button>
                    <Button variant='outlined' onClick={handleChangeAuto} style={{ color: '#713593', margin: 6 }} > Not Prepared</Button>
                    <Button variant='outlined' onClick={handleChangeAuto} style={{ color: '#713593', margin: 6 }} > Thought I was right</Button>
                    <Button variant='outlined' onClick={handleChangeAuto} style={{ color: '#713593', margin: 6 }} > Faulty question</Button>
                    <Button variant='outlined' onClick={handleChangeAuto} style={{ color: '#713593', margin: 6 }} > Other</Button>
                  </Card>
                </Grid>&nbsp; 
                 {/* 
                <Autocomplete
                  disablePortal
                  size='small'
                  id="combo-box-demo"
                  options={currencies}
                  onChange={handleChangeAuto}
                  sx={{ width: 310, display: 'flex', color: '#fff', backgroundColor: '#D5EFF5', border: '1px solid #fff' }}
                  renderInput={(params) => <TextField  {...params}
                    size='small'
                    style={{ fontWeight: 'bold', border: "2px solid rgb(145 154 231)", backgroundColor: '#D5EFF5' ,color:'#fff'}}
                    label="Choose why you went wrong"
                    variant='outlined'
                  />}
                /> */}
                {/* </Typography> */}
                {/* </CardActions> */}
                {/* </Box> */}
                {/* </Modal> */}
              </div>
            ) : ""
            }
            {questionProps.hasAnswered ? (
              <Button
                variant="contained"
                size="large"
                style={{ paddingTop: 5 }}
                endIcon={<SendRoundedIcon />}
                disabled={questionProps.hasAnswered ? false : true}
                onClick={handleNextClick}
              >
                Next
              </Button>
            ) : ""}
          </Grid>
        </Grid>
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
    </div>
  )
}

export default Question
