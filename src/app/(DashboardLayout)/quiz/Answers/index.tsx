import { Button } from '@mui/material'
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

  if (hasAnswered) {
    return (
      <>
        {answers.map(a => (
          <Button
            sx={{ display: 'block', mb: 3, textAlign: 'left', }}
            fullWidth
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
             {selectedAnswer === a ?
            <Image src={radioImageHover} alt="logo" height={10} width={10} /> :
            <Image src={radioImage} alt="logo" height={10} width={10} />} &emsp;{a}
            {/* <input type="radio" className="radio-custom" /> {a} */}
          </Button>
        ))}
      </>
    )
  }

  // if he has not answer
  return (
    <>
      {answers.map(a => (
        <Button fullWidth
          sx={{ display: 'block', mb: 3, textAlign: 'left', border: '1px solid #ddd' }}
          variant={selectedAnswer === a ? 'contained' : 'outlined'}
          onClick={() => handleBtnClick(a)}
          key={a}
        >
          {selectedAnswer === a ?
            <Image src={radioImageHover} alt="logo" height={10} width={10} /> :
            <Image src={radioImage} alt="logo" height={10} width={10} />} &emsp;{a}
          {/* <input type="radio" id="choiceA" className="radio-custom" name="question1" />{a} */}
        </Button>
      ))}
    </>
  )
}

export default Answers
