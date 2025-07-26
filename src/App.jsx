import { useState, useEffect } from 'react'

import Question from './components/Question'
import './App.css'

function App() {
  const [show, setShow] = useState(false)
  function showQuiz() {
    setShow(true)
  }

  useEffect(() => {console.log(show);
  }, [show])


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

  const options = [
        "American football",
        "Combball",
        "Handball",
        "Touchdown"
  ]

  const questionComponents = [...Array(5)].map((_, i) => <Question key={i} options={options}/>)  

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
        
        <button className='check-answers'>Check answers</button>
      </>
      }
    </>
  )
}

export default App
