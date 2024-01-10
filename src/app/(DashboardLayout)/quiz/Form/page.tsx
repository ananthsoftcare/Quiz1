'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import {
  Box,
  Button,
  Card,
  css,
  FormControl,
  Grid,
  InputLabel,
  keyframes,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import { IHomePageProps } from '../../types';
import chemistry1 from '../images/chemistry1.jpeg'
import chemistry from '../images/chemistry.jpeg'
import chemistry3 from '../images/chemistry3.jpeg'
import quizimage from '../images/quiz.png'
import Image from 'next/image';
import { IconArrowBigRightLine, IconSend, IconSortAscending2 } from '@tabler/icons-react';
// import type { IHomePageProps, IFormOptions } from '../types'

interface IFormComponentProps extends IHomePageProps {
  showLoader: () => void
}

const Form = (
) => {
  const router = useRouter()
  const [questionNumber, setQuestionNumber] = useState(5)
  const [options, setOptions] = useState({
    category: '0',
    type: 'any',
    difficulty: 'any',
  })

  // function
  const handleQuestionsNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)

    if (value < 1 || value > 50 || isNaN(value)) {
      e.preventDefault()
      return false
    }

    setQuestionNumber(value)
  }

  const handleDropDownChange = (
    e: SelectChangeEvent<unknown>,
    TARGET: 0 | 1 | 2
  ) => {
    const value = e?.target?.value
    let key = ['category', 'type', 'difficulty'][TARGET]

    setOptions(prevOptions => ({ ...prevOptions, [key]: value }))
  }

  const handleSubmitEvent = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    // showLoader()

    router.push(
      // {
      //     pathname: '/quiz',
      //     query: { questionNumber, ...options },
      // },
      '/quiz'
    )
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
    <form method="post">
      <Card sx={{ p: 1, width: 'max(100%,500px)', mx: 'auto' }}>
        <Grid container item xs={12}>
          <Grid item xs={6} padding={4}>
            <div style={{ textAlign: 'left', borderRadius: '20px', }}>
              <Image src={chemistry} alt="logo" height={305} width={483} style={{ borderRadius: '20px' }} />
            </div>
          </Grid>
          <Grid item xs={6} padding={15}>
            <Typography
              variant="h4"
              textTransform="capitalize"
              textAlign="center"
              // fontStyle="italic"
              color="#713593"
              fontWeight={'bold'}
              gutterBottom
              style={{
                fontWeight: 'bold',
                background: '-webkit-linear-gradient(45deg ,#713593 , #713593 )',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Chemistry
            </Typography>
            <FormControl margin="normal" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <Button
                variant="contained"
                type="submit"
                size="medium"
                sx={{
                  ":hover": {
                    color: "#fff",
                    background: 'linear-gradient(32deg,#073763, #073763, #073763,#073763)',
                    boxShadow: "2px 2px 5px 0px #073763",
                    fontSize: 16,
                    fontWeight: 'bold'
                  },
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
                style={{ width: '80%' }}
                onClick={handleSubmitEvent}
              >
                Start Quiz &nbsp;<IconArrowBigRightLine />
              </Button>
            </FormControl>
          </Grid>
        </Grid>
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
            size='small'
            sx={{ display: 'block', textAlign: 'left', color: '#073763', fontWeight: 'bold', backgroundColor: '#faa917' }}
            onClick={handleSkipBtnClick}
          >Cancel Quiz</Button>
        </Box>
        {/* </FormControl> */}
      </Card>
    </form>
  )
}

export default Form
