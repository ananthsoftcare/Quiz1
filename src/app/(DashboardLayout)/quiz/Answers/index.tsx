import { Autocomplete, Button, FormControl, Grid, MenuItem, TextField } from '@mui/material'
import { FC, useState } from 'react'
import { IAnswersComponentProps } from '../../types'
import { Icon24Hours } from '@tabler/icons-react'
import '../Answers/quiz.css'
import chemistry from '../Question/chemistry.jpg';
import chemistry1 from '../images/chemistry1.jpeg'
import radioImageHover from '../images/radiohover.png'
import radioImage from '../images/radioicon.png'
import Image from 'next/image'

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}

const Answers: FC<IAnswersComponentProps> = ({
  answers,
  correctAnswer,
  hasAnswered,
  updateScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const handleBtnClick = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer)
      updateScore(answer)
    }
  }

  const currencies = [
    {
      label: 'I was too quick',
    },
    {
      label: 'I thought i know',
    },
    {
      label: 'I was almost right',
    },
    {
      label: 'The system validation is wrong',
    },
    {
      label: 'I do not know',
    },
  ];

  if (hasAnswered) {
    return (
      <>
        {answers.map((a, i) => {
          return (
            < FormControl key={i} margin="normal" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundImage: `url(${chemistry})` }}>
              <Button
                sx={{ display: 'block', textAlign: 'left', width: "70%" }}
                fullWidth
                variant={
                  selectedAnswer === a
                    ? 'contained'
                    : a === correctAnswer
                      ? 'contained'
                      : 'outlined'
                }
                // style={{ color: a === correctAnswer ? '#fff' : '#fff', backgroundColor: a === correctAnswer ? '#fff' : '#fff', border: a === correctAnswer ? '1px solid #274E13' : '1px solid #CC0000', fontWeight: a === correctAnswer ? 'bold' : '' }}
                color={a === correctAnswer ? 'success' : 'error'}
                disabled={a !== correctAnswer && a !== selectedAnswer}
                key={a}
              >
                {(a === selectedAnswer && a !== correctAnswer) ? (
                  <Grid container item xs={12} display={'flex'}>
                    <Grid item xs={7}>
                      {selectedAnswer === a ?
                        <Image src={radioImageHover} alt="logo" height={12} width={12} /> :
                        <Image src={radioImage} alt="logo" height={12} width={12} />} &emsp;{a}
                      {/* <input type="radio" className="radio-custom" /> {a} */}
                    </Grid>
                    <Grid item xs={5}>
                      {(a === selectedAnswer && a !== correctAnswer) ?
                        <Autocomplete
                          disablePortal
                          size='small'
                          id="combo-box-demo"
                          options={currencies}
                          sx={{ width: 230, display: 'flex', color: '#fff', backgroundColor: '#fff', border: '1px solid #fff' }}
                          renderInput={(params) => <TextField  {...params}
                            size='small'
                            label="Choose why you went wrong"
                            variant='outlined'
                          />}
                        />
                        : ""}
                    </Grid>
                  </Grid>
                ) :
                  <>
                    {selectedAnswer === a ?
                      <Image src={radioImageHover} alt="logo" height={12} width={12} /> :
                      <Image src={radioImage} alt="logo" height={12} width={12} />} &emsp;{a}
                    {/* <input type="radio" className="radio-custom" /> {a} */}
                  </>
                }
              </Button>
            </FormControl >
          )
        })
        }
      </>
    )
  }

  // if he has not answer
  return (
    <>
      {answers.map((a, i) => (
        <FormControl key={i} margin="normal" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Button fullWidth
            sx={{ display: 'block', textAlign: 'left', width: "70%" }}
            variant={selectedAnswer === a ? 'contained' : 'outlined'}
            onClick={() => handleBtnClick(a)}
            key={a}
          >
            {selectedAnswer === a ?
              <Image src={radioImageHover} alt="logo" height={10} width={10} /> :
              <Image src={radioImage} alt="logo" height={10} width={10} />} &emsp;{a}
            {/* <input type="radio" id="choiceA" className="radio-custom" name="question1" /> */}
          </Button>
        </FormControl>
      ))}
    </>
  )
}

export default Answers
