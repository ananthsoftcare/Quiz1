"use client"
import axios from 'axios'
import { decode } from 'html-entities'
import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Loader from './Loader'
import Question from './Question/Question'

// interface IQuizPageProps {
//     questionsLists: [
//         {
//             "id": "1",
//             "type": "multiple",
//             "question": "A flashing red traffic light signifies that a driver should do what?",
//             "incorrect_answers": ['Smooth traffic movement', 'Risk of accidents lowered at the crossings/ junctions', 'Traffic lights helps in the movement of the pedestrians'],
//             "correct_answer": "A traffic signal system comprises a controller, traffic lights, and detection",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "2",
//             "type": "multiple",
//             "question": "A knish is traditionally stuffed with what filling?",
//             "incorrect_answers": ['Yiddish word of Slavic origin, related to the Ukrainian knysh (книш) and Polish knysz', 'They are usually served with a side of spicy mustard. Knishes are traditionally eaten as a snack.', 'Filling savory baked dumpling'],
//             "correct_answer": "Mashed potatoes wrapped in paper-thin pastry dough and then baked or fried",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "3",
//             "type": "multiple",
//             "question": "A pita is a type of what?",
//             "incorrect_answers": ['fresh fruit', 'flat bread', 'French tart'],
//             "correct_answer": "friend bean dip",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "4",
//             "type": "multiple",
//             "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
//             "incorrect_answers": ['landscape', 'still life', 'Impressionism'],
//             "correct_answer": "caricature",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "5",
//             "type": "multiple",
//             "question": "A second-year college student is usually called a what?",
//             "incorrect_answers": ['senior', 'freshman', 'junior'],
//             "correct_answer": "sophomore",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "6",
//             "type": "multiple",
//             "question": "A student who earns a J.D. can begin his or her career as a what?",
//             "incorrect_answers": ['bricklayer', 'doctor', 'accountant'],
//             "correct_answer": "lawyer",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "7",
//             "type": "multiple",
//             "question": "A triptych is a work of art that is painted on how many panels?",
//             "incorrect_answers": ['two', 'five', 'eight'],
//             "correct_answer": "three",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "8",
//             "type": "multiple",
//             "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
//             "incorrect_answers": ['oneself', 'little made large', 'hued in green and blue'],
//             "correct_answer": "other people",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "9",
//             "type": "multiple",
//             "question": "According to a popular slogan, what state should people not 'mess with'?",
//             "incorrect_answers": ['New York', 'Montana', 'Island'],
//             "correct_answer": "Texas",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         },
//         {
//             "id": "10",
//             "type": "multiple",
//             "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
//             "incorrect_answers": ['tuna', 'laundry', 'popcorn'],
//             "correct_answer": "coffee",
//             "difficulty": "medium",
//             "category": "Entertainment : Music"
//         }
//     ]
// }

const QuizPage: NextPage = () => {
    const questionsList = [
        {
            "id": "1",
            "type": "multiple",
            "question": "A flashing red traffic light signifies that a driver should do what?",
            "incorrect_answers": ['Smooth traffic movement', 'Risk of accidents lowered at the crossings/ junctions', 'Traffic lights helps in the movement of the pedestrians'],
            "correct_answer": "A traffic signal system comprises a controller, traffic lights, and detection",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "2",
            "type": "multiple",
            "question": "A knish is traditionally stuffed with what filling?",
            "incorrect_answers": ['Yiddish word of Slavic origin, related to the Ukrainian knysh (книш) and Polish knysz', 'They are usually served with a side of spicy mustard. Knishes are traditionally eaten as a snack.', 'Filling savory baked dumpling'],
            "correct_answer": "Mashed potatoes wrapped in paper-thin pastry dough and then baked or fried",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "3",
            "type": "multiple",
            "question": "A pita is a type of what?",
            "incorrect_answers": ['fresh fruit', 'flat bread', 'French tart'],
            "correct_answer": "friend bean dip",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "4",
            "type": "multiple",
            "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
            "incorrect_answers": ['landscape', 'still life', 'Impressionism'],
            "correct_answer": "caricature",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "5",
            "type": "multiple",
            "question": "A second-year college student is usually called a what?",
            "incorrect_answers": ['senior', 'freshman', 'junior'],
            "correct_answer": "sophomore",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "6",
            "type": "multiple",
            "question": "A student who earns a J.D. can begin his or her career as a what?",
            "incorrect_answers": ['bricklayer', 'doctor', 'accountant'],
            "correct_answer": "lawyer",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "7",
            "type": "multiple",
            "question": "A triptych is a work of art that is painted on how many panels?",
            "incorrect_answers": ['two', 'five', 'eight'],
            "correct_answer": "three",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "8",
            "type": "multiple",
            "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
            "incorrect_answers": ['oneself', 'little made large', 'hued in green and blue'],
            "correct_answer": "other people",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "9",
            "type": "multiple",
            "question": "According to a popular slogan, what state should people not 'mess with'?",
            "incorrect_answers": ['New York', 'Montana', 'Island'],
            "correct_answer": "Texas",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        },
        {
            "id": "10",
            "type": "multiple",
            "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
            "incorrect_answers": ['tuna', 'laundry', 'popcorn'],
            "correct_answer": "coffee",
            "difficulty": "medium",
            "category": "Entertainment : Music"
        }
    ]
    const [loading, setLoading] = useState(false)
    const [gameScore, setGameScore] = useState(0)
    const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(1)
    const questionsCount = questionsList?.length ?? 0
    const targetQuestion = questionsList?.find(
        (Q, index) => index === currentQuestionIndex - 1
    )

    const nextQuestion = () => SetCurrentQuestionIndex(x => x + 1)
    const previousQuestion = () => SetCurrentQuestionIndex(x => x - 1)
    const updateScore = () => setGameScore(s => s + 1)

    return (
        <>
            <Question
                key={currentQuestionIndex}
                number={currentQuestionIndex}
                question={decode(targetQuestion?.question)}
                correctAnswer={decode(targetQuestion?.correct_answer)}
                falseAnswers={targetQuestion?.incorrect_answers?.map((a: string) =>
                    decode(a)
                )}
                previousQuestion={previousQuestion}
                nextQuestion={nextQuestion}
                questionsCount={questionsCount}
                score={gameScore}
                updateScore={updateScore}
                showLoader={() => setLoading(true)}
            />
            <Loader loading={loading} />
        </>
    )
}

// export const getServerSideProps: GetServerSideProps = async context => {
//     // if query.category === undefined (we don't get the query params) => redirect to home page
//     if (!Boolean(context.query.category)) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }

//     const API = 'https://opentdb.com/api.php'
//     const { questionNumber, category, type, difficulty } = context.query
//     const requestParams = {
//         amount: questionNumber,
//         category: category !== '0' ? category : null,
//         type: type !== 'any' ? type : null,
//         difficulty: difficulty !== 'any' ? difficulty : null,
//     }
//     const questionsList = (await axios.get(API, { params: requestParams })).data
//         .results

//     return {
//         props: { questionsList },
//     }
// }

export default QuizPage
