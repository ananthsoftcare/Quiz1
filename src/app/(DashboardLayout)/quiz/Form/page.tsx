'use client'
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import {
  Box,
  Button,
  Card,
  css,
  FormControl,
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
        <Typography
          variant="h6"
          textTransform="capitalize"
          textAlign="center"
          // fontStyle="italic"
          color="#713593"
          fontWeight={'bold'}
          gutterBottom
          sx={{
            background: '-webkit-linear-gradient(45deg ,#713593 , #713593 )',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Chemistry
        </Typography>
        <div style={{ textAlign: 'center', borderRadius: '20px', }}>
          <Image src={chemistry} alt="logo" height={335} width={683} style={{ borderRadius: '20px' }} />
        </div>
        <FormControl margin="normal" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Button
            variant="contained"
            type="submit"
            size="medium"
            style={{ width: '20%' }}
            onClick={handleSubmitEvent}
          >
            <Typography variant="h6">Start Quiz</Typography>
          </Button>
        </FormControl>
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
            sx={{ display: 'block', textAlign: 'left', color: '#073763', fontWeight: 'bold',backgroundColor:'#faa917'}}
            onClick={handleSkipBtnClick}
          >Cancel Quiz</Button>
        </Box>
        {/* </FormControl> */}
      </Card>
    </form>
  )
}

export default Form
