import { Button, FormControl } from '@mui/material'
import { FC, useState } from 'react'
import { IAnswersComponentProps } from '../../types'
import { Icon24Hours } from '@tabler/icons-react'
import '../Answers/quiz.css'

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

  if (hasAnswered) {
    return (
      <>
        {answers.map(a => (
          <FormControl margin="normal" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Button
              sx={{ display: 'block',  textAlign: 'left', width: "70%" }}
              // fullWidth
              variant={
                selectedAnswer === a
                  ? 'contained'
                  : a === correctAnswer
                    ? 'contained'
                    : 'outlined'
              }
              color={a === correctAnswer ? 'success' : 'error'}
              disabled={a !== correctAnswer && a !== selectedAnswer}
              key={a}
            >
              <input type="radio" className="radio-custom" /> {a}
            </Button>
          </FormControl>
        ))}
      </>
    )
  }

  // if he has not answer
  return (
    <>
      {answers.map(a => (
        <FormControl margin="normal" style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Button fullWidth
            sx={{ display: 'block', textAlign: 'left', width: "70%" }}
            variant={selectedAnswer === a ? 'contained' : 'outlined'}
            onClick={() => handleBtnClick(a)}
            key={a}
          >
            <input type="radio" id="choiceA" className="radio-custom" name="question1" />{a}
          </Button>
        </FormControl>
      ))}
    </>
  )
}

export default Answers
