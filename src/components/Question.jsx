
import { useState, useMemo } from "react"
export default function Question({ 
    question,
    questionIndex,
    handleClick, 
    incorrectAnswers, 
    correctAnswer, 
    insertAtRandomIndex,
    selectedAnswer, 
    showResults
 }){

    let options = useMemo(() => insertAtRandomIndex(incorrectAnswers, correctAnswer),  [incorrectAnswers, correctAnswer, insertAtRandomIndex])

    function getOptionClassName(option){
 
        if (!showResults){
            return selectedAnswer === option ? 'selected-answer' : ''
        } else {
            if (option === correctAnswer) {
                return 'correct-answer'
            }  else if (option === selectedAnswer && selectedAnswer !== correctAnswer) {
                return 'wrong-answer'
            } 
            return ''
        }
    } 
    
    return (
        <>
            <div className="question">
            <div className="question-and-options">
            <h2 className="question-text">{question}</h2>
            {options.map((option, index) => {
                const id = `option-${index+1}`
                return (<>
                <label 
                    className={`option ${getOptionClassName(option)}`} 
                    htmlFor={id}
                    onClick={() => handleClick(option, questionIndex, question, correctAnswer)}
                >
                    {option}
                </label>
                <input id={id} type="radio" name="choice"/>
                </>)
        })}
            </div>
        </div>
        </>
    )
}