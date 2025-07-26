export default function Question({ options}){
   console.log(options[0], 'sss');
   

    return (
        <div className="question">
            <div className="question-and-options">
            <h2 className="question-text">How would one say goodbye in Spanish?</h2>
            <label className="option" htmlFor="option-1">{options[0]}</label>
            <input id="option-1" type="radio" name="choice"/>

            <label className="option" htmlFor="option-2">{options[1]}</label>
            <input id="option-2" type="radio" name="choice"/>


            <label className="option" htmlFor="option-3">{options[2]}</label>
            <input id="option-3" type="radio" name="choice"/>

            <label className="option" htmlFor="option-4">{options[3]}</label>
            <input id="option-4" type="radio" name="choice"/>
            </div>
        </div>
    )
}