import { useState, useEffect, useMemo } from 'react'
import Question from './components/Question'
import './App.css'
import { insertValAtRandomIndex } from '../utils.js'

function App() {
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(false)
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [questions, setQuestions] = useState([])
  function showQuiz() {
    setShow(true)
  }

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results) 
      })
  }, [])

  const topRightshapeStyles = !show ? {
    top: 0,
    right: 0,  
    backgroundColor: '#FFFAD1',
    transform: 'translate(41%, -54%)'

  } : {
    top: '0px',
    right: '0px',
    backgroundColor: '#FFFAD1',
    transform: 'translate(72%, -50%)',
  }

  const bottomLeftshapeStyles = !show ? {
    bottom: 0,
    left: 0,
    backgroundColor: '#DEEBF8',
    transform: 'translate(-47%, 57%)'

  } : {
    bottom: 0,
    left: 0,
    backgroundColor: '#DEEBF8',
    transform: 'translate(-60%, 73%)',
  }

  function gradeAnswers(){
    setShowResults(true)
    answers.forEach(answer => {
      if (answer.selectedAnswer === answer.correctAnswer) {
        setCorrectAnswersCount(prev => prev + 1)
      }
    })
  }

  function handleClick(option, questionIndex, question, correctAnswer){
      setSelected(true);
      setAnswers(prev => {
          const filteredQuestions = prev.filter(question => question.questionIndex !== questionIndex);
          return [...filteredQuestions, {
                  questionIndex: questionIndex,
                  question: question, 
                  selectedAnswer: option, 
                  correctAnswer: correctAnswer, 
              }]
      })
  }

  function resetGame(){
    setAnswers([])
    setShowResults(false)
  }
    
  function getSelectedAnswer(questionIndex){
    const answer = answers.find(answer => answer.questionIndex === questionIndex);
    return answer ? answer.selectedAnswer : null
  }  
  const questionComponents = questions.map((curr, index) => <Question key={index} 
                                                              questionIndex={index}
                                                              question={curr.question}
                                                              correctAnswer={curr.correct_answer}
                                                              incorrectAnswers={curr.incorrect_answers}
                                                              insertAtRandomIndex={insertValAtRandomIndex}
                                                              handleClick={handleClick}
                                                              selectedAnswer={getSelectedAnswer(index)}
                                                              showResults={showResults}
                                                      />)  

  return (
    <>
      <div style={topRightshapeStyles} className='shape'></div>
      {!show && <> <h1 className='main-heading'>Quizzical</h1>
      <h2 className='description'>Test your knowledge with fun quizzes!</h2>
      <button onClick={showQuiz} className='start-quiz'>Start quiz</button></>}
      <div style={bottomLeftshapeStyles} className='shape'></div>
      {show && 
      <>
        {questionComponents}
        {showResults ? 
            <div className='play-again'>
              <p>You scored {correctAnswersCount}/{answers.length} correct answers</p> 
              <button className='btn play-again-btn' onClick={resetGame}>Play again</button>
            </div>
        : <button onClick={gradeAnswers} className='btn check-answers'>Check answers</button>}
      </>
      }
    </>
  )
}

export default App
